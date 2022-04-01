/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
import * as DOM from './DOM';
import renderShips from './renderPlacedShips';

function resetShips() {
  DOM.resetBtn.addEventListener('click', () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  });
}

function playAgainBtn() {
  DOM.playAgain.addEventListener('click', () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  });
}

function play(player) {
  DOM.playBtn.addEventListener('click', () => {
    const setupShips = document.querySelector('.setupShips');

    if (setupShips.getElementsByTagName('*').length === 1) {
      DOM.removeSetupPage();
      DOM.renderMainPage();
      renderShips(player);
    } else {
      alert('please place all ships');
    }
  });
}

let status = 'inactive';
let checkLeft = 'inactive';
let Coord = '';
let initialIndex = '';

const onClickAttack = (computer, player) => {
  DOM.mainGridElements.forEach((element) => {
    element.addEventListener('click', (e) => {
      const playerSelectedCoords = e.target.id;
      const checkPlayerSelection = e.target.style.backgroundColor;

      // if a grid has previously been selected do nothing
      if (checkPlayerSelection === 'red' || checkPlayerSelection === 'blue') {
        // do nothing
      } else {
        // player selects a grid and attacks the computer
        computer.receiveAttack(playerSelectedCoords, computer);

        // if a ship wasn't previously hit get a random coord from the board grid
        if (status === 'inactive') {
          Coord = board[Math.floor(Math.random() * board.length)];
        }
        if (Coord === undefined) {
          Coord = board[Math.floor(Math.random() * board.length)];
        }

        // computer attacks the player and checks if it hit a ship or not
        checkBoard(Coord, player);
      }
    });
  });
};

function checkBoard(randomCoord, player) {
  const index = board.indexOf(randomCoord);

  // remove the targeted grid from the board array
  board.splice(index, 1);

  // computer attacks the player based on the selected grid
  player.receiveAttack(randomCoord, player);

  // this checks to see if the attack hit a ship or not
  const check = document.querySelector(`.gridTwo#${randomCoord}`).style
    .backgroundColor;

  // if a ship was hit set the status to active and record the Coords
  // if a ship was previously hit either check right or left
  if (check === 'red') {
    if (status === 'inactive') {
      status = 'active';
      Coord = board[index];
      initialIndex = index;
    } else if (checkLeft === 'active') {
      initialIndex -= 1;
      Coord = board[initialIndex];
    } else if (checkLeft === 'inactive') {
      Coord = board[index];
    }
  }
  // if a ship was previously hit but this attack misses
  // go back and check the gird left to the initial attack
  if (check === 'blue' && status === 'active') {
    if (checkLeft === 'active') {
      checkLeft = 'inactive';
      status = 'inactive';
    } else {
      initialIndex -= 1;
      Coord = board[initialIndex];
      checkLeft = 'active';
    }
  }
}

let board = [
  'A1',
  'A2',
  'A3',
  'A4',
  'A5',
  'A6',
  'A7',
  'A8',
  'A9',
  'A10',
  'B1',
  'B2',
  'B3',
  'B4',
  'B5',
  'B6',
  'B7',
  'B8',
  'B9',
  'B10',
  'C1',
  'C2',
  'C3',
  'C4',
  'C5',
  'C6',
  'C7',
  'C8',
  'C9',
  'C10',
  'D1',
  'D2',
  'D3',
  'D4',
  'D5',
  'D6',
  'D7',
  'D8',
  'D9',
  'D10',
  'E1',
  'E2',
  'E3',
  'E4',
  'E5',
  'E6',
  'E7',
  'E8',
  'E9',
  'E10',
  'F1',
  'F2',
  'F3',
  'F4',
  'F5',
  'F6',
  'F7',
  'F8',
  'F9',
  'F10',
  'G1',
  'G2',
  'G3',
  'G4',
  'G5',
  'G6',
  'G7',
  'G8',
  'G9',
  'G10',
  'H1',
  'H2',
  'H3',
  'H4',
  'H5',
  'H6',
  'H7',
  'H8',
  'H9',
  'H10',
  'I1',
  'I2',
  'I3',
  'I4',
  'I5',
  'I6',
  'I7',
  'I8',
  'I9',
  'I10',
  'J1',
  'J2',
  'J3',
  'J4',
  'J5',
  'J6',
  'J7',
  'J8',
  'J9',
  'J10',
];

export { resetShips, play, onClickAttack, playAgainBtn };

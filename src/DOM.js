export const draggables = document.querySelectorAll('.draggable');
export const containers = document.querySelectorAll('.gridOne');
export const resetBtn = document.querySelector('.btnReset');
export const playBtn = document.querySelector('#btnPlay');
export const playBtnContainer = document.querySelector('.btnPlay');
export const gameSetupContainer = document.querySelector('.gameSetupContainer');
export const gameBoardContainer = document.querySelector('.gameBoardContainer');
export const mainGridElements = document.querySelectorAll('.gridThree');
export const mainGridElement = document.querySelector('.gridThree');
export const playAgain = document.querySelector('.playAgain');
export const playerRadarContainer = document.querySelector(
  '.playerRadarContainer'
);
export const mainBoardContainer = document.querySelector('.mainBoardContainer');

export function removeSetupPage() {
  gameSetupContainer.style.display = 'None';
  playBtnContainer.style.display = 'None';
}

export function renderMainPage() {
  gameBoardContainer.style.display = 'initial';
  playerRadarContainer.style.animation = 'fade 1s ease-in-out 1 forwards';
  mainBoardContainer.style.animation = 'fade 1s ease-in-out 1 forwards';
}

export function renderWhiteDot(coords, grid) {
  const element = document.querySelector(`.${grid}#${coords}`);
  element.style.backgroundColor = 'blue';
}

export function renderRedDot(coords, grid) {
  const element = document.querySelector(`.${grid}#${coords}`);
  element.style.backgroundColor = 'red';
}

export function renderShipSunk(text, shipName, player) {
  const element = document.querySelector('.shipSunk');
  const backGround = document.querySelector('.backgroundBlur');
  const image = document.querySelector('.sunkShipImg');
  const div = document.querySelector('.sunkShipText');

  if (player !== 'computer') {
    element.style.borderColor = 'rgb(255, 35, 35)';
    element.style.color = 'rgb(255, 35, 35)';
  } else {
    element.style.borderColor = 'rgb(0, 255, 0)';
    element.style.color = 'rgb(0, 255, 0)';
  }

  element.style.display = 'flex';
  backGround.style.display = 'flex';
  image.src = `images/${shipName.replace(/[0-9]/g, '')}.png`;
  image.style.width = '130px';
  image.style.height = 'auto';
  div.innerHTML = text.toUpperCase();

  setTimeout(() => {
    element.style.display = 'none';
    backGround.style.display = 'none';
  }, 1500);
}

export function renderGameOver(player) {
  const element = document.querySelector('.gameOver');
  const backGround = document.querySelector('.backgroundBlur');
  const text = document.querySelector('.announceWinner');

  setTimeout(() => {
    element.style.display = 'flex';
    backGround.style.display = 'flex';

    if (player === 'player') {
      text.innerHTML = 'The Computer Wins the Battle!';
      element.style.borderColor = 'rgb(255, 35, 35)';
      element.style.color = 'rgb(255, 35, 35)';
    } else {
      text.innerHTML = 'YOU win the Battle!';
    }
  }, 1500);
}

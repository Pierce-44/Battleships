/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
import * as DOM from './DOM';
import shipFactory from './shipFactory';

const gameBoard = (setName) => {
  const name = setName;

  const carrier = shipFactory(5);
  const battleShip = shipFactory(4);
  const cruiser = shipFactory(3);
  const destroyer1 = shipFactory(2);
  const destroyer2 = shipFactory(2);
  const submarine1 = shipFactory(2);
  const submarine2 = shipFactory(2);

  const shipCoords = {
    carrier: 'none',
    battleShip: 'none',
    cruiser: 'none',
    destroyer1: 'none',
    destroyer2: 'none',
    submarine1: 'none',
    submarine2: 'none',
  };

  const setShipPosition = (ship, coords, player) => {
    const letter = coords.replace(/[0-9]/g, '');
    const number = coords.replace(/\D/g, '');
    const length = player[ship].shipInfo.shipLength;
    let finalCoords = '';

    for (let i = 0; i < length; i++) {
      finalCoords = finalCoords.concat(`${letter + (Number(number) + i)} `);
    }

    shipCoords[ship] = finalCoords;
  };

  const receiveAttack = (coords, player) => {
    let status;
    for (let i = 0; i < 7; i++) {
      const element = Object.values(shipCoords)[i];
      const shipName = Object.keys(shipCoords)[i];

      if (element.includes(coords)) {
        player[shipName].hit(name, shipName);
        checkSunkenShips(player);
        status = 'active';

        if (name === 'computer') {
          DOM.renderRedDot(coords, 'gridThree');
        } else if (name === 'player') {
          DOM.renderRedDot(coords, 'gridTwo');
        }
      } else if (status !== 'active') {
        if (name === 'computer') {
          DOM.renderWhiteDot(coords, 'gridThree');
        } else if (name === 'player') {
          DOM.renderWhiteDot(coords, 'gridTwo');
        }
      }
    }
  };

  return {
    setShipPosition,
    receiveAttack,
    shipCoords,
    carrier,
    battleShip,
    cruiser,
    destroyer1,
    destroyer2,
    submarine1,
    submarine2,
    name,
  };
};

function checkSunkenShips(player) {
  if (
    player.carrier.shipInfo.damageStatus === 'sunken' &&
    player.battleShip.shipInfo.damageStatus === 'sunken' &&
    player.cruiser.shipInfo.damageStatus === 'sunken' &&
    player.destroyer1.shipInfo.damageStatus === 'sunken' &&
    player.destroyer2.shipInfo.damageStatus === 'sunken' &&
    player.submarine1.shipInfo.damageStatus === 'sunken' &&
    player.submarine2.shipInfo.damageStatus === 'sunken'
  ) {
    DOM.renderGameOver(player.name);
  }
}

export default gameBoard;

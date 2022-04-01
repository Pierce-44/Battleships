/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
function computerShipPlacements(computer) {
  let yCoords = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  for (let i = 0; i < 7; i++) {
    const getShips = computer.shipCoords;
    const shipName = Object.keys(getShips)[i];
    const letter = yCoords[Math.floor(Math.random() * yCoords.length)];
    let number = '';

    if (shipName === 'carrier') {
      number = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
      computer.shipCoords[shipName] = `${
        letter + number
      } ${letter}${++number} ${letter}${++number} ${letter}${++number} ${letter}${++number}`;
    } else if (shipName === 'battleShip') {
      number = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
      computer.shipCoords[shipName] = `${
        letter + number
      } ${letter}${++number} ${letter}${++number} ${letter}${++number}`;
    } else if (shipName === 'cruiser') {
      number = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
      computer.shipCoords[shipName] = `${
        letter + number
      } ${letter}${++number} ${letter}${++number}`;
    } else {
      number = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
      computer.shipCoords[shipName] = `${
        letter + number
      } ${letter}${++number} `;
    }
    yCoords = yCoords.filter((e) => e !== letter);
  }
}

export default computerShipPlacements;

/* eslint-disable no-plusplus */

function renderShips(player) {
  const coords = player.shipCoords;

  for (let i = 0; i < 7; i++) {
    let shipName = Object.keys(coords)[i];
    const coord = Object.values(coords)[i].substring(0, 2);
    const shipImg = document.createElement('img');
    const getGridElement = document.querySelector(`.gridTwo#${coord}`);

    if (shipName.substr(-1) === '1' || shipName.substr(-1) === '2') {
      shipName = shipName.slice(0, 9);
    }

    if (shipName === 'submarine' || shipName === 'destroyer') {
      shipImg.style.width = '45px';
    }
    if (shipName === 'carrier') {
      shipImg.style.width = '105px';
    }
    if (shipName === 'cruiser') {
      shipImg.style.width = '65px';
    }
    if (shipName === 'battleShip') {
      shipImg.style.width = '85px';
    }

    shipImg.src = `images/${shipName}.png`;
    shipImg.style.position = 'absolute';
    getGridElement.appendChild(shipImg);
  }
}

export default renderShips;

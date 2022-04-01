// const draggables = document.querySelectorAll('.draggable');
// const containers = document.querySelectorAll('.gridOne');

import * as DOM from './DOM';

function dragDropShips(player1) {
  let targetedShip = '';
  let coord = '';

  // dragging event listeners
  DOM.draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', (event) => {
      targetedShip = event.target.id;
      draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');
    });
  });

  // container that checks for the dragging elements
  DOM.containers.forEach((container) => {
    container.addEventListener('dragover', () => {
      coord = container.id;

      const draggable = document.querySelector('.dragging');
      const number = coord.replace(/\D/g, '');
      const length = player1[targetedShip].shipInfo.shipLength;

      // checks to make sure the ship is placed within the container
      // and that a current ship doesnt occupy the grid
      // then appends the dragged element to the selected grid
      if (length <= 11 - number && container.className !== 'gridOne used') {
        container.appendChild(draggable);
        container.classList.add('used');
        player1.setShipPosition(targetedShip, coord, player1);
      } else {
        // do nothing
      }
    });
  });
}

export default dragDropShips;

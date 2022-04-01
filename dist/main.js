/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "containers": () => (/* binding */ containers),
/* harmony export */   "draggables": () => (/* binding */ draggables),
/* harmony export */   "gameBoardContainer": () => (/* binding */ gameBoardContainer),
/* harmony export */   "gameSetupContainer": () => (/* binding */ gameSetupContainer),
/* harmony export */   "mainBoardContainer": () => (/* binding */ mainBoardContainer),
/* harmony export */   "mainGridElement": () => (/* binding */ mainGridElement),
/* harmony export */   "mainGridElements": () => (/* binding */ mainGridElements),
/* harmony export */   "playAgain": () => (/* binding */ playAgain),
/* harmony export */   "playBtn": () => (/* binding */ playBtn),
/* harmony export */   "playBtnContainer": () => (/* binding */ playBtnContainer),
/* harmony export */   "playerRadarContainer": () => (/* binding */ playerRadarContainer),
/* harmony export */   "removeSetupPage": () => (/* binding */ removeSetupPage),
/* harmony export */   "renderGameOver": () => (/* binding */ renderGameOver),
/* harmony export */   "renderMainPage": () => (/* binding */ renderMainPage),
/* harmony export */   "renderRedDot": () => (/* binding */ renderRedDot),
/* harmony export */   "renderShipSunk": () => (/* binding */ renderShipSunk),
/* harmony export */   "renderWhiteDot": () => (/* binding */ renderWhiteDot),
/* harmony export */   "resetBtn": () => (/* binding */ resetBtn)
/* harmony export */ });
const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.gridOne');
const resetBtn = document.querySelector('.btnReset');
const playBtn = document.querySelector('#btnPlay');
const playBtnContainer = document.querySelector('.btnPlay');
const gameSetupContainer = document.querySelector('.gameSetupContainer');
const gameBoardContainer = document.querySelector('.gameBoardContainer');
const mainGridElements = document.querySelectorAll('.gridThree');
const mainGridElement = document.querySelector('.gridThree');
const playAgain = document.querySelector('.playAgain');
const playerRadarContainer = document.querySelector(
  '.playerRadarContainer'
);
const mainBoardContainer = document.querySelector('.mainBoardContainer');

function removeSetupPage() {
  gameSetupContainer.style.display = 'None';
  playBtnContainer.style.display = 'None';
}

function renderMainPage() {
  gameBoardContainer.style.display = 'initial';
  playerRadarContainer.style.animation = 'fade 1s ease-in-out 1 forwards';
  mainBoardContainer.style.animation = 'fade 1s ease-in-out 1 forwards';
}

function renderWhiteDot(coords, grid) {
  const element = document.querySelector(`.${grid}#${coords}`);
  element.style.backgroundColor = 'blue';
}

function renderRedDot(coords, grid) {
  const element = document.querySelector(`.${grid}#${coords}`);
  element.style.backgroundColor = 'red';
}

function renderShipSunk(text, shipName, player) {
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

function renderGameOver(player) {
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


/***/ }),

/***/ "./src/buttonFunctionalities.js":
/*!**************************************!*\
  !*** ./src/buttonFunctionalities.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onClickAttack": () => (/* binding */ onClickAttack),
/* harmony export */   "play": () => (/* binding */ play),
/* harmony export */   "playAgainBtn": () => (/* binding */ playAgainBtn),
/* harmony export */   "resetShips": () => (/* binding */ resetShips)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _renderPlacedShips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderPlacedShips */ "./src/renderPlacedShips.js");
/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */



function resetShips() {
  _DOM__WEBPACK_IMPORTED_MODULE_0__.resetBtn.addEventListener('click', () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  });
}

function playAgainBtn() {
  _DOM__WEBPACK_IMPORTED_MODULE_0__.playAgain.addEventListener('click', () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  });
}

function play(player) {
  _DOM__WEBPACK_IMPORTED_MODULE_0__.playBtn.addEventListener('click', () => {
    const setupShips = document.querySelector('.setupShips');

    if (setupShips.getElementsByTagName('*').length === 1) {
      _DOM__WEBPACK_IMPORTED_MODULE_0__.removeSetupPage();
      _DOM__WEBPACK_IMPORTED_MODULE_0__.renderMainPage();
      (0,_renderPlacedShips__WEBPACK_IMPORTED_MODULE_1__["default"])(player);
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
  _DOM__WEBPACK_IMPORTED_MODULE_0__.mainGridElements.forEach((element) => {
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




/***/ }),

/***/ "./src/computerDecisions.js":
/*!**********************************!*\
  !*** ./src/computerDecisions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (computerShipPlacements);


/***/ }),

/***/ "./src/dragDropFunctionality.js":
/*!**************************************!*\
  !*** ./src/dragDropFunctionality.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
// const draggables = document.querySelectorAll('.draggable');
// const containers = document.querySelectorAll('.gridOne');



function dragDropShips(player1) {
  let targetedShip = '';
  let coord = '';

  // dragging event listeners
  _DOM__WEBPACK_IMPORTED_MODULE_0__.draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', (event) => {
      targetedShip = event.target.id;
      draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');
    });
  });

  // container that checks for the dragging elements
  _DOM__WEBPACK_IMPORTED_MODULE_0__.containers.forEach((container) => {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dragDropShips);


/***/ }),

/***/ "./src/gameBoardFactory.js":
/*!*********************************!*\
  !*** ./src/gameBoardFactory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js");
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */



const gameBoard = (setName) => {
  const name = setName;

  const carrier = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"])(5);
  const battleShip = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"])(4);
  const cruiser = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"])(3);
  const destroyer1 = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"])(2);
  const destroyer2 = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"])(2);
  const submarine1 = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"])(2);
  const submarine2 = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"])(2);

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
          _DOM__WEBPACK_IMPORTED_MODULE_0__.renderRedDot(coords, 'gridThree');
        } else if (name === 'player') {
          _DOM__WEBPACK_IMPORTED_MODULE_0__.renderRedDot(coords, 'gridTwo');
        }
      } else if (status !== 'active') {
        if (name === 'computer') {
          _DOM__WEBPACK_IMPORTED_MODULE_0__.renderWhiteDot(coords, 'gridThree');
        } else if (name === 'player') {
          _DOM__WEBPACK_IMPORTED_MODULE_0__.renderWhiteDot(coords, 'gridTwo');
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
    _DOM__WEBPACK_IMPORTED_MODULE_0__.renderGameOver(player.name);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameBoard);


/***/ }),

/***/ "./src/renderPlacedShips.js":
/*!**********************************!*\
  !*** ./src/renderPlacedShips.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderShips);


/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");


/* eslint-disable prefer-const */
const shipFactory = (length) => {
  const shipInfo = {
    shipLength: length,
    damageStrikes: '',
    damageStatus: 'afloat',
  };

  const hit = (player, shipName) => {
    const addDamage = shipInfo.damageStrikes.concat('X');

    shipInfo.damageStrikes = addDamage;

    if (shipInfo.shipLength === shipInfo.damageStrikes.length) {
      shipInfo.damageStatus = 'sunken';

      if (player === 'computer') {
        const text = `YOU SUNK A ${shipName.replace(/\d+/g, '')}`;
        (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.renderShipSunk)(text, shipName, player);
      } else {
        const text = `YOUR ${shipName.replace(/\d+/g, '')} WAS SUNK`;
        (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.renderShipSunk)(text, shipName, player);
      }
    }
  };

  return { shipInfo, hit };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipFactory);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buttonFunctionalities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttonFunctionalities */ "./src/buttonFunctionalities.js");
/* harmony import */ var _gameBoardFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoardFactory */ "./src/gameBoardFactory.js");
/* harmony import */ var _dragDropFunctionality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dragDropFunctionality */ "./src/dragDropFunctionality.js");
/* harmony import */ var _computerDecisions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./computerDecisions */ "./src/computerDecisions.js");





// ----------- Game Loop -------------- //
const player1 = (0,_gameBoardFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('player');
const computer = (0,_gameBoardFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('computer');

(0,_computerDecisions__WEBPACK_IMPORTED_MODULE_3__["default"])(computer);

(0,_buttonFunctionalities__WEBPACK_IMPORTED_MODULE_0__.resetShips)();
(0,_buttonFunctionalities__WEBPACK_IMPORTED_MODULE_0__.play)(player1);

(0,_dragDropFunctionality__WEBPACK_IMPORTED_MODULE_2__["default"])(player1);

(0,_buttonFunctionalities__WEBPACK_IMPORTED_MODULE_0__.onClickAttack)(computer, player1);

(0,_buttonFunctionalities__WEBPACK_IMPORTED_MODULE_0__.playAgainBtn)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNQO0FBQ0E7QUFDTzs7QUFFQTtBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1AsNkNBQTZDLEtBQUssR0FBRyxPQUFPO0FBQzVEO0FBQ0E7O0FBRU87QUFDUCw2Q0FBNkMsS0FBSyxHQUFHLE9BQU87QUFDNUQ7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QiwrQkFBK0I7QUFDdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRkE7QUFDQTtBQUM2QjtBQUNpQjs7QUFFOUM7QUFDQSxFQUFFLDJEQUE2QjtBQUMvQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsRUFBRSw0REFBOEI7QUFDaEM7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLEVBQUUsMERBQTRCO0FBQzlCOztBQUVBO0FBQ0EsTUFBTSxpREFBbUI7QUFDekIsTUFBTSxnREFBa0I7QUFDeEIsTUFBTSw4REFBVztBQUNqQixNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsMERBQTRCO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQW1ELFlBQVk7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFeUQ7Ozs7Ozs7Ozs7Ozs7OztBQ2xOekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEVBQUUsT0FBTyxF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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDRGlDO0FBQ1U7QUFDUztBQUNLOztBQUV6RDtBQUNBLGdCQUFnQiw2REFBUztBQUN6QixpQkFBaUIsNkRBQVM7O0FBRTFCLDhEQUFzQjs7QUFFdEIsa0VBQVU7QUFDViw0REFBSTs7QUFFSixrRUFBYTs7QUFFYixxRUFBYTs7QUFFYixvRUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9idXR0b25GdW5jdGlvbmFsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvY29tcHV0ZXJEZWNpc2lvbnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZHJhZ0Ryb3BGdW5jdGlvbmFsaXR5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2dhbWVCb2FyZEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvcmVuZGVyUGxhY2VkU2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZHJhZ2dhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcmFnZ2FibGUnKTtcbmV4cG9ydCBjb25zdCBjb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWRPbmUnKTtcbmV4cG9ydCBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5SZXNldCcpO1xuZXhwb3J0IGNvbnN0IHBsYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuUGxheScpO1xuZXhwb3J0IGNvbnN0IHBsYXlCdG5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuUGxheScpO1xuZXhwb3J0IGNvbnN0IGdhbWVTZXR1cENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lU2V0dXBDb250YWluZXInKTtcbmV4cG9ydCBjb25zdCBnYW1lQm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZUJvYXJkQ29udGFpbmVyJyk7XG5leHBvcnQgY29uc3QgbWFpbkdyaWRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkVGhyZWUnKTtcbmV4cG9ydCBjb25zdCBtYWluR3JpZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZFRocmVlJyk7XG5leHBvcnQgY29uc3QgcGxheUFnYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXlBZ2FpbicpO1xuZXhwb3J0IGNvbnN0IHBsYXllclJhZGFyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgJy5wbGF5ZXJSYWRhckNvbnRhaW5lcidcbik7XG5leHBvcnQgY29uc3QgbWFpbkJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5Cb2FyZENvbnRhaW5lcicpO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlU2V0dXBQYWdlKCkge1xuICBnYW1lU2V0dXBDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdOb25lJztcbiAgcGxheUJ0bkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ05vbmUnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTWFpblBhZ2UoKSB7XG4gIGdhbWVCb2FyZENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2luaXRpYWwnO1xuICBwbGF5ZXJSYWRhckNvbnRhaW5lci5zdHlsZS5hbmltYXRpb24gPSAnZmFkZSAxcyBlYXNlLWluLW91dCAxIGZvcndhcmRzJztcbiAgbWFpbkJvYXJkQ29udGFpbmVyLnN0eWxlLmFuaW1hdGlvbiA9ICdmYWRlIDFzIGVhc2UtaW4tb3V0IDEgZm9yd2FyZHMnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyV2hpdGVEb3QoY29vcmRzLCBncmlkKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtncmlkfSMke2Nvb3Jkc31gKTtcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmx1ZSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJSZWREb3QoY29vcmRzLCBncmlkKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtncmlkfSMke2Nvb3Jkc31gKTtcbiAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNoaXBTdW5rKHRleHQsIHNoaXBOYW1lLCBwbGF5ZXIpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwU3VuaycpO1xuICBjb25zdCBiYWNrR3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tncm91bmRCbHVyJyk7XG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bmtTaGlwSW1nJyk7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW5rU2hpcFRleHQnKTtcblxuICBpZiAocGxheWVyICE9PSAnY29tcHV0ZXInKSB7XG4gICAgZWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9ICdyZ2IoMjU1LCAzNSwgMzUpJztcbiAgICBlbGVtZW50LnN0eWxlLmNvbG9yID0gJ3JnYigyNTUsIDM1LCAzNSknO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSAncmdiKDAsIDI1NSwgMCknO1xuICAgIGVsZW1lbnQuc3R5bGUuY29sb3IgPSAncmdiKDAsIDI1NSwgMCknO1xuICB9XG5cbiAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICBiYWNrR3JvdW5kLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIGltYWdlLnNyYyA9IGBpbWFnZXMvJHtzaGlwTmFtZS5yZXBsYWNlKC9bMC05XS9nLCAnJyl9LnBuZ2A7XG4gIGltYWdlLnN0eWxlLndpZHRoID0gJzEzMHB4JztcbiAgaW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICBkaXYuaW5uZXJIVE1MID0gdGV4dC50b1VwcGVyQ2FzZSgpO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBiYWNrR3JvdW5kLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0sIDE1MDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyR2FtZU92ZXIocGxheWVyKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZU92ZXInKTtcbiAgY29uc3QgYmFja0dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZ3JvdW5kQmx1cicpO1xuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFubm91bmNlV2lubmVyJyk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGJhY2tHcm91bmQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcblxuICAgIGlmIChwbGF5ZXIgPT09ICdwbGF5ZXInKSB7XG4gICAgICB0ZXh0LmlubmVySFRNTCA9ICdUaGUgQ29tcHV0ZXIgV2lucyB0aGUgQmF0dGxlISc7XG4gICAgICBlbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gJ3JnYigyNTUsIDM1LCAzNSknO1xuICAgICAgZWxlbWVudC5zdHlsZS5jb2xvciA9ICdyZ2IoMjU1LCAzNSwgMzUpJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGV4dC5pbm5lckhUTUwgPSAnWU9VIHdpbiB0aGUgQmF0dGxlISc7XG4gICAgfVxuICB9LCAxNTAwKTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWFsZXJ0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vRE9NJztcbmltcG9ydCByZW5kZXJTaGlwcyBmcm9tICcuL3JlbmRlclBsYWNlZFNoaXBzJztcblxuZnVuY3Rpb24gcmVzZXRTaGlwcygpIHtcbiAgRE9NLnJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBsYXlBZ2FpbkJ0bigpIHtcbiAgRE9NLnBsYXlBZ2Fpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwbGF5KHBsYXllcikge1xuICBET00ucGxheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBzZXR1cFNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldHVwU2hpcHMnKTtcblxuICAgIGlmIChzZXR1cFNoaXBzLmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJykubGVuZ3RoID09PSAxKSB7XG4gICAgICBET00ucmVtb3ZlU2V0dXBQYWdlKCk7XG4gICAgICBET00ucmVuZGVyTWFpblBhZ2UoKTtcbiAgICAgIHJlbmRlclNoaXBzKHBsYXllcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KCdwbGVhc2UgcGxhY2UgYWxsIHNoaXBzJyk7XG4gICAgfVxuICB9KTtcbn1cblxubGV0IHN0YXR1cyA9ICdpbmFjdGl2ZSc7XG5sZXQgY2hlY2tMZWZ0ID0gJ2luYWN0aXZlJztcbmxldCBDb29yZCA9ICcnO1xubGV0IGluaXRpYWxJbmRleCA9ICcnO1xuXG5jb25zdCBvbkNsaWNrQXR0YWNrID0gKGNvbXB1dGVyLCBwbGF5ZXIpID0+IHtcbiAgRE9NLm1haW5HcmlkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgcGxheWVyU2VsZWN0ZWRDb29yZHMgPSBlLnRhcmdldC5pZDtcbiAgICAgIGNvbnN0IGNoZWNrUGxheWVyU2VsZWN0aW9uID0gZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuXG4gICAgICAvLyBpZiBhIGdyaWQgaGFzIHByZXZpb3VzbHkgYmVlbiBzZWxlY3RlZCBkbyBub3RoaW5nXG4gICAgICBpZiAoY2hlY2tQbGF5ZXJTZWxlY3Rpb24gPT09ICdyZWQnIHx8IGNoZWNrUGxheWVyU2VsZWN0aW9uID09PSAnYmx1ZScpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcGxheWVyIHNlbGVjdHMgYSBncmlkIGFuZCBhdHRhY2tzIHRoZSBjb21wdXRlclxuICAgICAgICBjb21wdXRlci5yZWNlaXZlQXR0YWNrKHBsYXllclNlbGVjdGVkQ29vcmRzLCBjb21wdXRlcik7XG5cbiAgICAgICAgLy8gaWYgYSBzaGlwIHdhc24ndCBwcmV2aW91c2x5IGhpdCBnZXQgYSByYW5kb20gY29vcmQgZnJvbSB0aGUgYm9hcmQgZ3JpZFxuICAgICAgICBpZiAoc3RhdHVzID09PSAnaW5hY3RpdmUnKSB7XG4gICAgICAgICAgQ29vcmQgPSBib2FyZFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZC5sZW5ndGgpXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQ29vcmQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIENvb3JkID0gYm9hcmRbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmQubGVuZ3RoKV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb21wdXRlciBhdHRhY2tzIHRoZSBwbGF5ZXIgYW5kIGNoZWNrcyBpZiBpdCBoaXQgYSBzaGlwIG9yIG5vdFxuICAgICAgICBjaGVja0JvYXJkKENvb3JkLCBwbGF5ZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIGNoZWNrQm9hcmQocmFuZG9tQ29vcmQsIHBsYXllcikge1xuICBjb25zdCBpbmRleCA9IGJvYXJkLmluZGV4T2YocmFuZG9tQ29vcmQpO1xuXG4gIC8vIHJlbW92ZSB0aGUgdGFyZ2V0ZWQgZ3JpZCBmcm9tIHRoZSBib2FyZCBhcnJheVxuICBib2FyZC5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gIC8vIGNvbXB1dGVyIGF0dGFja3MgdGhlIHBsYXllciBiYXNlZCBvbiB0aGUgc2VsZWN0ZWQgZ3JpZFxuICBwbGF5ZXIucmVjZWl2ZUF0dGFjayhyYW5kb21Db29yZCwgcGxheWVyKTtcblxuICAvLyB0aGlzIGNoZWNrcyB0byBzZWUgaWYgdGhlIGF0dGFjayBoaXQgYSBzaGlwIG9yIG5vdFxuICBjb25zdCBjaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ncmlkVHdvIyR7cmFuZG9tQ29vcmR9YCkuc3R5bGVcbiAgICAuYmFja2dyb3VuZENvbG9yO1xuXG4gIC8vIGlmIGEgc2hpcCB3YXMgaGl0IHNldCB0aGUgc3RhdHVzIHRvIGFjdGl2ZSBhbmQgcmVjb3JkIHRoZSBDb29yZHNcbiAgLy8gaWYgYSBzaGlwIHdhcyBwcmV2aW91c2x5IGhpdCBlaXRoZXIgY2hlY2sgcmlnaHQgb3IgbGVmdFxuICBpZiAoY2hlY2sgPT09ICdyZWQnKSB7XG4gICAgaWYgKHN0YXR1cyA9PT0gJ2luYWN0aXZlJykge1xuICAgICAgc3RhdHVzID0gJ2FjdGl2ZSc7XG4gICAgICBDb29yZCA9IGJvYXJkW2luZGV4XTtcbiAgICAgIGluaXRpYWxJbmRleCA9IGluZGV4O1xuICAgIH0gZWxzZSBpZiAoY2hlY2tMZWZ0ID09PSAnYWN0aXZlJykge1xuICAgICAgaW5pdGlhbEluZGV4IC09IDE7XG4gICAgICBDb29yZCA9IGJvYXJkW2luaXRpYWxJbmRleF07XG4gICAgfSBlbHNlIGlmIChjaGVja0xlZnQgPT09ICdpbmFjdGl2ZScpIHtcbiAgICAgIENvb3JkID0gYm9hcmRbaW5kZXhdO1xuICAgIH1cbiAgfVxuICAvLyBpZiBhIHNoaXAgd2FzIHByZXZpb3VzbHkgaGl0IGJ1dCB0aGlzIGF0dGFjayBtaXNzZXNcbiAgLy8gZ28gYmFjayBhbmQgY2hlY2sgdGhlIGdpcmQgbGVmdCB0byB0aGUgaW5pdGlhbCBhdHRhY2tcbiAgaWYgKGNoZWNrID09PSAnYmx1ZScgJiYgc3RhdHVzID09PSAnYWN0aXZlJykge1xuICAgIGlmIChjaGVja0xlZnQgPT09ICdhY3RpdmUnKSB7XG4gICAgICBjaGVja0xlZnQgPSAnaW5hY3RpdmUnO1xuICAgICAgc3RhdHVzID0gJ2luYWN0aXZlJztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5pdGlhbEluZGV4IC09IDE7XG4gICAgICBDb29yZCA9IGJvYXJkW2luaXRpYWxJbmRleF07XG4gICAgICBjaGVja0xlZnQgPSAnYWN0aXZlJztcbiAgICB9XG4gIH1cbn1cblxubGV0IGJvYXJkID0gW1xuICAnQTEnLFxuICAnQTInLFxuICAnQTMnLFxuICAnQTQnLFxuICAnQTUnLFxuICAnQTYnLFxuICAnQTcnLFxuICAnQTgnLFxuICAnQTknLFxuICAnQTEwJyxcbiAgJ0IxJyxcbiAgJ0IyJyxcbiAgJ0IzJyxcbiAgJ0I0JyxcbiAgJ0I1JyxcbiAgJ0I2JyxcbiAgJ0I3JyxcbiAgJ0I4JyxcbiAgJ0I5JyxcbiAgJ0IxMCcsXG4gICdDMScsXG4gICdDMicsXG4gICdDMycsXG4gICdDNCcsXG4gICdDNScsXG4gICdDNicsXG4gICdDNycsXG4gICdDOCcsXG4gICdDOScsXG4gICdDMTAnLFxuICAnRDEnLFxuICAnRDInLFxuICAnRDMnLFxuICAnRDQnLFxuICAnRDUnLFxuICAnRDYnLFxuICAnRDcnLFxuICAnRDgnLFxuICAnRDknLFxuICAnRDEwJyxcbiAgJ0UxJyxcbiAgJ0UyJyxcbiAgJ0UzJyxcbiAgJ0U0JyxcbiAgJ0U1JyxcbiAgJ0U2JyxcbiAgJ0U3JyxcbiAgJ0U4JyxcbiAgJ0U5JyxcbiAgJ0UxMCcsXG4gICdGMScsXG4gICdGMicsXG4gICdGMycsXG4gICdGNCcsXG4gICdGNScsXG4gICdGNicsXG4gICdGNycsXG4gICdGOCcsXG4gICdGOScsXG4gICdGMTAnLFxuICAnRzEnLFxuICAnRzInLFxuICAnRzMnLFxuICAnRzQnLFxuICAnRzUnLFxuICAnRzYnLFxuICAnRzcnLFxuICAnRzgnLFxuICAnRzknLFxuICAnRzEwJyxcbiAgJ0gxJyxcbiAgJ0gyJyxcbiAgJ0gzJyxcbiAgJ0g0JyxcbiAgJ0g1JyxcbiAgJ0g2JyxcbiAgJ0g3JyxcbiAgJ0g4JyxcbiAgJ0g5JyxcbiAgJ0gxMCcsXG4gICdJMScsXG4gICdJMicsXG4gICdJMycsXG4gICdJNCcsXG4gICdJNScsXG4gICdJNicsXG4gICdJNycsXG4gICdJOCcsXG4gICdJOScsXG4gICdJMTAnLFxuICAnSjEnLFxuICAnSjInLFxuICAnSjMnLFxuICAnSjQnLFxuICAnSjUnLFxuICAnSjYnLFxuICAnSjcnLFxuICAnSjgnLFxuICAnSjknLFxuICAnSjEwJyxcbl07XG5cbmV4cG9ydCB7IHJlc2V0U2hpcHMsIHBsYXksIG9uQ2xpY2tBdHRhY2ssIHBsYXlBZ2FpbkJ0biB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5mdW5jdGlvbiBjb21wdXRlclNoaXBQbGFjZW1lbnRzKGNvbXB1dGVyKSB7XG4gIGxldCB5Q29vcmRzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICBjb25zdCBnZXRTaGlwcyA9IGNvbXB1dGVyLnNoaXBDb29yZHM7XG4gICAgY29uc3Qgc2hpcE5hbWUgPSBPYmplY3Qua2V5cyhnZXRTaGlwcylbaV07XG4gICAgY29uc3QgbGV0dGVyID0geUNvb3Jkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB5Q29vcmRzLmxlbmd0aCldO1xuICAgIGxldCBudW1iZXIgPSAnJztcblxuICAgIGlmIChzaGlwTmFtZSA9PT0gJ2NhcnJpZXInKSB7XG4gICAgICBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNSAtIDEgKyAxKSkgKyAxO1xuICAgICAgY29tcHV0ZXIuc2hpcENvb3Jkc1tzaGlwTmFtZV0gPSBgJHtcbiAgICAgICAgbGV0dGVyICsgbnVtYmVyXG4gICAgICB9ICR7bGV0dGVyfSR7KytudW1iZXJ9ICR7bGV0dGVyfSR7KytudW1iZXJ9ICR7bGV0dGVyfSR7KytudW1iZXJ9ICR7bGV0dGVyfSR7KytudW1iZXJ9YDtcbiAgICB9IGVsc2UgaWYgKHNoaXBOYW1lID09PSAnYmF0dGxlU2hpcCcpIHtcbiAgICAgIG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg0IC0gMSArIDEpKSArIDE7XG4gICAgICBjb21wdXRlci5zaGlwQ29vcmRzW3NoaXBOYW1lXSA9IGAke1xuICAgICAgICBsZXR0ZXIgKyBudW1iZXJcbiAgICAgIH0gJHtsZXR0ZXJ9JHsrK251bWJlcn0gJHtsZXR0ZXJ9JHsrK251bWJlcn0gJHtsZXR0ZXJ9JHsrK251bWJlcn1gO1xuICAgIH0gZWxzZSBpZiAoc2hpcE5hbWUgPT09ICdjcnVpc2VyJykge1xuICAgICAgbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDMgLSAxICsgMSkpICsgMTtcbiAgICAgIGNvbXB1dGVyLnNoaXBDb29yZHNbc2hpcE5hbWVdID0gYCR7XG4gICAgICAgIGxldHRlciArIG51bWJlclxuICAgICAgfSAke2xldHRlcn0keysrbnVtYmVyfSAke2xldHRlcn0keysrbnVtYmVyfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyIC0gMSArIDEpKSArIDE7XG4gICAgICBjb21wdXRlci5zaGlwQ29vcmRzW3NoaXBOYW1lXSA9IGAke1xuICAgICAgICBsZXR0ZXIgKyBudW1iZXJcbiAgICAgIH0gJHtsZXR0ZXJ9JHsrK251bWJlcn0gYDtcbiAgICB9XG4gICAgeUNvb3JkcyA9IHlDb29yZHMuZmlsdGVyKChlKSA9PiBlICE9PSBsZXR0ZXIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXB1dGVyU2hpcFBsYWNlbWVudHM7XG4iLCIvLyBjb25zdCBkcmFnZ2FibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyYWdnYWJsZScpO1xuLy8gY29uc3QgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkT25lJyk7XG5cbmltcG9ydCAqIGFzIERPTSBmcm9tICcuL0RPTSc7XG5cbmZ1bmN0aW9uIGRyYWdEcm9wU2hpcHMocGxheWVyMSkge1xuICBsZXQgdGFyZ2V0ZWRTaGlwID0gJyc7XG4gIGxldCBjb29yZCA9ICcnO1xuXG4gIC8vIGRyYWdnaW5nIGV2ZW50IGxpc3RlbmVyc1xuICBET00uZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICBkcmFnZ2FibGUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGV2ZW50KSA9PiB7XG4gICAgICB0YXJnZXRlZFNoaXAgPSBldmVudC50YXJnZXQuaWQ7XG4gICAgICBkcmFnZ2FibGUuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKTtcbiAgICB9KTtcblxuICAgIGRyYWdnYWJsZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIGNvbnRhaW5lciB0aGF0IGNoZWNrcyBmb3IgdGhlIGRyYWdnaW5nIGVsZW1lbnRzXG4gIERPTS5jb250YWluZXJzLmZvckVhY2goKGNvbnRhaW5lcikgPT4ge1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsICgpID0+IHtcbiAgICAgIGNvb3JkID0gY29udGFpbmVyLmlkO1xuXG4gICAgICBjb25zdCBkcmFnZ2FibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZ2dpbmcnKTtcbiAgICAgIGNvbnN0IG51bWJlciA9IGNvb3JkLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG4gICAgICBjb25zdCBsZW5ndGggPSBwbGF5ZXIxW3RhcmdldGVkU2hpcF0uc2hpcEluZm8uc2hpcExlbmd0aDtcblxuICAgICAgLy8gY2hlY2tzIHRvIG1ha2Ugc3VyZSB0aGUgc2hpcCBpcyBwbGFjZWQgd2l0aGluIHRoZSBjb250YWluZXJcbiAgICAgIC8vIGFuZCB0aGF0IGEgY3VycmVudCBzaGlwIGRvZXNudCBvY2N1cHkgdGhlIGdyaWRcbiAgICAgIC8vIHRoZW4gYXBwZW5kcyB0aGUgZHJhZ2dlZCBlbGVtZW50IHRvIHRoZSBzZWxlY3RlZCBncmlkXG4gICAgICBpZiAobGVuZ3RoIDw9IDExIC0gbnVtYmVyICYmIGNvbnRhaW5lci5jbGFzc05hbWUgIT09ICdncmlkT25lIHVzZWQnKSB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkcmFnZ2FibGUpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndXNlZCcpO1xuICAgICAgICBwbGF5ZXIxLnNldFNoaXBQb3NpdGlvbih0YXJnZXRlZFNoaXAsIGNvb3JkLCBwbGF5ZXIxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRyYWdEcm9wU2hpcHM7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmltcG9ydCAqIGFzIERPTSBmcm9tICcuL0RPTSc7XG5pbXBvcnQgc2hpcEZhY3RvcnkgZnJvbSAnLi9zaGlwRmFjdG9yeSc7XG5cbmNvbnN0IGdhbWVCb2FyZCA9IChzZXROYW1lKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBzZXROYW1lO1xuXG4gIGNvbnN0IGNhcnJpZXIgPSBzaGlwRmFjdG9yeSg1KTtcbiAgY29uc3QgYmF0dGxlU2hpcCA9IHNoaXBGYWN0b3J5KDQpO1xuICBjb25zdCBjcnVpc2VyID0gc2hpcEZhY3RvcnkoMyk7XG4gIGNvbnN0IGRlc3Ryb3llcjEgPSBzaGlwRmFjdG9yeSgyKTtcbiAgY29uc3QgZGVzdHJveWVyMiA9IHNoaXBGYWN0b3J5KDIpO1xuICBjb25zdCBzdWJtYXJpbmUxID0gc2hpcEZhY3RvcnkoMik7XG4gIGNvbnN0IHN1Ym1hcmluZTIgPSBzaGlwRmFjdG9yeSgyKTtcblxuICBjb25zdCBzaGlwQ29vcmRzID0ge1xuICAgIGNhcnJpZXI6ICdub25lJyxcbiAgICBiYXR0bGVTaGlwOiAnbm9uZScsXG4gICAgY3J1aXNlcjogJ25vbmUnLFxuICAgIGRlc3Ryb3llcjE6ICdub25lJyxcbiAgICBkZXN0cm95ZXIyOiAnbm9uZScsXG4gICAgc3VibWFyaW5lMTogJ25vbmUnLFxuICAgIHN1Ym1hcmluZTI6ICdub25lJyxcbiAgfTtcblxuICBjb25zdCBzZXRTaGlwUG9zaXRpb24gPSAoc2hpcCwgY29vcmRzLCBwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBsZXR0ZXIgPSBjb29yZHMucmVwbGFjZSgvWzAtOV0vZywgJycpO1xuICAgIGNvbnN0IG51bWJlciA9IGNvb3Jkcy5yZXBsYWNlKC9cXEQvZywgJycpO1xuICAgIGNvbnN0IGxlbmd0aCA9IHBsYXllcltzaGlwXS5zaGlwSW5mby5zaGlwTGVuZ3RoO1xuICAgIGxldCBmaW5hbENvb3JkcyA9ICcnO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgZmluYWxDb29yZHMgPSBmaW5hbENvb3Jkcy5jb25jYXQoYCR7bGV0dGVyICsgKE51bWJlcihudW1iZXIpICsgaSl9IGApO1xuICAgIH1cblxuICAgIHNoaXBDb29yZHNbc2hpcF0gPSBmaW5hbENvb3JkcztcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkcywgcGxheWVyKSA9PiB7XG4gICAgbGV0IHN0YXR1cztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IE9iamVjdC52YWx1ZXMoc2hpcENvb3JkcylbaV07XG4gICAgICBjb25zdCBzaGlwTmFtZSA9IE9iamVjdC5rZXlzKHNoaXBDb29yZHMpW2ldO1xuXG4gICAgICBpZiAoZWxlbWVudC5pbmNsdWRlcyhjb29yZHMpKSB7XG4gICAgICAgIHBsYXllcltzaGlwTmFtZV0uaGl0KG5hbWUsIHNoaXBOYW1lKTtcbiAgICAgICAgY2hlY2tTdW5rZW5TaGlwcyhwbGF5ZXIpO1xuICAgICAgICBzdGF0dXMgPSAnYWN0aXZlJztcblxuICAgICAgICBpZiAobmFtZSA9PT0gJ2NvbXB1dGVyJykge1xuICAgICAgICAgIERPTS5yZW5kZXJSZWREb3QoY29vcmRzLCAnZ3JpZFRocmVlJyk7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ3BsYXllcicpIHtcbiAgICAgICAgICBET00ucmVuZGVyUmVkRG90KGNvb3JkcywgJ2dyaWRUd28nKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgIT09ICdhY3RpdmUnKSB7XG4gICAgICAgIGlmIChuYW1lID09PSAnY29tcHV0ZXInKSB7XG4gICAgICAgICAgRE9NLnJlbmRlcldoaXRlRG90KGNvb3JkcywgJ2dyaWRUaHJlZScpO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdwbGF5ZXInKSB7XG4gICAgICAgICAgRE9NLnJlbmRlcldoaXRlRG90KGNvb3JkcywgJ2dyaWRUd28nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNldFNoaXBQb3NpdGlvbixcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIHNoaXBDb29yZHMsXG4gICAgY2FycmllcixcbiAgICBiYXR0bGVTaGlwLFxuICAgIGNydWlzZXIsXG4gICAgZGVzdHJveWVyMSxcbiAgICBkZXN0cm95ZXIyLFxuICAgIHN1Ym1hcmluZTEsXG4gICAgc3VibWFyaW5lMixcbiAgICBuYW1lLFxuICB9O1xufTtcblxuZnVuY3Rpb24gY2hlY2tTdW5rZW5TaGlwcyhwbGF5ZXIpIHtcbiAgaWYgKFxuICAgIHBsYXllci5jYXJyaWVyLnNoaXBJbmZvLmRhbWFnZVN0YXR1cyA9PT0gJ3N1bmtlbicgJiZcbiAgICBwbGF5ZXIuYmF0dGxlU2hpcC5zaGlwSW5mby5kYW1hZ2VTdGF0dXMgPT09ICdzdW5rZW4nICYmXG4gICAgcGxheWVyLmNydWlzZXIuc2hpcEluZm8uZGFtYWdlU3RhdHVzID09PSAnc3Vua2VuJyAmJlxuICAgIHBsYXllci5kZXN0cm95ZXIxLnNoaXBJbmZvLmRhbWFnZVN0YXR1cyA9PT0gJ3N1bmtlbicgJiZcbiAgICBwbGF5ZXIuZGVzdHJveWVyMi5zaGlwSW5mby5kYW1hZ2VTdGF0dXMgPT09ICdzdW5rZW4nICYmXG4gICAgcGxheWVyLnN1Ym1hcmluZTEuc2hpcEluZm8uZGFtYWdlU3RhdHVzID09PSAnc3Vua2VuJyAmJlxuICAgIHBsYXllci5zdWJtYXJpbmUyLnNoaXBJbmZvLmRhbWFnZVN0YXR1cyA9PT0gJ3N1bmtlbidcbiAgKSB7XG4gICAgRE9NLnJlbmRlckdhbWVPdmVyKHBsYXllci5uYW1lKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnYW1lQm9hcmQ7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuXG5mdW5jdGlvbiByZW5kZXJTaGlwcyhwbGF5ZXIpIHtcbiAgY29uc3QgY29vcmRzID0gcGxheWVyLnNoaXBDb29yZHM7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICBsZXQgc2hpcE5hbWUgPSBPYmplY3Qua2V5cyhjb29yZHMpW2ldO1xuICAgIGNvbnN0IGNvb3JkID0gT2JqZWN0LnZhbHVlcyhjb29yZHMpW2ldLnN1YnN0cmluZygwLCAyKTtcbiAgICBjb25zdCBzaGlwSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgZ2V0R3JpZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ3JpZFR3byMke2Nvb3JkfWApO1xuXG4gICAgaWYgKHNoaXBOYW1lLnN1YnN0cigtMSkgPT09ICcxJyB8fCBzaGlwTmFtZS5zdWJzdHIoLTEpID09PSAnMicpIHtcbiAgICAgIHNoaXBOYW1lID0gc2hpcE5hbWUuc2xpY2UoMCwgOSk7XG4gICAgfVxuXG4gICAgaWYgKHNoaXBOYW1lID09PSAnc3VibWFyaW5lJyB8fCBzaGlwTmFtZSA9PT0gJ2Rlc3Ryb3llcicpIHtcbiAgICAgIHNoaXBJbWcuc3R5bGUud2lkdGggPSAnNDVweCc7XG4gICAgfVxuICAgIGlmIChzaGlwTmFtZSA9PT0gJ2NhcnJpZXInKSB7XG4gICAgICBzaGlwSW1nLnN0eWxlLndpZHRoID0gJzEwNXB4JztcbiAgICB9XG4gICAgaWYgKHNoaXBOYW1lID09PSAnY3J1aXNlcicpIHtcbiAgICAgIHNoaXBJbWcuc3R5bGUud2lkdGggPSAnNjVweCc7XG4gICAgfVxuICAgIGlmIChzaGlwTmFtZSA9PT0gJ2JhdHRsZVNoaXAnKSB7XG4gICAgICBzaGlwSW1nLnN0eWxlLndpZHRoID0gJzg1cHgnO1xuICAgIH1cblxuICAgIHNoaXBJbWcuc3JjID0gYGltYWdlcy8ke3NoaXBOYW1lfS5wbmdgO1xuICAgIHNoaXBJbWcuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGdldEdyaWRFbGVtZW50LmFwcGVuZENoaWxkKHNoaXBJbWcpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclNoaXBzO1xuIiwiaW1wb3J0IHsgcmVuZGVyU2hpcFN1bmsgfSBmcm9tICcuL0RPTSc7XG5cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1jb25zdCAqL1xuY29uc3Qgc2hpcEZhY3RvcnkgPSAobGVuZ3RoKSA9PiB7XG4gIGNvbnN0IHNoaXBJbmZvID0ge1xuICAgIHNoaXBMZW5ndGg6IGxlbmd0aCxcbiAgICBkYW1hZ2VTdHJpa2VzOiAnJyxcbiAgICBkYW1hZ2VTdGF0dXM6ICdhZmxvYXQnLFxuICB9O1xuXG4gIGNvbnN0IGhpdCA9IChwbGF5ZXIsIHNoaXBOYW1lKSA9PiB7XG4gICAgY29uc3QgYWRkRGFtYWdlID0gc2hpcEluZm8uZGFtYWdlU3RyaWtlcy5jb25jYXQoJ1gnKTtcblxuICAgIHNoaXBJbmZvLmRhbWFnZVN0cmlrZXMgPSBhZGREYW1hZ2U7XG5cbiAgICBpZiAoc2hpcEluZm8uc2hpcExlbmd0aCA9PT0gc2hpcEluZm8uZGFtYWdlU3RyaWtlcy5sZW5ndGgpIHtcbiAgICAgIHNoaXBJbmZvLmRhbWFnZVN0YXR1cyA9ICdzdW5rZW4nO1xuXG4gICAgICBpZiAocGxheWVyID09PSAnY29tcHV0ZXInKSB7XG4gICAgICAgIGNvbnN0IHRleHQgPSBgWU9VIFNVTksgQSAke3NoaXBOYW1lLnJlcGxhY2UoL1xcZCsvZywgJycpfWA7XG4gICAgICAgIHJlbmRlclNoaXBTdW5rKHRleHQsIHNoaXBOYW1lLCBwbGF5ZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IGBZT1VSICR7c2hpcE5hbWUucmVwbGFjZSgvXFxkKy9nLCAnJyl9IFdBUyBTVU5LYDtcbiAgICAgICAgcmVuZGVyU2hpcFN1bmsodGV4dCwgc2hpcE5hbWUsIHBsYXllcik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IHNoaXBJbmZvLCBoaXQgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNoaXBGYWN0b3J5O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xuICBvbkNsaWNrQXR0YWNrLFxuICBwbGF5LFxuICBwbGF5QWdhaW5CdG4sXG4gIHJlc2V0U2hpcHMsXG59IGZyb20gJy4vYnV0dG9uRnVuY3Rpb25hbGl0aWVzJztcbmltcG9ydCBnYW1lQm9hcmQgZnJvbSAnLi9nYW1lQm9hcmRGYWN0b3J5JztcbmltcG9ydCBkcmFnRHJvcFNoaXBzIGZyb20gJy4vZHJhZ0Ryb3BGdW5jdGlvbmFsaXR5JztcbmltcG9ydCBjb21wdXRlclNoaXBQbGFjZW1lbnRzIGZyb20gJy4vY29tcHV0ZXJEZWNpc2lvbnMnO1xuXG4vLyAtLS0tLS0tLS0tLSBHYW1lIExvb3AgLS0tLS0tLS0tLS0tLS0gLy9cbmNvbnN0IHBsYXllcjEgPSBnYW1lQm9hcmQoJ3BsYXllcicpO1xuY29uc3QgY29tcHV0ZXIgPSBnYW1lQm9hcmQoJ2NvbXB1dGVyJyk7XG5cbmNvbXB1dGVyU2hpcFBsYWNlbWVudHMoY29tcHV0ZXIpO1xuXG5yZXNldFNoaXBzKCk7XG5wbGF5KHBsYXllcjEpO1xuXG5kcmFnRHJvcFNoaXBzKHBsYXllcjEpO1xuXG5vbkNsaWNrQXR0YWNrKGNvbXB1dGVyLCBwbGF5ZXIxKTtcblxucGxheUFnYWluQnRuKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
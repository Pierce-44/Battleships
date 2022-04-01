import {
  onClickAttack,
  play,
  playAgainBtn,
  resetShips,
} from './buttonFunctionalities';
import gameBoard from './gameBoardFactory';
import dragDropShips from './dragDropFunctionality';
import computerShipPlacements from './computerDecisions';

// ----------- Game Loop -------------- //
const player1 = gameBoard('player');
const computer = gameBoard('computer');

computerShipPlacements(computer);

resetShips();
play(player1);

dragDropShips(player1);

onClickAttack(computer, player1);

playAgainBtn();

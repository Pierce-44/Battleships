import gameBoard from '../src/gameBoardFactory';

test('set ship position', () => {
  const player1 = gameBoard();
  player1.setShipPosition('submarine1', '100, 250');
  const getCarrierPosition = player1.shipCoords.submarine1;

  expect(getCarrierPosition).toBe('100, 250');
});

test('receive attack', () => {
  const player1 = gameBoard();
  player1.setShipPosition('carrier', 'A1');
  player1.receiveAttack('A1', player1);
});

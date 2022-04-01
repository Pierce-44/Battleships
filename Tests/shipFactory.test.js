import shipFactory from '../src/shipFactory';

test('check ship length', () => {
  const ship1 = shipFactory(3);
  const getShipLength = ship1.shipInfo.shipLength;
  expect(getShipLength).toBe(3);
});

test('check damage status after hit function', () => {
  const ship1 = shipFactory(4);
  ship1.hit();
  const getShipStrikes = ship1.shipInfo.damageStrikes;
  expect(getShipStrikes).toBe('X');
});

test('check ship sunken status after multiple hits ', () => {
  const ship1 = shipFactory(4);
  ship1.hit();
  ship1.hit();
  ship1.hit();
  ship1.hit();
  const getShipStatus = ship1.shipInfo.damageStatus;
  expect(getShipStatus).toBe('sunken');
});

import { renderShipSunk } from './DOM';

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
        renderShipSunk(text, shipName, player);
      } else {
        const text = `YOUR ${shipName.replace(/\d+/g, '')} WAS SUNK`;
        renderShipSunk(text, shipName, player);
      }
    }
  };

  return { shipInfo, hit };
};

export default shipFactory;

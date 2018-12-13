import { EXCLUSIONS_FETCHED } from '../persistence/action-types';

const parseAmount = amount => amount;

export default function makeUpdateReserve({ store, storage }) {
  return ({ amount, qualityId }) => {
    const {
      auth: { characterId },
      persistence: { exclusions, reserve },
    } = store.getState();

    storage.set({
      [characterId]: {
        exclusions,
        reserve: {
          ...reserve,
          [qualityId]: parseAmount(amount),
        },
      },
    });

    storage.get(characterId, (stuff) => {
      store.dispatch({
        type: EXCLUSIONS_FETCHED,
        payload: stuff[characterId],
      });
    });
  };
}
import { plantasTypes } from '../types';

const { SELECT_PRODUCT, FILTER_PLANTS } = plantasTypes;

export const selectPlant = (id) => ({
  type: SELECT_PRODUCT,
  plantId: id,
});

export const filterPlants = (id) => ({
  type: FILTER_PLANTS,
  categoryId: id,
});

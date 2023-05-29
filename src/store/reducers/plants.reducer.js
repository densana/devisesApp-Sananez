import { PLANTAS } from '../../constants';
import { plantasTypes } from '../types';
const { FILTER_PLANTS, SELECT_PRODUCT } = plantasTypes;

const initialState = {
  data: PLANTAS,
  selected: null,
  filteredPlants: [],
};

const plantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        selected: state.data.find((plant) => plant.id === action.plantId),
      };
    case FILTER_PLANTS:
      return {
        ...state,
        filteredPlants: state.data.filter((plant) => plant.categoryId === action.categoryId),
      };
    default:
      return state;
  }
};

export default plantsReducer;

import { combineReducers } from 'redux';
import coin, { initialState as coinInitialState } from 'Reducers/coin';

export const initialState = {
  coin: coinInitialState,
};

export default combineReducers({
  coin,
});

import {
  FETCH_COIN_LIST,
  FETCH_COIN_LIST_SUCCESS,
  FETCH_COIN_LIST_FAILURE,
  FETCH_COIN_DETAIL,
  FETCH_COIN_DETAIL_SUCCESS,
  FETCH_COIN_DETAIL_FAILURE,
  CLEAR_COIN_DETAIL,
} from 'Constants/actionTypes';
import { RSAA } from 'redux-api-middleware';
import { initialState as coinInitialState } from 'Reducers/coin';


export const fetchCoinList = () => (
  {
    [RSAA]: {
      types: [FETCH_COIN_LIST, FETCH_COIN_LIST_SUCCESS, FETCH_COIN_LIST_FAILURE],
      endpoint: 'https://api.coinmarketcap.com/v1/ticker/?convert=KRW&limit=10',
      method: 'GET',
    }
  }
);

export const fetchCoinDetail = (name) => {
  const parsedName = name.split(' ');
  return {
    [RSAA]: {
      types: [FETCH_COIN_DETAIL, FETCH_COIN_DETAIL_SUCCESS, FETCH_COIN_DETAIL_FAILURE],
      endpoint: `https://api.coinmarketcap.com/v1/ticker/${parsedName.join('-')}/?convert=KRW`,
      method: 'GET',
    }
  }
};

export const clearCoinDetail = () => {
  return {
    type: CLEAR_COIN_DETAIL,
    payload: coinInitialState.detail,
  }
}

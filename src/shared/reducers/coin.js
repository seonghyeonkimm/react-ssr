import {
  FETCH_COIN_LIST,
  FETCH_COIN_LIST_SUCCESS,
  FETCH_COIN_LIST_FAILURE,
  FETCH_COIN_DETAIL,
  FETCH_COIN_DETAIL_SUCCESS,
  FETCH_COIN_DETAIL_FAILURE,
  CLEAR_COIN_DETAIL,
} from 'Constants/actionTypes';

export const initialState = {
  list: [],
  detail: [{
    name: '',
    symbol: '',
    rank: '',
    price_usd: '',
    price_krw: '',
    last_updated: '',
  }],
};

export default (state=initialState, action) => {
  switch (action.type) {
    case FETCH_COIN_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };
    case FETCH_COIN_LIST_FAILURE:
      return {
        ...state,
      };
    case FETCH_COIN_DETAIL_SUCCESS:
      return {
        ...state,
        detail: action.payload,
      };
    case FETCH_COIN_DETAIL_FAILURE:
      return {
        ...state,
      };
    case CLEAR_COIN_DETAIL:
      return {
        ...state,
        detail: action.payload,
      }
    default:
      return state;
  }
};

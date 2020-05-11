import {ADD_POST} from '../actions/postActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return [...state, action.payload];
    default:
      return state;
  }
}
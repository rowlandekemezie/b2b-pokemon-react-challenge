import {
  DEFAULT_ACTION
} from '../actions/types';

const initialState = {};

export default (state=initialState, action) => {
  switch(action.type) {
    case DEFAULT_ACTION:
      return {  ...state }
    default: 
      return state;
  }
}
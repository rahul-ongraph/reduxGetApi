/* eslint-disable default-case */
import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "./action";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
      case FETCH_DATA_FAILURE:
          return {
              ...state,
              loading:false,
              error:action.payload,
              data:[]    
          }
          default:
              return state;
  }
}

import * as actionTypes from "../actions/types";

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADDNEW_PRODUCT:
      return [action.payload, ...state];
    case actionTypes.GETALL_PRODUCTS:
      return action.payload;
    case actionTypes.UPDATE_PRODUCT:
      return state.map((product) =>
        product._id.toString() === action.payload[0]._id.toString()
          ? { ...product, data: action.payload[0].data }
          : product
      );
    case actionTypes.DELETE_PRODUCT:
      return state.filter(
        (product) => product._id.toString() !== action.payload[0]._id.toString()
      );

    default:
      return state;
  }
};

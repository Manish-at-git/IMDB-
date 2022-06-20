import { MOVIELISTDATA } from "../constants/constants";

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case MOVIELISTDATA.LOAD_FAIL:
      return action.error;
    case MOVIELISTDATA.LOAD:
    case MOVIELISTDATA.LOAD_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default errorReducer;

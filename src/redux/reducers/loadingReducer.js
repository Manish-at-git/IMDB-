import { MOVIELISTDATA } from "../constants/constants";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case MOVIELISTDATA.LOAD:
      return true;
    case MOVIELISTDATA.LOAD_SUCCESS:
      return false;
    case MOVIELISTDATA.LOAD_FAIL:
      return false;

    default:
      return state;
  }
};

export default loadingReducer;

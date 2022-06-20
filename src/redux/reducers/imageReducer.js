import { MOVIELISTDATA } from "../constants/constants";

const imageReducer = (state = [], action) => {
  if (action.type === MOVIELISTDATA.LOAD_SUCCESS) {
    state = [];
    {
      console.log(action.data);
    }
    return [...state, { ...action.data }];
  }
  return state;
};

export default imageReducer;

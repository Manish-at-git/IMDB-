import { all, call, takeLatest } from "redux-saga/effects";
import { MOVIELISTDATA } from "../constants/constants";
import watchImagesLoad from "./imagesSaga";
import imagesSaga from "./imagesSaga";

function* watchSagas() {
  // console.log("manish");
  yield all(watchImagesLoad);
}

export default watchSagas;

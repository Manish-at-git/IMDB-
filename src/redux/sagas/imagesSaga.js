import { takeEvery, takeLatest } from "redux-saga/effects";
import { call, put } from "redux-saga/effects";
import { MOVIELISTDATA } from "../constants/constants";
import { fetchImages } from "../API";
import { setMovieList, setError } from "../actions";

function* handleImagesLoad(action) {
  try {
    console.log("action.url", action.url);
    let url = action.url;
    const data = yield call(fetchImages, url);
    yield put(setMovieList(data));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* watchImagesLoad() {
  yield takeLatest(MOVIELISTDATA.LOAD, handleImagesLoad);
}

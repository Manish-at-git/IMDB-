import {
  MOVIELISTDATA,
  NAVBARCLICKED,
  NAVBARTOGGLED,
} from "../constants/constants";

const loadMovieList = (url) => {
  console.log("url:", url);
  return {
    type: MOVIELISTDATA.LOAD,
    url,
  };
};
const setMovieList = (data) => ({
  type: MOVIELISTDATA.LOAD_SUCCESS,
  data,
});
const setError = (error) => ({
  type: MOVIELISTDATA.LOAD_FAIL,
  error,
});
const navbarToggle = (value) => ({
  type: NAVBARTOGGLED,
  value,
});

const navbarClicked = () => ({
  type: NAVBARCLICKED,
});

export { loadMovieList, setMovieList, setError, navbarToggle, navbarClicked };

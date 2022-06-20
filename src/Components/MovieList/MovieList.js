import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./MovieList.css";

import image from "./share.png";
import img from "./list.png";
import { loadMovieList } from "../../redux/actions";

// import "font-awesome/css/font-awesome.min.css";
import Categories from "./Categories/Categories";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as thinStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// let images = [];
function MovieList() {
  const location = useLocation();

  const data = useSelector((state) => state.images);
  const dispatch = useDispatch();

  console.log(location.state.url);
  // const [list, setList] = useState([]);
  console.log(data);
  // useEffect(() => {
  //   fetch(location.state.url)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setList(json);
  //       // console.log(list);
  //       console.log(json);
  //     });
  // }, [location.state.title]);
  // // let l = list.items[0].title;

  // // list.map((item) => {
  // //   console.log(item.name);
  // // });

  // // console.log(list);
  useEffect(() => {
    dispatch(loadMovieList(location.state.url));
  }, [location.state.url]);

  return (
    <div className="MovieList">
      <div className="container MovieList-container">
        <div className="MovieList-main">
          <div className="MovieList-page">
            <div className="MovieList-headerpage">
              <div className="MovieList-head">
                <h5>IMDb Charts</h5>
                <h3 className="MovieList-header">
                  IMDb {location.state.title}
                </h3>
                <small className="MovieList-byline">
                  IMDb {location.state.title} as rated by regular IMDb voters.
                </small>
              </div>
              <div className="image">
                <img src={image} />
              </div>
            </div>
            <hr />
            <div className="MovieList-LowerHeader">
              <div className="MovieList-title">
                <small className="showing">
                  Showing {location.state.title}
                </small>
              </div>
              <div className="MovieList-sort">
                <label for="sort">Sort by : </label>
                <select name="sort" id="sort" form="sortform">
                  <option value="Ranking">Ranking</option>
                  <option value="Release">Release</option>
                </select>
              </div>
            </div>
            <div className="MovieList-list">
              <div>
                <table>
                  <tr style={{ border: "none" }}>
                    <th
                      style={{
                        width: "70%",
                        fontSize: "0.8rem",
                        paddingLeft: "60px",
                      }}
                    >
                      Rank & Title
                    </th>
                    <th
                      style={{
                        fontSize: "0.8rem",
                      }}
                    >
                      <span>
                        <span className="your-Rating">IMDb</span>
                        <span className="your-Rating">Rating</span>
                      </span>
                    </th>
                    <th
                      style={{
                        fontSize: "0.8rem",
                      }}
                    >
                      <span>
                        <span className="your-Rating">Your</span>
                        <span className="your-Rating">Rating</span>
                      </span>
                    </th>
                    <th></th>
                  </tr>
                  {data.map((user) => (
                    <tr>
                      <td>
                        <img className="table-image" src={img} />
                        <small className="table-row">
                          {user.id}.{" "}
                          <NavLink to={`/title/${user.id}`}>
                            <span className="blueName">{user.name}</span>
                          </NavLink>
                        </small>
                      </td>
                      <td
                        style={{
                          fontSize: "0.8rem",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={solidStar}
                          style={{
                            color: "#f5c518",
                            padding: "0 5px",
                          }}
                          size="lg"
                        />
                        <b>{user.id}</b>
                      </td>
                      <td>
                        <FontAwesomeIcon
                          icon={thinStar}
                          style={{ color: "grey", opacity: "0.5" }}
                        />
                      </td>
                      <td>
                        <FontAwesomeIcon
                          icon={faPlus}
                          style={{ color: "grey" }}
                        />
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </div>
          <Categories />
        </div>
      </div>
    </div>
  );
}

export default MovieList;

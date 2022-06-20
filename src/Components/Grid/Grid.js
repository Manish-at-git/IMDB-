import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../Cards/Card";
import WhatToWatch from "../WhatToWatch/WhatToWatch";

import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import "./Grid.css";
import { loadMovieList } from "../../redux/actions";

function Grid(props) {
  const location = useLocation();
  // console.log(location);
  const data = useSelector((state) => state.images[0].items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovieList(location.state));
  }, []);

  console.log(location.state);

  return (
    <div className="grid-main">
      <Container>
        <Row className="Gallary_Container">
          <h1 className="grid-heading">What to Watch</h1>
          {data.map((item) => (
            <Col className="Grid-Card">
              <Cards item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Grid;

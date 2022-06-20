import React from "react";

function Cast(props) {
  console.log(props);
  return (
    <>
      <div className="Cast-item inline">
        {/* <img
          src={props.image}
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
            borderRadius: "50%",
            marginRight: "10px",
          }}
        /> */}
      </div>
      <div className="cast-img inline">
        <div className="Cast-Name">{props.name}</div>
        {/* <div className="Cast-desc">{props.asCharacter}</div> */}
      </div>
    </>
  );
}

export default Cast;

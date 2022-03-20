import React from "react";
import { connect } from "react-redux";
import { buyCakeAction } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes: {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCakeAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

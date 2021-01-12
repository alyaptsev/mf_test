import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../store/actions";

const StoreCounter = ({ clicksCount, increment, decrement }) => {
  return (
    <div>
      Store clicks: { clicksCount }
      <button onClick={ increment }>+</button>
      <button onClick={ decrement }>-</button>
    </div>
  )
}

const mapStateToProps = state => {
  const { clicksCount } = state;
  return { clicksCount };
};

export default connect(
  mapStateToProps,
  { increment, decrement }
)(StoreCounter);
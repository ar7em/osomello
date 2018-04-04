import React from "react";
import PropTypes from "prop-types";

import style from "./style.css";

const Card = (props) => (
  <div className={style.Card}>
    { props.task.name }
  </div>
);

Card.propTypes = {
  task: PropTypes.object.isRequired
};

export default Card;

import React from "react";
import PropTypes from "prop-types";

import style from "./style.css";

const Column = (props) => (
  <div className={style.Column}>
    <div className={style.Column__name}>
      { props.list.name }
    </div>
    { props.children }
  </div>
);

Column.propTypes = {
  list: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default Column;

import React from "react";
import PropTypes from "prop-types";

import style from "./style.css";

const makeComponent = (className) => {
  const Component = (props) => (
    <div className={className}>
      {props.children}
    </div>
  );

  Component.propTypes = {
    children: PropTypes.node.isRequired
  };

  return Component;
};

export default {
  Wrapper: makeComponent(style.Layout),
  Content: makeComponent(style.Layout__Content),
  Header: makeComponent(style.Layout__Header),
  Modal: makeComponent(style.Layout__Modal)
};

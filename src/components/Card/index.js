import React from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";

import style from "./style.css";

const Card = (props) => (
  <Draggable draggableId={props.task._id} index={props.task.position}>
    {(provided) => (
      <div>
        <div
          className={style.Card}
          onClick={props.onClick}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          { props.task.name }
        </div>
        { provided.placeholder }
      </div>
    )}
  </Draggable>
);

Card.propTypes = {
  task: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Card;

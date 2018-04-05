import React from "react";
import PropTypes  from "prop-types";
import { connect } from "react-redux";
import { Droppable } from "react-beautiful-dnd";
import { listsWithTasks } from "selectors/board";
import Task from "containers/Task";
import Column from "components/Column";

const Board = (props) => (
  props.lists.map(list => (
    <Droppable key={list.id} droppableId={list.id.toString()}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <Column list={list}>
            {
              list.tasks.map(task => <Task key={task._id} task={task} />)
            }
          </Column>
          { provided.placeholder }
        </div>
      )}
    </Droppable>
  ))
);

Board.propTypes = {
  lists: PropTypes.array.isRequired
};

export const mapStateToProps = (state) => ({
  lists: listsWithTasks(state)
});

export default connect(mapStateToProps)(Board);

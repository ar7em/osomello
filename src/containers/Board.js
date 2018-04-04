import React from "react";
import PropTypes  from "prop-types";
import { connect } from "react-redux";
import { listsWithTasks } from "selectors/board";
import Task from "containers/Task";
import Column from "components/Column";

const Board = (props) => (
  props.lists.map(list => (
    <Column key={list.id} list={list}>
      {
        list.tasks.map(task => <Task key={task._id} task={task} />)
      }
    </Column>
  ))
);

Board.propTypes = {
  lists: PropTypes.array.isRequired
};

export const mapStateToProps = (state) => ({
  lists: listsWithTasks(state)
});

export default connect(mapStateToProps)(Board);

import React from "react";
import PropTypes  from "prop-types";
import { connect } from "react-redux";
import Card from "components/Card";
import * as tasksActions from "actions/tasks";

const Board = props => <Card task={props.task} onClick={props.edit.bind(null, props.task)} />;

Board.propTypes = {
  task: PropTypes.object.isRequired,
  edit: PropTypes.func.isRequired
};

export const mapDispatchToProps = (dispatch) => ({
  edit: (task) => dispatch(tasksActions.edit(task))
});

export default connect(null, mapDispatchToProps)(Board);

import React from "react";
import PropTypes  from "prop-types";
import { connect } from "react-redux";
import { listsWithTasks } from "selectors/board";
import Column from "components/Column";
import Card from "components/Card";

const Board = (props) => (
  props.lists.map(list => (
    <Column key={list.id} list={list}>
      {
        list.tasks.map(task => <Card key={task.key} task={task} />)
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

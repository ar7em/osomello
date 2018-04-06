import React, { Component } from "react";
import PropTypes  from "prop-types";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import * as listsActions from "actions/lists";
import * as tasksActions from "actions/tasks";
import Logo from "components/Logo";
import Layout from "components/Layout";
import Board from "containers/Board";
import Edit from "containers/Edit";
import { editTask } from "selectors/tasks";

class App extends Component {
  componentDidMount() {
    this.props.retrieveLists();
    this.props.retrieveTasks();
    this.props.checkUpdates();
  }

  render() {
    return (
      <DragDropContext
        onDragEnd={result => {
          if (!(result && result.destination && result.source)) {
            return;
          }

          const taskId = result.draggableId;
          const fromList = parseInt(result.source.droppableId, 10);
          const toList = parseInt(result.destination.droppableId, 10);
          const startPosition = result.source.index;
          const endPosition = result.destination.index;

          this.props.reorderTasks(taskId, fromList, toList, startPosition, endPosition);
        }}
      >
        <Layout.Wrapper>
          {
            this.props.editTask &&
            <Layout.Modal>
              <Edit task={this.props.editTask} />
            </Layout.Modal>
          }
          <Layout.Header>
            <Logo />
          </Layout.Header>
          <Layout.Content>
            <Board />
          </Layout.Content>
        </Layout.Wrapper>
      </DragDropContext>
    );
  }
}

App.propTypes = {
  retrieveLists: PropTypes.func.isRequired,
  retrieveTasks: PropTypes.func.isRequired,
  editTask: PropTypes.object,
  checkUpdates: PropTypes.func.isRequired,
  reorderTasks: PropTypes.func.isRequired
};

export const mapStateToProps = (state) => ({
  editTask: editTask(state)
});

export const mapDispatchToProps = (dispatch) => ({
  retrieveLists: () => dispatch(listsActions.retrieve()),
  retrieveTasks: () => dispatch(tasksActions.retrieve()),
  checkUpdates: () => dispatch(tasksActions.checkUpdates()),
  reorderTasks: (taskId, fromList, toList, startPosition, endPosition) => {
    dispatch(tasksActions.reorder(taskId, fromList, toList, startPosition, endPosition));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

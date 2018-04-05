import React, { Component } from "react";
import PropTypes  from "prop-types";
import { connect } from "react-redux";
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
    );
  }
}

App.propTypes = {
  retrieveLists: PropTypes.func.isRequired,
  retrieveTasks: PropTypes.func.isRequired,
  editTask: PropTypes.object,
  checkUpdates: PropTypes.func.isRequired
};

export const mapStateToProps = (state) => ({
  editTask: editTask(state)
});

export const mapDispatchToProps = (dispatch) => ({
  retrieveLists: () => dispatch(listsActions.retrieve()),
  retrieveTasks: () => dispatch(tasksActions.retrieve()),
  checkUpdates: () => dispatch(tasksActions.checkUpdates())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

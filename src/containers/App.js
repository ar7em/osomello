import React, { Component } from "react";
import PropTypes  from "prop-types";
import { connect } from "react-redux";
import * as listsActions from "actions/lists";
import * as tasksActions from "actions/tasks";
import Logo from "components/Logo";
import Layout from "components/Layout";
import Board from "containers/Board";

class App extends Component {
  componentDidMount() {
    this.props.retrieveLists();
    this.props.retrieveTasks();
  }

  render() {
    return (
      <Layout.Wrapper>
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
  retrieveTasks: PropTypes.func.isRequired
};

export const mapDispatchToProps = (dispatch) => ({
  retrieveLists: () => dispatch(listsActions.retrieve()),
  retrieveTasks: () => dispatch(tasksActions.retrieve())
});

export default connect(null, mapDispatchToProps)(App);

import React, { Component } from "react";
import PropTypes  from "prop-types";
import { connect } from "react-redux";
import * as listsActions from "actions/lists";
import * as tasksActions from "actions/tasks";

class App extends Component {
  componentDidMount() {
    this.props.retrieveLists();
    this.props.retrieveTasks();
  }

  render() {
    return (
      <div>Hello, world</div>
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

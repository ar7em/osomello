import React from "react";
import PropTypes  from "prop-types";
import { connect } from "react-redux";
import Details from "components/Details";
import * as tasksActions from "actions/tasks";

const Edit = props => <Details task={props.task} save={props.save} cancel={props.cancel} />;

Edit.propTypes = {
  task: PropTypes.object.isRequired,
  save: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired
};

export const mapDispatchToProps = (dispatch) => ({
  save: (_id, name) => dispatch(tasksActions.rename(_id, name)),
  cancel: () => dispatch(tasksActions.cancelEdit())
});

export default connect(null, mapDispatchToProps)(Edit);

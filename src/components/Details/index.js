import React, { Component } from "react";
import PropTypes from "prop-types";

import style from "./style.css";

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {name: this.props.task.name || ""};
    this.onChange = this.onChange.bind(this);
    this.save = this.save.bind(this);
  }

  onChange(e) {
    const newName = e.target.value;
    this.setState(() => ({name: newName}));
  }

  save(e) {
    this.props.save(this.props.task._id, this.state.name);
    e.preventDefault();
  }

  componentDidMount() {
    this.input && this.input.focus();
  }

  render() {
    return (
      <form onSubmit={this.save} className={style.Details}>
        <div className={style.Details__title}>
          Rename task
        </div>
        <input
          className={style.Details__input}
          placeholder="Provide task name"
          ref={input => this.input = input}
          value={this.state.name}
          onChange={this.onChange}
        />
        <div className={style.Details__controls}>
          <a onClick={this.save} className={`${style.Details__button} ${style["Details__button--save"]}` } >
            Save
          </a>
          <a onClick={this.props.cancel} className={`${style.Details__button} ${style["Details__button--cancel"]}` }>
            Cancel
          </a>
        </div>
      </form>
    );
  }
}

Details.propTypes = {
  task: PropTypes.object.isRequired,
  save: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired
};

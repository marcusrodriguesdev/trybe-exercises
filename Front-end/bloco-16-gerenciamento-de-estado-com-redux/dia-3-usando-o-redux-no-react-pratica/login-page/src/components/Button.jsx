import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { onClick, text, className } = this.props;
    return (
      <button
        type="button"
        className={ className }
        onClick={ onClick }
      >
        { text }
      </button>
    );
  }
}
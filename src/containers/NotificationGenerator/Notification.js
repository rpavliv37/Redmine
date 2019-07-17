import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StatusMessage from '../../components/UIKit/StatusMessage';
/**
 * @module Notification
 */
/**
 * Renders one notification
 * @memberof module:Notification
 */
class Notification extends Component {
  onClick = () => {
    const { deleteNotification, message } = this.props;
    deleteNotification(message.id);
  }

  render() {
    const { message } = this.props;
    const { type, text } = message;

    return (
      <Text type={type} text={text} onClick={this.onClick}>
        {text}
      </Text>
    );
  }
}

Notification.propTypes = {
  message: PropTypes.instanceOf(Object).isRequired,
  deleteNotification: PropTypes.func.isRequired
};

export default Notification;

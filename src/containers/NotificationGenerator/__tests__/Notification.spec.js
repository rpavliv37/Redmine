import React from 'react';
import { shallow } from 'enzyme';
import Notification from '../Notification';

describe('NotificationGenerator: Notification', () => {
  it('Shallow render of Notification (success)', () => {
    const props = {
      deleteNotification: () => {},
      message: {
        type: 'success',
        text: 'Test message for notification.'
      }
    };
    const wrapper = shallow(<Notification {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

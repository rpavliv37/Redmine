import React from 'react';
import { render } from 'enzyme';
import configureStore from 'redux-mock-store';
import NotificationList from '../NotificationList';

const initialState = {
  notifiactions: [
    {
      id: 'messageID1',
      type: 'success',
      text: 'Test message. Success.'
    },
    {
      id: 'messageID2',
      type: 'error',
      text: 'Test message. Error.'
    }
  ]
};
const mockStore = configureStore();
const store = mockStore(initialState);

describe('NotificationGenerator: NotificationList', () => {
  it('Shallow render of NotificationList', () => {
    const props = {
      deleteNotification: () => {}
    };
    const wrapper = render(<NotificationList {...props} store={store} />);
    expect(wrapper).toMatchSnapshot();
  });
});

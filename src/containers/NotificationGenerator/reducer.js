import { ADD_NOTIFICATION, DELETE_NOTIFICATION } from './constants';

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_NOTIFICATION: {
      return [
        ...state,
        {
          id: action.id,
          type: action.message.type,
          text: action.message.text
        }
      ];
    }
    case DELETE_NOTIFICATION: {
      return [...state.slice(1)];
    }
    default:
      return state;
  }
};

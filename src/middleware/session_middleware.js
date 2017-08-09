import { signin, signout } from '../util/session_api_util';
import {
  SIGNIN,
  SIGNOUT
} from '../actions/session_actions';

const SessionMiddleware = ({ getState, dispatch }) => next => action => {
  switch(action.type) {
    case SIGNIN:
      signin();
      return next(action);

    case SIGNOUT:
      signout();
      return next(action);

    default:
      return next(action);
  }
};

export default SessionMiddleware;

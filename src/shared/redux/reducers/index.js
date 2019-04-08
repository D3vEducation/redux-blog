// Dependencies
import { combineReducers } from 'redux';

// Shared Reducers
import device from './deviceReducer';

// App Reducers
import blog from '../../../frontend/app/blog/reducer';

const rootReducer = combineReducers({
  device,
  blog
});

export default rootReducer;

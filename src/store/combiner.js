import {createStore, combineReducers} from 'redux';

import appReducer from './reducers/appReducer';

const rootReducer = combineReducers({
  app: appReducer
})

const combiner = ()  => {
  return createStore(rootReducer);
}

export default combiner;

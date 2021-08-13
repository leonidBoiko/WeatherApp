import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {searchReducer, locationReducer, currentTempReducer} from './reducers';

const rootReducer = combineReducers({
  location: locationReducer,
  temp: currentTempReducer,
  search: searchReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));

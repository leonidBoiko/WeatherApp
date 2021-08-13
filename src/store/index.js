import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {mapReducer, searchReducer} from './reducers';

const rootReducer = combineReducers({
  map: mapReducer,
  search: searchReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));

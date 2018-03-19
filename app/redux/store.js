import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './rootReducer'; // Import the root reducer

const enhancer = compose(applyMiddleware(think));

// Connect our store to the reducers
export default createStore(reducers, enhancer);
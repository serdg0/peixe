import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from '../reducers/root';

export default createStore(rootReducer, applyMiddleware(logger));

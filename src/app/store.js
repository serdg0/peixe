import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/root';

export default configureStore(rootReducer);

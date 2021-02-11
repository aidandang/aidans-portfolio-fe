import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// components
import userReducer from './user/user.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['']
}

const appReducer = combineReducers({
  user: userReducer
})

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer)
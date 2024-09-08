import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userReducer from './slices/user';
import activeReducer from './slices/active';
import chatReducer from './slices/chat';
import authReducer from './slices/auth';

// import audioCallReducer from './slices/audioCall';
// import videoCallReducer from './slices/videoCall';



const rootPersistConfig = {
  key: 'root',
  storage : AsyncStorage,
  keyPrefix: 'redux-',
  //   whitelist: [],
  //   blacklist: [],
};

const rootReducer = combineReducers({
  user : userReducer,
  auth: authReducer,
  chat: chatReducer,
  active : activeReducer,
//   audioCall: audioCallReducer,
//   videoCall: videoCallReducer,
});

export { rootPersistConfig,rootReducer};
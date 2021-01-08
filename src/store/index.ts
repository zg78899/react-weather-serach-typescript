import { applyMiddleware, combineReducers, createStore } from "redux";
import WeatherReducer from './reducers/WaetherReducer';
import alertReducer from './reducers/alerReducer';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  weather:WeatherReducer,
  alert:alertReducer
});

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export type RootState  = ReturnType<typeof rootReducer>;
export default store;

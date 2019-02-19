import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./../reducers";
import promise from "redux-promise";

export default function configureStore() {
  const middlewares = [thunkMiddleware, promise];

  return createStore(
    rootReducer,
    "production",
    compose(applyMiddleware(...middlewares))
  );
}

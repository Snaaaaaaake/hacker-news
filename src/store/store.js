import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import listReducer from "../reducers/listReducer";
import singleNewsReducer from "../reducers/singleNewsReducer";
import commentsReducer from "../reducers/commentsReducer";

const store = createStore(
  combineReducers({
    listState: listReducer,
    singleNewsState: singleNewsReducer,
    commentsState: commentsReducer,
  }),
  applyMiddleware(thunk)
);

export default store;

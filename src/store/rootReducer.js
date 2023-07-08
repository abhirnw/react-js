import home from "./home/reducer";
const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  home,
});

export default rootReducer;

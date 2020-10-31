import { combineReducers } from "redux";
import loginReducer from "./login";
import registerReducer from "./register";
import userReducer from "./user";
import historyReducer from "./history";
import searchReducer from "./search";
import transferReducer from "./transfer";
import topupReducer from "./topup";
import forgotReducer from "./forgot";
import adminReducer from "./admin";
import adminTransfer from "./adminTransfer";

export default combineReducers({
  auth: loginReducer,
  register: registerReducer,
  forgot: forgotReducer,
  user: userReducer,
  history: historyReducer,
  search: searchReducer,
  transfer: transferReducer,
  topup: topupReducer,
  admin: adminReducer,
  sender: adminTransfer,
});

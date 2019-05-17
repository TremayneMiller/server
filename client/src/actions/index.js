import axios from "axios";
import { FETCH_USER } from "./types";
// create a fuctin that uses axios to get the current user and then dispatch
export const fetchUser = () => {
  return function(dispatch) {
    axios
      .get("/api/current_user")
      .then(res => dispatch({ type: FETCH_USER, payload: res }));
  };
};

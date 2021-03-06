import axios from "axios";
import { isNil } from "lodash";
import React, { useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/login";
import Signup from "./pages/signUp";
import { LOADING, SET_USER, UNSET_USER } from "./store/actions";
import { useStoreContext } from "./store/store";

const App = () => {
  const history = useHistory();
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    dispatch({ type: LOADING });

    axios.get("/api/users").then(response => {
      if (!isNil(response.data.user)) {
        dispatch({ type: SET_USER, user: response.data.user });
        history.push("/");
      } else {
        dispatch({ type: UNSET_USER });
        console.log(`Failure to get user, staying on login page.`);
        history.push("/login");
      }
    });
  }, [dispatch, history]);

  return (
    <div>
      {state.user ? (
        <Switch>
          {/* <Route exact path="/" component={main} /> */}
          <Route path="/" component={Main} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Redirect to="/login" />
        </Switch>
      )}
    </div>
  );
};

export default App;

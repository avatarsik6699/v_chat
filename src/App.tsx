import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Auth } from "./components/pages/Auth";

export const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/auth" component={Auth} />
        </Switch>
      </Router>
    </div>
  );
};

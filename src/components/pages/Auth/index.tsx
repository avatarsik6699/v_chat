import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { LogForm } from "../../organisms/LogForm";
import { RegForm } from '../../organisms/RegForm/index';

export const Auth = () => {
  let match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={`${match.path}/log`} component={LogForm} />
        <Route exact path={`${match.path}/reg`} component={RegForm} />
        <Redirect to={`${match.path}/log`} />
      </Switch>
    </div>
  );
};

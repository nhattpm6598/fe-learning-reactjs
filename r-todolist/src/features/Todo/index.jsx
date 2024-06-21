import React from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";
import { Route, Switch, useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage/Index";
import NotFound from "../../components/NotFound/Index";

ToDoFeature.propTypes = {};

function ToDoFeature(props) {
  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={match.path} component={ListPage}></Route>
        <Route path={`${match.path}/:todoId`} component={DetailPage}></Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default ToDoFeature;

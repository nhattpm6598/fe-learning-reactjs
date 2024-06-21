import React from "react";
import { Route, Link, NavLink } from "react-router-dom";
import ColorBox from "./components/ColorBox";
import Counter from "./components/Couter";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";
import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min";
import NotFound from "./components/NotFound/Index";

function App() {
  return (
    <div>
      {/*<TodoFeature/>*/}
      {/*<AlbumFeature/>*/}
      {/*<ColorBox/>*/}
      {/*<Counter/>*/}
      HomePage
      <p>
        <Link to="/todos">Todo</Link>
      </p>
      <p>
        <Link to="/albums">Albums</Link>
      </p>
      {/*class active*/}
      <p>
        <NavLink to="/todos" activeClassName="active-menu ">
          Todo
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums">Albums</NavLink>
      </p>
      <Switch>
        <Redirect from="/home" to="/" />
        <Redirect from="/home-exact/:postId" to="/albums/:postId" exact/>
        <Route path="/" component={AlbumFeature} exact />
        <Route path="/todos" component={TodoFeature} exact />{" "}
        {/*route matching*/}
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/colorbox" component={ColorBox} />
        <Route path="/couters" component={Counter} />

        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;

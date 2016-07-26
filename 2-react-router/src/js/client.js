import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import Killer from "./pages/Killer";
import Killer1 from "./pages/Killer1";
import Killer2 from "./pages/Killer2";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="archives(/:article)" name="archives" component={Archives}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
      <Route path="killer" name="killer" component={Killer}>
        <Route path="killer1" name="killer1" component={Killer1}></Route>
        <Route path="killer2" name="killer2" component={Killer2}></Route>
      </Route>
    </Route>
  </Router>,
app);

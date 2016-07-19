import React from "react";
import ReactDOM from "react-dom";

import {Layout, TitleLayout} from "./components/Layout";

const app = document.getElementById('app');
const app2 = document.getElementById('app2');
ReactDOM.render(<Layout/>, app);
ReactDOM.render(<TitleLayout/>, app2);

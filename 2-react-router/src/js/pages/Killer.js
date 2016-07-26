import React from "react";
import { Link } from "react-router";

export default class Killer extends React.Component {
  render() {
    console.log("Killer");
    console.log(this.props);
    return (
      <div>
        <h1>Killer</h1>
        <Link to="killer/killer1" class="btn btn-success" activeClassName="active">Killer 1</Link>
        <br></br>
        <Link to="killer/killer2" class="btn btn-success" activeClassName="active">Killer 2</Link>
        {this.props.children}
      </div>
    );
  }
}

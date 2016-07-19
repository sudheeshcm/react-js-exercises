import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome"
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}

export class TitleLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      titleBackground: "blue",
      titleContent: "Welcome to React Page..!!"
    };
  }
  
  setTitleLayout(titleLayout) {
    this.setState({titleLayout});
  }
  
  render() {
    return (
    <div id="titleMain">
      <Footer setTitleLayout={this.setTitleLayout.bind(this)} titleLayout={this.state.titleBackground, this.state.titleContent} />
    </div>
    );
  }
}

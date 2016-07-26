import React from "react";

import Footer from "./Footer";
import Header from "./Header";

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome to React Test Page..!!"
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        
      </div>
    );
  }
}

class TitleLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      titleBackground: "blue",
      titleContent: "Testing under progress."
    };
  }
  
  setTitleLayout(titleLayout) {
    console.log('titleLayout set');
    this.setState(titleLayout);
  }
  
  render() {
    return (
    <div id="titleMain">
      <Footer setTitleLayout={this.setTitleLayout.bind(this)} titleBackground={this.state.titleBackground} titleContent={this.state.titleContent} />
    </div>
    );
  }
}

export {Layout, TitleLayout};
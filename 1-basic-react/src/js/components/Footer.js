import React from "react";


export default class Footer extends React.Component {
  
  handleChange(e) {
    console.log('handleChange called', e.target.value);
    const bckColor = document.getElementById('bckColor').value;
    const tContent = document.getElementById('titleContent').value;
    console.log('Back Color:',bckColor);
    console.log('title Content:',titleContent);
    let titleLayout = {titleBackground:bckColor, titleContent:tContent};
    this.props.setTitleLayout(titleLayout);
    const app2 = document.getElementById('app');
    app2.style.backgroundColor = bckColor;
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleChange.bind(this)}>press</button>
        <div>Text: {this.props.titleContent}</div>
        <select id="bckColor">
          <option value="blue">blue</option>
          <option value="green">green</option>
          <option value="grey">grey</option>
          <option value="white">white</option>
        </select>
        <br />
        <input id="titleContent"/>
      </div>
    );
  }
}
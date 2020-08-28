import React, { Component } from 'react';
import beard from "./Data"
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }
  render() {
    return (
      <div className="header-container">
        <div className="header">
          <div className="header-name">
            <div className="header-name-text">Song<span>people</span></div>
            <div className="header-name-score">score: {this.props.score}</div>
          </div>
          <div className="header-table-container">
            {beard[7].map((el, index) =>{
             if(index === this.props.category) {return <div className="header-table-item-active " key={index}>{el}</div>}
            else {return <div className="header-table-item" key={index}>{el}</div>} 
            }
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
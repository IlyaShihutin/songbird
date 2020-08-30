import React, { Component } from 'react';
class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }
  render() {
    if(this.props.answer){
      return (
        <div className="footer-block">
         <button className="btn "  enabled="true" onClick={event => this.props.switchLevel()}>Следующий уровень</button>
        </div>
      )
    }
    else {
      return (
        <div className="footer-block">
         <button className="btn" enabled="false">Следующий уровень</button>
        </div>
      );
    }
    
      
    }
  }


export default Footer;
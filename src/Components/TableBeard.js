import React, { Component } from 'react';
import beard from "./Data"
import soundFalse from '../Components/source/sound/false.mp3'
import soundTrue from '../Components/source/sound/true.mp3'

class TableBeard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      circuleColor: ["gray-circule", "gray-circule", "gray-circule", "gray-circule", "gray-circule", "gray-circule"],
      answer: false,
      score: 5,
    };
    this.sound =this.sound.bind(this)
  }
  sound(flag){
    const sound = new Audio(flag ? soundTrue : soundFalse);
    sound.play();
}
  selectBeard(number, category) {
    if (!this.state.answer) {
      if (number === this.props.beard) {
        this.state.circuleColor[number] = "green-circule";
        this.props.selectBeardTableItem(category, number, true);
        this.props.changeScore(this.state.score);
        this.sound(true);
        this.setState({ answer: true });
      }
      else {
        this.state.circuleColor[number] = "red-circule";
        this.props.selectBeardTableItem(category, number, false);
        this.sound(false);
        this.setState({ 
          answer: false,
          score:this.state.score-1, 
        });
      }
    }
    else {
      this.props.selectBeardTableItem(category, number, true);
    }
  }
  static getDerivedStateFromProps(props, state) {
    if (props.default) {
      return {
        circuleColor: ["gray-circule", "gray-circule", "gray-circule", "gray-circule", "gray-circule", "gray-circule"],
        answer: false,
        score: 5,
      };
    }
    return null;
  }

  render() {
    return (
      <div className="beard-table-container">
        {beard[this.props.category].map((el, index) =>
          <div className="beard-table-item" key={index} onClick={event => this.selectBeard(index, this.props.category)}><span className={this.state.circuleColor[index]}></span><div>{el.nameRu}</div></div>
        )}
      </div>
    )
  }
}

export default TableBeard;
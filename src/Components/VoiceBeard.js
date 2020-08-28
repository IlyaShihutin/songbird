import React, { Component } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import '../Components/styles.css';

import beard from "./Data"
class VoiceBeard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nextCategory:this.props.category,
      volume:0.5,
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.category === state.nextCategory) {
      return {
        autoPlay:true,
      };
    }
    else {
      return {
        nextCategory:props.category,
        autoPlay:false,
      };
    }
  }
  value(event){
    this.setState({
      volume:event.target.volume,
    })
  }

  render() {
    console.log(this.props.beard)
      if (this.props.answer) {
        return (
          <div className="voice-container">
            <div className="voice-picture">
              <img className="voice-img" src={beard[this.props.category][this.props.beard].img} alt="/" ></img>
            </div>
            <div className="voice-name-and-sound">
              <div className="voice-name"><p>{beard[this.props.category][this.props.beard].nameRu}</p></div>
              <AudioPlayer 
                src={beard[this.props.category][this.props.beard].sound} customAdditionalControls={[]} showJumpControls={false} volume={this.state.volume} onVolumeChange={event => this.value(event)} autoPlayAfterSrcChange={this.state.autoPlay} key={this.state.autoPlay}
              />
            </div>
          </div>
        )
      }
      else {
        return (
          <div className="voice-container">
            <div className="voice-picture">
              <img className="voice-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2g3T3kPTratqjBIs_v7KCFQiweTjH76sAAA&usqp=CAU" alt="/" ></img>
            </div>
            <div className="voice-name-and-sound">
              <div className="voice-name"><p>***</p></div>
              <AudioPlayer 
                src={beard[this.props.category][this.props.beard].sound} customAdditionalControls={[]} showJumpControls={false} autoPlayAfterSrcChange={false} volume={this.state.volume} onVolumeChange={event => this.value(event)}
              />
            </div>
          </div>
        )
      }

  }
}

export default VoiceBeard;
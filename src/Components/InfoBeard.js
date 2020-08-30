import React, { Component } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import '../Components/styles.css';
import beard from "./Data"

class InfoBeard extends Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }
    render() {
        if (beard[this.props.category][this.props.beard].nameRu === "0") {
            return (
                <div className="info-container">
                    <div className="default-text">Послушайте плеер.<br /> Выберите группу из списка</div>
                </div>
            )
        }
        else {
            return (
                <div className="info-container">
                    <div className="info">
                        <div className="info-image">
                            <img src={beard[this.props.category][this.props.beard].img} alt="/"></img>
                        </div>
                        <div className="info-name-sound">
                            <div className="info-name">{beard[this.props.category][this.props.beard].nameRu}</div>
                            <div className="info-lastName">{beard[this.props.category][this.props.beard].nameEn}</div>
                            <div className="info-sound">
                                <AudioPlayer
                                    src={beard[this.props.category][this.props.beard].sound} customAdditionalControls={[]} volume="0.5" showJumpControls={false}  autoPlayAfterSrcChange={false}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="info-text">{beard[this.props.category][this.props.beard].text}</div>
                </div>
            )
        }

    }

}

export default InfoBeard;
import React, { Component } from 'react';
import VoiceBeard from "./VoiceBeard";
import TableBeard from "./TableBeard";
import InfoBeard from "./InfoBeard";
import Footer from "./Footer";

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonFlag: false,
            currentCategory: this.props.selectChatCategory,
            currentBeard: 0,
            selectedCategory: 6,
            selectedBeard: 0,
            answer: false,
            defauldTable: true,
        };
        this.selectBeardTableItem = this.selectBeardTableItem.bind(this);
        this.switchLevel = this.switchLevel.bind(this);
    }
    selectBeardTableItem(category, beard, answer) {
        this.setState({
            selectedCategory: category,
            selectedBeard: beard,
            answer: answer,
            defauldTable: false,
        })
    }

    switchLevel() {
        let randomBeard = this.selectRandomBeard();
        this.setState({
            currentCategory: this.state.currentCategory + 1,
            currentBeard: randomBeard,
            answer: false,
            selectedCategory: 6,
            selectedBeard: 0,
            defauldTable: true,
        })
        this.props.switchCategory();
    }

    componentDidMount() {
        let randomBeard = this.selectRandomBeard();
        this.setState({ currentBeard: randomBeard, loading: true });
    }

    selectRandomBeard() {
        return Math.floor(Math.random() * 6);
    }
    render() {
        return (
            <div className="content-block">
                <VoiceBeard category={this.state.currentCategory} beard={this.state.currentBeard} answer={this.state.answer} />
                <div className="table-info">
                    <TableBeard category={this.state.currentCategory} beard={this.state.currentBeard} changeScore={this.props.changeScore}
                    selectBeardTableItem={this.selectBeardTableItem} default={this.state.defauldTable} />

                    <InfoBeard category={this.state.selectedCategory} beard={this.state.selectedBeard} />
                </div>
                <Footer switchLevel={this.switchLevel} answer={this.state.answer} />
            </div>
        )
    }
}

export default Content;
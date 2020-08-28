import React, { Component } from 'react';
import Header from "./Header";
import Content from "./Content";
import './chat.css';
import './media.css';

class Chat extends Component {
  constructor() {
    super()
    this.state = {
      selectCategory: 0,
      score: 0,
      endGame: false,
    };
    this.switchCategory = this.switchCategory.bind(this);
    this.changeScore = this.changeScore.bind(this);
  }
  switchCategory() {
    if (this.state.selectCategory === 5) {
      this.setState({ endGame: true })
    }
    else {
      this.setState({ selectCategory: this.state.selectCategory + 1 })
    }

  }
  changeScore(newpPlusScore) {
    this.setState({
      score: this.state.score + newpPlusScore,
    })
  }
  refreshGame() {
    this.setState({
      selectCategory: 0,
      score: 0,
      endGame: false,
    })
  }
  render() {
    if (this.state.endGame) {
      if (this.state.score === 30) {
        return (
          <div className="all-container">
            <Header category={0} score={this.state.score} />
            <div className="game-over">
              <h1 className="endGame-h1">Поздравляем!</h1>
              <h1 className="endGame-h1">Ты сумел достичь хоть чего-то!</h1>
              {/* <p className="endGame-p">Вы прошли викторину и набрали {this.state.score} из 30 возможных баллов</p> */}
            </div>
          </div>
        );
      }
      else if (this.state.score <= 10) {
        return (
          <div className="all-container">
            <Header category={0} score={this.state.score} />
            <div className="game-over">
              <h1 className="endGame-h1">Упс!</h1>
              <p className="endGame-p">Вы прошли викторину и набрали {this.state.score} из 30 возможных баллов <br></br> Стоит чаще слушать музыку.</p>
              <hr className="my-4"></hr>
              <button className="btn-game-over" onClick={event => this.refreshGame()}>Попробовать еще раз!</button>
            </div>
          </div>
        );
      }
      else {
        return (
          <div className="all-container">
            <Header category={0} score={this.state.score} />
            <div className="game-over">
              <h1 className="endGame-h1">Поздравляем!</h1>
              <p className="endGame-p">Вы прошли викторину и набрали {this.state.score} из 30 возможных баллов</p>
              <hr className="my-4"></hr>
              <button className="btn-game-over" onClick={event => this.refreshGame()}>Попробовать еще раз!</button>
            </div>
          </div>
        );
      }

    }
    else {
      return (
        <div className="all-container">
          <Header category={this.state.selectCategory} score={this.state.score} />
          <Content selectChatCategory={this.state.selectCategory} switchCategory={this.switchCategory} changeScore={this.changeScore} />

        </div>
      );
    }

  }
}

export default Chat;
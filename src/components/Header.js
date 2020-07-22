import React, { Component } from 'react'
import { AppContext } from './provider';
import { Game_Chooose } from './Player';
import './provider'
import './Header.css';

const GameType = (props) => {
    const { value, name } = props;

    return (
      <AppContext.Consumer>
        {context => (
          <li 
            onClick={() => context.changeGameType(value)} 
            className={value === context.gameType ? "active" : ""}> 
            {name} 
          </li>
        )}
      </AppContext.Consumer>
    )
  }

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>Tic Tac Toe</h1>
        <ul>
          <GameType value={Game_Chooose.Two_Player} name="2 Players" />
          <GameType value={Game_Chooose.With_Conpueter} name="Versus Computer" />
        </ul>
        <div>
          <button onClick={() => this.context.newGame()}>New Game</button>
        </div>
      </header>
    );
  }
}
Header.contextType = AppContext;
export default Header
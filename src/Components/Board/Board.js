import { Component } from "react";
import Square from '../Square'
import s from './Board.module.css'

class Board extends Component {
  
  renderSquare(i) {
    
    return (
      <Square 
        value={this.props.squares[i]} 
        onClick={() => this.props.onClick(i)}
      />
    )
  }
   
  
  render() {
    return (
      <div className={s.boardContainer}>
        <div className="status">{this.props.status}</div>
        <div className={s.boardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={s.boardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={s.boardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <button onClick={this.props.reset}>Reset</button>
      </div>
    );
  }
}


export default Board
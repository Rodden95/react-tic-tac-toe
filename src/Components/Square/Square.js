// import { Component } from "react";
import s from './Square.module.css'
const Square = ({onClick, value}) => 
    (
      <button 
        className={s.square} 
        onClick={onClick}
      >
        <span className={s.letter}>{value}</span>
      </button>
    )
  

export default Square
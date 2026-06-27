import "./App.css";
import { useState } from "react";
import initialBoard from "./data/initialBoard";
import Board from "./components/Board";

export default function App() {
  const [board, setBoard] = useState(initialBoard);

  const addCard=(ColumnId,title)=>{
    const newCard={
      id:Date.now().toString(),
      title
    };


    const newBoard={
      ...board,
      columns: board.columns.map((col)=>
        col.id===ColumnId?
         { ...col, cards: [...col.cards, newCard] }
          : col
      )
    }

    
    setBoard(newBoard);
  }

  return (
    <div className="app">
      <h1 className="app-title">{board.title}</h1>
      <Board board={board} addCard={addCard} />
    </div>
  );
}
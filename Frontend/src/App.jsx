import "./App.css";
import { useState } from "react";
import initialBoards from "./data/initialBoards";
import Board from "./components/Board";
import BoardList from "./components/BoardList";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from "./Landpage/Login-signup/Login";
import Signup from "./Landpage/Login-signup/Signup";

import Dashboard from "./Landpage/Pages/Dashboard";
import Home from "./Landpage/Pages/Home";
import Navbar from "./Landpage/Pages/Navbar";


export default function App() {
  const [boards, setBoards] = useState(initialBoards);
  const [selectedBoardId, setSelectedBoardId] = useState(null)
  const [isLogin, setIsLogin] = useState(false);

  const currentBoard = boards.find((b) => (b.id === selectedBoardId));

  const createBoard = (title) => {
    const newBoard = {
      id: `board-${Date.now()}`,
      title,
      columns: [
        { id: "col-1", title: "To Do", cards: [] },
        { id: "col-2", title: "In-progress", cards: [] },
        { id: "col-3", title: "Done", cards: [] }
      ]
    };
    setBoards([...boards, newBoard]);
    setSelectedBoardId(newBoard.id);
  }

  const addCard = (columnId, title, description, priority, dueDate) => {
    const newCard = {
      id: Date.now().toString(),
      title,
      description,
      priority,
      dueDate
    };
    const updatedBoards = boards.map(board => {
      if (board.id !== selectedBoardId) return board;
      return {
        ...board,
        columns: board.columns.map(col =>
          col.id === columnId
            ? { ...col, cards: [...col.cards, newCard] }
            : col
        )
      };
    });
    setBoards(updatedBoards);
  };

  const deleteCard = (columnId, cardId) => {
    const updatedBoards = boards.map(board => {
      if (board.id !== selectedBoardId) return board;
      return {
        ...board,
        columns: board.columns.map(col =>
          col.id === columnId
            ? { ...col, cards: col.cards.filter(card => card.id !== cardId) }
            : col
        )
      };
    });
    setBoards(updatedBoards);
  };

  const editCard = (columnId, cardId, updatedData) => {
    const updatedBoards = boards.map(board => {
      if (board.id !== selectedBoardId) return board;
      return {
        ...board,
        columns: board.columns.map(col =>
          col.id === columnId
            ? {
                ...col,
                cards: col.cards.map(card =>
                  card.id === cardId ? { ...card, ...updatedData } : card
                )
              }
            : col
        )
      };
    });
    setBoards(updatedBoards);
  };

  const moveCard = (cardId, sourceColumnId, destinationColumnId) => {
    const sourceColumn = currentBoard.columns.find(col => col.id === sourceColumnId);
    if (!sourceColumn) return;
    const cardToMove = sourceColumn.cards.find(card => card.id === cardId);
    if (!cardToMove) return;
    const updatedBoards = boards.map(board => {
      if (board.id !== selectedBoardId) return board;
      return {
        ...board,
        columns: board.columns.map(col => {
          if (col.id === sourceColumnId) {
            return { ...col, cards: col.cards.filter(card => card.id !== cardId) };
          }
          if (col.id === destinationColumnId) {
            return { ...col, cards: [...col.cards, cardToMove] };
          }
          return col;
        })
      };
    });
    setBoards(updatedBoards);
  };

  const addColumn = (title) => {
    const updatedBoards = boards.map(board => {
      if (board.id !== selectedBoardId) return board;
      const newColumn = { id: Date.now().toString(), title, cards: [] };
      return { ...board, columns: [...board.columns, newColumn] };
    });
    setBoards(updatedBoards);
  }

  const renameColumnTitle = (columnId, newTitle) => {
    const updatedBoards = boards.map(board => {
      if (board.id !== selectedBoardId) return board;
      return {
        ...board,
        columns: board.columns.map(col =>
          col.id === columnId ? { ...col, title: newTitle } : col
        )
      };
    });
    setBoards(updatedBoards);
  }

  const deleteColumn = (columnId) => {
    const updatedBoards = boards.map(board => {
      if (board.id !== selectedBoardId) return board;
      return { ...board, columns: board.columns.filter(col => col.id !== columnId) };
    });
    setBoards(updatedBoards);
  }

  return (
    <div className="app">
      {!isLogin && (
        <div className="Navbar">
          <Navbar />
          <main className="page-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/dashboard" element={<Login/>} />
              <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
              <Route path="/signup" element={<Signup setIsLogin={setIsLogin} />} />
            </Routes>
          </main>
        </div>
      )}

      {isLogin && (
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard/> } />
        </Routes>
      )}
    </div>
  );
}
import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import initialBoards from "./data/initialBoards";

import Login from "./Landpage/Login-signup/Login";
import Dashboard from "./Landpage/Pages/Dashboard";
import Home from "./Landpage/Pages/Home";
import Navbar from "./Landpage/Pages/Navbar";

import { getMe, logout } from "./services/authService";

export default function App() {
  const [boards, setBoards] = useState(initialBoards);
  const [selectedBoardId, setSelectedBoardId] = useState(initialBoards[0]?.id ?? null);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);
  const navigate = useNavigate();

  const currentBoard = boards.find((b) => b.id === selectedBoardId);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await getMe();
        setUser(res.data.user);
        setIsLogin(true);
      } catch {
        setIsLogin(false);
      } finally {
        setChecking(false);
      }
    };
    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
    } catch { }
    setIsLogin(false);
    setUser(null);
    navigate("/");
  };

  // ---------------- Board CRUD ----------------
  const createBoard = (title) => {
    const newBoard = {
      id: `board-${Date.now()}`,
      title,
      columns: [
        { id: "col-1", title: "To Do", cards: [] },
        { id: "col-2", title: "In-progress", cards: [] },
        { id: "col-3", title: "Done", cards: [] },
      ],
    };
    setBoards([...boards, newBoard]);
    setSelectedBoardId(newBoard.id);
  };

  const addCard = (columnId, title, description, priority, dueDate) => {
    const newCard = { id: Date.now().toString(), title, description, priority, dueDate };
    const updatedBoards = boards.map((board) => {
      if (board.id !== selectedBoardId) return board;
      return {
        ...board,
        columns: board.columns.map((col) =>
          col.id === columnId ? { ...col, cards: [...col.cards, newCard] } : col
        ),
      };
    });
    setBoards(updatedBoards);
  };

  const deleteCard = (columnId, cardId) => {
    const updatedBoards = boards.map((board) => {
      if (board.id !== selectedBoardId) return board;
      return {
        ...board,
        columns: board.columns.map((col) =>
          col.id === columnId
            ? { ...col, cards: col.cards.filter((card) => card.id !== cardId) }
            : col
        ),
      };
    });
    setBoards(updatedBoards);
  };

  const editCard = (columnId, cardId, updatedData) => {
    const updatedBoards = boards.map((board) => {
      if (board.id !== selectedBoardId) return board;
      return {
        ...board,
        columns: board.columns.map((col) =>
          col.id === columnId
            ? {
                ...col,
                cards: col.cards.map((card) =>
                  card.id === cardId ? { ...card, ...updatedData } : card
                ),
              }
            : col
        ),
      };
    });
    setBoards(updatedBoards);
  };

  const moveCard = (cardId, sourceColumnId, destinationColumnId) => {
    const sourceColumn = currentBoard?.columns.find((col) => col.id === sourceColumnId);
    if (!sourceColumn) return;
    const cardToMove = sourceColumn.cards.find((card) => card.id === cardId);
    if (!cardToMove) return;
    const updatedBoards = boards.map((board) => {
      if (board.id !== selectedBoardId) return board;
      return {
        ...board,
        columns: board.columns.map((col) => {
          if (col.id === sourceColumnId)
            return { ...col, cards: col.cards.filter((card) => card.id !== cardId) };
          if (col.id === destinationColumnId)
            return { ...col, cards: [...col.cards, cardToMove] };
          return col;
        }),
      };
    });
    setBoards(updatedBoards);
  };

  const addColumn = (title) => {
    const updatedBoards = boards.map((board) => {
      if (board.id !== selectedBoardId) return board;
      const newColumn = { id: Date.now().toString(), title, cards: [] };
      return { ...board, columns: [...board.columns, newColumn] };
    });
    setBoards(updatedBoards);
  };

  const renameColumnTitle = (columnId, newTitle) => {
    const updatedBoards = boards.map((board) => {
      if (board.id !== selectedBoardId) return board;
      return {
        ...board,
        columns: board.columns.map((col) =>
          col.id === columnId ? { ...col, title: newTitle } : col
        ),
      };
    });
    setBoards(updatedBoards);
  };

  const deleteColumn = (columnId) => {
    const updatedBoards = boards.map((board) => {
      if (board.id !== selectedBoardId) return board;
      return { ...board, columns: board.columns.filter((col) => col.id !== columnId) };
    });
    setBoards(updatedBoards);
  };

  if (checking) {
    return (
      <div className="app app-loading">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar isLogin={isLogin} user={user} onLogout={handleLogout} />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/login"
            element={
              isLogin ? <Navigate to="/" replace /> : <Login setIsLogin={setIsLogin} />
            }
          />
          <Route path="/signup" element={<Navigate to="/login" replace />} />
          <Route
            path="/dashboard"
            element={
              isLogin ? (
                <Dashboard
                  boards={boards}
                  selectedBoardId={selectedBoardId}
                  onSelectBoard={setSelectedBoardId}
                  onCreateBoard={createBoard}
                  currentBoard={currentBoard}
                  addCard={addCard}
                  deleteCard={deleteCard}
                  editCard={editCard}
                  moveCard={moveCard}
                  addColumn={addColumn}
                  renameColumnTitle={renameColumnTitle}
                  deleteColumn={deleteColumn}
                />
              ) : (
                <Login setIsLogin={setIsLogin} />
              )
            }
          />
        </Routes>
      </main>
    </div>
  );
}
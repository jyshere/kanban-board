import BoardList from "../../components/BoardList";
import Board from "../../components/Board";
import "./Dashboard.css";

export default function Dashboard({
  boards,
  selectedBoardId,
  onSelectBoard,
  onCreateBoard,
  currentBoard,
  addCard,
  deleteCard,
  editCard,
  moveCard,
  addColumn,
  renameColumnTitle,
  deleteColumn,
}) {
  return (
    <div className="dashboard-workspace">

      {/* Sidebar */}
      <aside className="sidebar">
        <BoardList
          boards={boards}
          selectedBoardId={selectedBoardId}
          setSelectedBoardId={onSelectBoard}
          createBoard={onCreateBoard}
        />
      </aside>

      {/* Main content */}
      <main className="main-content">

        {currentBoard ? (
          <>
            <h1 className="board-title">
              {currentBoard.title}
            </h1>

            <Board
              board={currentBoard}
              addCard={addCard}
              deleteCard={deleteCard}
              editCard={editCard}
              moveCard={moveCard}
              addColumn={addColumn}
              renameColumnTitle={renameColumnTitle}
              deleteColumn={deleteColumn}
            />
          </>
        ) : (
          <div className="empty-state">
            <h2>No board selected</h2>
            <p>
              Select an existing board or create a new one to get started.
            </p>
          </div>
        )}

      </main>
    </div>
  );
}
import Card from "./Card";
import CardForm from "./form/cardForm";
import { useState, useCallback } from "react";
import "./Column.css";

export default function Column({ column, addCard, deleteCard, editCard, moveCard, renameColumnTitle, deleteColumn }) {
  
  const [editingColumnId, setEditingColumnId] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleClose = useCallback(() => {
    setShowForm(false);
  }, []);

  const handleCardFormSubmit = (cardData) => {
    addCard(column.id, cardData.title, cardData.description, cardData.priority, cardData.dueDate);
    setShowForm(false);
  };

  const handleDrop = (e) => {
    console.log("DROP HAPPENED");
    const cardId = e.dataTransfer.getData("cardId");
    const sourceColumnId = e.dataTransfer.getData("sourceColumnId");
    console.log("DROP DATA:", {
      cardId,
      sourceColumnId,
      destinationColumnId: column.id
    });

    moveCard(cardId, sourceColumnId, column.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    console.log("DRAG OVER COLUMN:", column.id);
  };

  const handleDoubleClick = (e) => {
    setEditingColumnId(column.id);
    setNewTitle(column.title);
  }

  return (
    <div className="column" onDrop={handleDrop} onDragOver={handleDragOver}>
      <div className="column-title" onDoubleClick={handleDoubleClick}>
        {column.id === editingColumnId ? (
          <input
            className="column-title-input"
            value={newTitle}
            onChange={(e) => { setNewTitle(e.target.value) }}
            placeholder="rename"
            autoFocus
            onKeyDown={(e) => {
              if (!newTitle.trim()) return;
              if (e.key == "Enter") {
                renameColumnTitle(column.id, newTitle)
                setEditingColumnId(null);
                setNewTitle("");
              }
            }}
            onBlur={(e) => { console.log("blur happened"); setEditingColumnId(null); }}
          />
        ) : (
          column.title
        )}
        <button
          className="delete-btn"
          onClick={() => deleteColumn(column.id)}
        >
          ✕
        </button>
      </div>

      <div>
        {column.cards?.map((card) => (
          <Card key={card.id}
            card={card}
            deleteCard={deleteCard}
            columnId={column.id}
            editCard={editCard}
          />
        ))}
      </div>

      {showForm ? (
        <CardForm
          onSubmit={handleCardFormSubmit}
          onClose={handleClose}
        />
      ) : (
        <button className="column-button" onClick={() => setShowForm(true)}>
          + Add Card
        </button>
      )}
    </div>
  );
}
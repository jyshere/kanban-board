import "./Card.css";
import CardForm from "../form/CardForm";
import { useState } from "react";
export default function Card({ card, deleteCard, columnId, editCard }) {
  const[initialData, setInitialData]=useState(null);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("cardId", card.id);
    e.dataTransfer.setData("sourceColumnId", columnId);
    e.currentTarget.style.opacity = "0.5";
  };

  const handleDragEnd = (e) => {
    e.currentTarget.style.opacity = "1";
  };

  return <div className={`card card-priority-bg-${card.priority?.toLowerCase()}`} draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
     {initialData ? (
        <CardForm
          initialData={initialData}
          onSubmit={(updatedData) => {
            editCard(columnId, card.id, updatedData);
            setInitialData(null);
          }}
          onClose={() => setInitialData(null)}
        />
      ) : (
        <>
          <h3>{card.title}</h3>
          {card.description && <p>{card.description}</p>}
          <div className="card-details">
            {card.priority && (
              <span className={`card-priority priority-${card.priority.toLowerCase()}`}>
                {card.priority}
              </span>
            )}
            {card.dueDate && (
              <span className="card-due-date">Due: {card.dueDate}</span>
            )}
          </div>
          <div className="card-actions">
            <button className="edit-btn" onClick={() => setInitialData(card)}>
              ✎
            </button>
            <button className="delete-btn" onClick={() => deleteCard(columnId, card.id)}>
              ✕
            </button>
          </div>
        </>
      )}

  </div>;
}
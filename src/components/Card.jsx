import "./Card.css";
export default function Card({ card, deleteCard, columnId, editCard }) {
  const handleDragStart = (e) => {

    e.dataTransfer.setData("cardId", card.id);
    e.dataTransfer.setData("sourceColumnId", columnId);

    e.currentTarget.style.opacity = "0.5";
  };
  const handleDragEnd = (e) => {
    e.currentTarget.style.opacity = "1";
  };
  return <div className={`card card-priority-bg-${card.priority?.toLowerCase()}`} draggable onDragStart={handleDragStart}>
    <div>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <div className="card-details">
        <span className={`card-priority priority-${card.priority?.toLowerCase()}`}>
          {card.priority}
        </span>
        {card.dueDate && (
          <span className="card-due-date">
            Due: {card.dueDate}
          </span>
        )}
      </div>
    </div>


    <button
      className="edit-btn"
      onClick={() => {
        const newTitle = prompt("Enter new title", card.title);

        if (!newTitle) return;

        editCard(columnId, card.id, newTitle);
      }}
    >
      ✎
    </button>

    <button
      className="delete-btn"
      onClick={() =>
        deleteCard(columnId, card.id)
      }
    >
      ✕
    </button>

  </div>;
}
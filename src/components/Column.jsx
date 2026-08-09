import Card from "./Card";
import { useState } from "react";

export default function Column({ column, addCard, deleteCard, editCard, moveCard, renameColumnTitle ,deleteColumn}) {
  const [text, setText] = useState("");
  const [description ,setDescription]=useState("");
  const [editingColumnId, setEditingColumnId] = useState(null);
  const [newTitle, setNewTitle] = useState("");


  const handleAdd = (column) => {
    if (!text.trim()) return;

    addCard(column.id, text);
    setText("");
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

    e.preventDefault(); // IMPORTANT or drop won't work
    console.log("DRAG OVER COLUMN:", column.id);
  };

  //------------------double click to rename title-----------

  const handleDoubleClick = (e) => {
    setEditingColumnId(column.id);
    setNewTitle(column.title);

  }

  return (
    <div className="column" onDrop={handleDrop} onDragOver={handleDragOver}>
      <div className="column-title" onDoubleClick={handleDoubleClick}>
        {column.id === editingColumnId ?
        (
          <input
            className="column-title-input"
            value={newTitle}
            onChange={(e) => { setNewTitle(e.target.value) }}
            placeholder="rename"
            autoFocus
            onKeyDown={(e)=>{ 
              
                if (!newTitle.trim()) return;

                if(e.key=="Enter"){
                  // console.log("newTitle:", JSON.stringify(newTitle));
                renameColumnTitle(column.id,newTitle)
                setEditingColumnId(null);
                setNewTitle("");
                }
              }
            }

            onBlur={(e)=>{console.log("blur happened");setEditingColumnId(null);}}

          />
        ):
        column.title
        }
        <button
      className="delete-btn"
      onClick={() =>
        deleteColumn(column.id)
      }
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
            editCard={editCard} />
        ))}
      </div>


      <div className="column-input-area">
        <input
          className="column-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="New Card..."
        />

        <button className="column-button" onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}
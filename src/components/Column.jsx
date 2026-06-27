import Card from "./Card";
import { useState } from "react";

export default function Column({ column ,addCard}) {
    const [text, setText] = useState("");


    const handleAdd=()=>{
        if(!text.trim())return;

        addCard(column.id,text);
        setText("");
    };

  return (
    <div className="column">
      <div className="column-title">{column.title}</div>

      {column.cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}

      <div className="column-input-area">
        <input
        className="column-input"
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder="New Card..."
        />

        <button className="column-button" onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}
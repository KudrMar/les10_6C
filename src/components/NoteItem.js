import React from "react";


function NoteItem({ item, onRemove }) {
  return (
    <div className="noteItem" key={item.id}>
      <p className="noteText">{item.content}</p>
      <button className="noteRemove" type="button" onClick={() => onRemove(item.id)}>X</button>
    </div>
  );
}

export default NoteItem;
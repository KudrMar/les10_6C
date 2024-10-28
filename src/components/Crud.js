import NewForm from "./NewForm";
import NoteItem from "./NoteItem";

import { useState } from "react";

function Crud() {
  const [items, setItems] = useState([]);

  const handleRemove = (id) => {
    fetch(`${process.env.REACT_APP_NOTES_URL}/notes/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        loadNotes();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (newNote) => {
    fetch(`${process.env.REACT_APP_NOTES_URL}/notes`, {
      method: 'POST',
      body: JSON.stringify({
        content: newNote,
        id: 0,
      }),
    })
      .then(() => {
        loadNotes();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUpdate = () => {
    loadNotes();
  };

  const loadNotes = () => {
    fetch(`${process.env.REACT_APP_NOTES_URL}/notes`)
      .then(response => (
        response.json()
      )
      )
      .then((data) => {
        setItems(() => data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="crud">
      <div className="head">
        <span className="crudTitle">Notes</span>
        <button className="crudUpdate" type="button" onClick={handleUpdate}>⭮</button>
      </div>
      <div className="notesList">
        {items.map(item => (
          <NoteItem className="noteItem" item={item} key={item.id} onRemove={handleRemove} />
        ))}
      </div>
      <NewForm className="newForm" onSubmit={handleSubmit} />
    </div>
  );
}

export default Crud;
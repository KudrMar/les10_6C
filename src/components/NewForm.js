import React, { useState } from "react";

function NewForm(props) {
  const [form, setForm] = useState({
    newText: '',
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleClick = (evt) => {
    evt.preventDefault();
    if (form.newText !== '') {
      const newNote = form.newText;

      props.onSubmit(newNote);
      setForm({ newText: '' });
    };
  };

  return (
    <form className="newTextForm">
      <label className="newlabel">New Note</label>
      <textarea className='newText' name='newText' onChange={handleChange} value={form.newText} />
      <div className="newTextAdd" onClick={handleClick}>Add</div>
    </form>
  );
}

export default NewForm;
import React from 'react';

const DisplayNote = (props) => {
  const handleClick = (id) => {
    props.getId(id);
  };

  const handleUpdate = (note) => {
    props.getUpdateNoteId(note);
    props.setIsActive(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="note" key={props.id}>
      <p className="title">{props.title}</p>
      <p className="content">{props.content}</p>
      <button onClick={() => handleClick(props.id)}>Delete</button>
      <button
        style={{ marginLeft: '10px' }}
        onClick={() =>
          handleUpdate({ content: props.content, title: props.title, id: props.id })
        }
      >
        Edit
      </button>
    </div>
  );
};

export default DisplayNote;

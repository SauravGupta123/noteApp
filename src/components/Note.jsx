import React from 'react'
import DisplayNote from './DisplayNote';
import { useState } from 'react';
import { useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase-config';

const Note = () => {
  const [notes, setNotes] = useState([])
  const [addNote, setAddNote] = useState({ title: "", content: "" })
  const [id, setId] = useState("")
  const [isEditing, setIsEditing] = useState(false);


  const noteRef = collection(db, "note")

  useEffect(() => {
    const getNotes = async () => {
      const data = await getDocs(noteRef)
      // console.log(data);
      setNotes(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })))
    }
    getNotes()
  }, [noteRef])

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddNote({ ...addNote, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(addNote);
    await addDoc(noteRef, addNote)
  }

  const deleteNote = async (id) => {
    // console.log(id);
    const deletenote = doc(noteRef, id)
    await deleteDoc(deletenote)
  alert("Deleted SuccessFully");

  }

  const updateNote = async (note) => {
    // console.log(note);
    setAddNote({title: note.title, content: note.content})
    setId(note.id)
    setIsEditing(true);
  
  }

  const updatedNote = async (id) =>{
    console.log(id);
    const updatenote = doc(db, "note", id)
    await updateDoc(updatenote, addNote)

  alert("Updated SuccessFully");
  }

  return (
    <div className="container">

      <form method='post' onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Enter Title..." onChange={handleChange} value={addNote.title} required/>
        <textarea name="content" placeholder='Type Content Here...' onChange={handleChange} value={addNote.content} rows="4" required></textarea>
        <div style={{ "display": "flex" }}>
          <button type='submit'>submit</button>
          <button style={{marginLeft: "10px",display: isEditing ? 'block' : 'none'}} type='button' onClick={()=>updatedNote(id)} >update</button>
        </div>
      </form>

      <div className='note-container'>
        {notes && notes.map((note) => (
          <DisplayNote title={note.title} content={note.content} id={note.id} getId={deleteNote} getUpdateNoteId={updateNote} />
        ))}
      </div>
    </div>
  )
}

export default Note;
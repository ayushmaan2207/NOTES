import React,{useState} from 'react';
import "./AddNotes.css"

function AddNotes({addn}){
  const [desc,setDesc]= useState("");

  function notesHandler(event){
    setDesc(event.target.value);
  }

  function submitHandler(event){
    // to prevent re-render
    event.preventDefault();
    setDesc('');
  }

  return (
    <form onSubmit={submitHandler}>
        <textarea value={desc} onChange={notesHandler} placeholder="Type..." className="inpt" type="text" />
        <button className="add" onClick={() => addn(desc)}>Add</button>
    </form>
  )
}

export default AddNotes;

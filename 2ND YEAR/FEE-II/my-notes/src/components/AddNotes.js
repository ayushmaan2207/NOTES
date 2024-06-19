import React,{useState} from 'react';
import "./AddNotes.css"
function AddNotes(){
  const [desc,setDesc]= useState("");

  function notesHandler(event){
    setDesc(event.target.value);
  }

  function submitHandler(event){
    event.preventDefault();
    const note ={
      desc:desc,
    }
    if(desc.length>0){
      console.log(note);
    }
    setDesc('');
  }

  return (
    <form onSubmit={submitHandler}>
        <textarea value={desc} onChange={notesHandler} placeholder="Type..." className="inpt" type="text" />
        <button className="add">Add</button>
    </form>
  )
}

export default AddNotes;

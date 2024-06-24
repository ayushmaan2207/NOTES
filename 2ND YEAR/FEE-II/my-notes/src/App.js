import "./App.css";
import React, { useState } from "react";
import data from "./data";
import AddNotes from "./components/AddNotes";
import Notes from "./components/Notes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [notes, setNotes] = useState(data);

  function addnote(text) {
    if (text.length > 0) {
      const obj={
          id:1,
          tag: "Urgent",
          desc: text,
      }
      let adno=[...notes, obj];
      for(let i=0;i<adno.length;i++){
        adno[i].id= i;
      }
      toast.success("Note Added");
      setNotes(adno);
    }
  }

  function remove(id) {
    const newnotes = notes.filter((notes) => notes.id !== id);
    for(let i=0;i<newnotes.length;i++){
      newnotes[i].id= i;
    }
    toast.error("Note Deleted");
    setNotes(newnotes);
  }

  return (
    <div className="App">
      <div className="heading">MY-NOTES</div>
      <AddNotes addn={addnote}></AddNotes>
      <Notes notes={notes} del={remove} />
    </div>
  );
}

export default App;

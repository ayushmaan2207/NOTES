import "./App.css";
import React, { useState } from "react";
import data from "./data";
import AddNotes from "./components/AddNotes";
import Notes from "./components/Notes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [notes, setNotes] = useState(data);
  
  function correctId(adno){
    for (let i = 0; i < adno.length; i++) {
      adno[i].id = i;
    }
  }
  
  function addnote(obj) {
      let adno = [...notes, obj];
      correctId(adno);
      toast.success("Note Added");
      setNotes(adno);
  }

  function remove(id) {
    const newnotes = notes.filter((notes) => notes.id !== id);
    for (let i = 0; i < newnotes.length; i++) {
      newnotes[i].id = i;
    }
    toast.error("Note Deleted");
    setNotes(newnotes);
  }

  return (
    <div className="App">
      <div className="left">
        <div className="tcont Normal">
          <div className="one">
            <div id="Normal" className="circle"></div>
            <div className="tag">Normal</div>
          </div>
          <button id="Normal" className="tcount">00</button>
        </div>
        <div className="tcont Important">
          <div className="one">
            <div id="Important" className="circle"></div>
            <div className="tag">Important</div>
          </div>
          <button id="Important" className="tcount">00</button>
        </div>
        <div className="tcont Urgent">
          <div className="one">
            <div id="Urgent" className="circle"></div>
            <div className="tag">Urgent</div>
          </div>
          <button id="Urgent" className="tcount">00</button>
        </div>
      </div>
      
      <div className="line"></div>

      <div className="right">
        <div className="top">
          <div className="heading">MY-NOTES</div>
          <button className="dark">0</button>
        </div>
        <AddNotes addn={addnote}></AddNotes>
        <Notes notes={notes} del={remove} />
      </div>
    </div>
  );
}

export default App;

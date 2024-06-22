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
      // const obj={
      //   desc:text,
      //   tag: imp,
      // }
      // const newNotes = [...notes, obj];
      // setNotes(newNotes);
      toast.success("Note Added");
      setNotes((prevNotes) => [...prevNotes, { desc: text }]);
    }
  }

  function remove(desc) {
    const newnotes = notes.filter((notes) => notes.desc !== desc);
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

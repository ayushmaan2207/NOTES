import React, { useState } from "react";
import "./AddNotes.css";

function AddNotes({ addn }) {
  const [desc, setDesc] = useState("");

  function notesHandler(event) {
    setDesc(event.target.value);
  }
  function changeHandler(ids) {
    console.log(ids);
  }

  function submitHandler(event) {
    // to prevent re-render
    event.preventDefault();
    setDesc("");
  }

  return (
    <form className="inpcont" onSubmit={submitHandler}>
      <textarea
        value={desc}
        onChange={notesHandler}
        placeholder="Type..."
        className="inpt"
        type="text"
      />
      <div className="bottom">
        <div className="tagsinput">
          <label class="container">
            <input type="radio" name="radio" className="tagi" id="Normal"/>
            <span class="checkmark" id="Normal"></span>
          </label>
          <label class="container">
            <input type="radio" name="radio" className="tagi" id="Important"/>
            <span class="checkmark" id="Important"></span>
          </label>
          <label class="container">
            <input type="radio" name="radio" className="tagi" id="Urgent"/>
            <span class="checkmark" id="Urgent"></span>
          </label>
        </div>
        <button className="add" onClick={() => addn(desc)}>
          ADD
        </button>
      </div>
    </form>
  );
}

export default AddNotes;

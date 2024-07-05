import React, { useState } from "react";
import "./AddNotes.css";

function AddNotes({ addn }) {
  const [des, setDesc] = useState("");
  const [tag, setTags] = useState("");

  function notesHandler(event) {
    setDesc(event.target.value);
  }
  document.querySelectorAll(".tagi").forEach((tag) => {
    tag.addEventListener("click", function () {
        setTags(tag.id);
    });
  });

  function submitHandler(event) {
    event.preventDefault();
    if (des.length > 0) {
      const obj = {
        id: 1,
        tag: tag,
        desc: des,
      };
      addn(obj);
      setDesc("");
    }
  }

  return (
    <form className="inpcont" onSubmit={submitHandler}>
      <textarea
        required="required"
        value={des}
        onChange={notesHandler}
        placeholder="Type..."
        className="inpt"
        type="text"
      />
      <div className="bottom">
        <div className="tagsinput">
          <label className="container">
            <input type="radio" name="radio" className="tagi" id="Normal" />
            <span className="checkmark" id="Normal"></span>
          </label>
          <label className="container">
            <input
              required="required"
              type="radio"
              name="radio"
              className="tagi"
              id="Important"
            />
            <span className="checkmark" id="Important"></span>
          </label>
          <label className="container">
            <input type="radio" name="radio" className="tagi" id="Urgent" />
            <span className="checkmark" id="Urgent"></span>
          </label>
        </div>
        <button type="submit" className="add">
          ADD
        </button>
      </div>
    </form>
  );
}

export default AddNotes;

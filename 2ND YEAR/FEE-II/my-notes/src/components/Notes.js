import React from "react";
import "./Notes.css";

function Notes({ notes, del }) {
  if (notes.length === 0) {
    return <div className="nothing">No Notes</div>;
  }

  return (
    <div className="box">
      {
        // jab bhi map use kro to ek key bhejo
        notes.map((notes,index) => {
          return (
            <div key={notes.id} className="card">
              {notes.desc}
              <button onClick={() => del(notes.id)} className="delete">
                Delete
              </button>
            </div>
          );
        })
      }
    </div>
  );
}

export default Notes;

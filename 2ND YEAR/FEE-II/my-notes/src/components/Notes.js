import React from "react";
import "./Notes.css";
// npm i react-icons
import { MdDelete } from "react-icons/md";

function Notes({ shownotes, del }) {
  if (shownotes.length === 0) {
    return <div className="nothing">No Notes</div>;
  }
  // document.querySelectorAll(".card").forEach(c => {
  //   c.addEventListener("mouseover",()=>{
  //     c.children[1].children[1].classList.add('delact');
  //   })
  // });
  // document.querySelectorAll(".card").forEach(c => {
  //   c.addEventListener("mouseout",()=>{
  //     c.children[1].children[1].classList.remove('delact');
  //   })
  // });

  return (
    <div className="box">
      {
        // jab bhi map use kro to ek key bhejo
        shownotes.map((shownotes, index) => {
          return (
            <div key={shownotes.id} className={`card ${shownotes.tag}`}>
              <div className="desc">{shownotes.desc}</div>
              <div className="notebottom">
                <div className="nbtag" id={shownotes.tag}>{shownotes.tag}</div>
                <MdDelete onClick={() => del(shownotes.id)} className="delete"/>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default Notes;

import "./App.css";
import React, { useEffect, useState } from "react";
import data from "./data";
import AddNotes from "./components/AddNotes";
import Notes from "./components/Notes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

function App() {
  const [notes, setNotes] = useState(data);
  const [activeTag, setActiveTag] = useState(null);
  const[toggled,setToggled]= useState(false);
  const [n, setN] = useState("00");
  const [i, setI] = useState("00");
  const [u, setU] = useState("00");

  useEffect(() => {
    let carr = [0, 0, 0];
    notes.forEach((ele) => {
      if (ele.tag === "Normal") {
        carr[0]++;
      }
      if (ele.tag === "Important") {
        carr[1]++;
      }
      if (ele.tag === "Urgent") {
        carr[2]++;
      }
    });

    setN(carr[0] < 10 ? "0" + carr[0] : carr[0].toString());
    setI(carr[1] < 10 ? "0" + carr[1] : carr[1].toString());
    if (carr[2] < 10) {
      setU("0" + carr[2]);
    }
  }, [notes]);

  function correctId(adno) {
    adno.forEach((note, index) => {
      note.id = index;
    });
  }

  function addnote(obj) {
    let adno = [...notes, obj];
    correctId(adno);
    toast.success("Note Added");
    setNotes(adno);
  }

  function remove(id) {
    const newnotes = notes.filter((note) => note.id !== id);
    correctId(newnotes);
    toast.error("Note Deleted");
    setNotes(newnotes);
  }

  useEffect(() => {
    document.querySelectorAll(".tcont").forEach((ele) => {
      ele.addEventListener("click", () => {
        const activeElement = document.querySelector(".active");
        const eletag = ele.children[1].id;
        if (activeElement) {
          if (activeElement === ele) {
            ele.classList.remove("active");
            setActiveTag(null);
          } else {
            activeElement.classList.remove("active");
            ele.classList.add("active");
            setActiveTag(eletag);
          }
        } else {
          ele.classList.add("active");
          setActiveTag(eletag);
        }
        console.log(eletag);
      });
    });
  }, []);

  function filteredNotes() {
    if (!activeTag) {
      return notes;
    }
    return notes.filter((note) => note.tag === activeTag);
  }

  return (
    <div className="App">
      <div className="left">
        <div className="tcont " >
          <div className="one">
            <div id="Normal" className="circle"></div>
            <div className="tag">Normal</div>
          </div>
          <button id="Normal" className="tcount">
            {n}
          </button>
        </div>
        <div className="tcont " >
          <div className="one">
            <div id="Important" className="circle"></div>
            <div className="tag">Important</div>
          </div>
          <button id="Important" className="tcount">
            {i}
          </button>
        </div>
        <div className="tcont " >
          <div className="one">
            <div id="Urgent" className="circle"></div>
            <div className="tag">Urgent</div>
          </div>
          <button id="Urgent" className="tcount">
            {u}
          </button>
        </div>
      </div>

      <div className="line"></div>

      <div className="right">
        <div className="top">
          <div className="heading">MY-NOTES</div>
          <button className={`toggle ${toggled ? "toggled":""}`} onClick={()=>setToggled(!toggled)}>
            <div className="thumb">{toggled ? <MdSunny />:<FaMoon />}</div>
          </button>
        </div>
        <AddNotes addn={addnote}></AddNotes>
        <Notes shownotes={filteredNotes()} del={remove} />
      </div>
    </div>
  );
}

export default App;

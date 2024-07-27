import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import "./Paging.css"

const Paging = () => {
  const {page,tpage,handelPage}= useContext(AppContext);
  return (
    <div className="Paging">
      <div className="button">
        {
          page>1 && <button onClick={()=> handelPage(page-1)}>Previous</button>
        }
        {
          page<tpage && <button onClick={()=> handelPage(page+1)}>Next</button>
        }
      </div>
      <div className="paging">
        Page {page}/{tpage}
      </div>
    </div>
  )
}

export default Paging

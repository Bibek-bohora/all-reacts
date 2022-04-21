import React from 'react'

const Filtercomponents = ({filterItems}) => {
  return (
    <div>
            

            <div className="btn">
            <button  onClick={filterItems("all")}>all</button>
            <button  onClick={filterItems("breakefast")}>breakefast</button>
          <button  onClick={filterItems("luunch")}>luunch</button>
           <button  onClick={filterItems("dinner")}>dinner</button>

            </div>
      
    
    </div>
  )
}

export default Filtercomponents
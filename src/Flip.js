import React, { useState } from 'react'
import FlipMove from 'react-flip-move';


function Flip() {
    const [items, setItems] = useState([])

    const addItems = () => {
        setItems([...items,'new item'])
    }
    const removeItems = () => {
        let newItems = items.slice(0,-1);
        setItems(newItems)
    }
  return (
      <div style={{margin:"20px"}}>
          <button onClick={addItems}>Add</button>
          <button onClick={removeItems}>remove</button>
          <FlipMove >
          {
              items.map((item,i) => {
                  return (
                      <div className="item_container" style={{width:'400px',background:'blue',color:'white',margin:"10px"}}>
                          <h1>{item}</h1>
                      </div>
                  )
              })
              }
           </FlipMove>
      </div>
  )
}

export default Flip
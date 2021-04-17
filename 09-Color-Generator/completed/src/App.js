import React, { useState,useEffect } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor] = useState('');
  const [error,setError] = useState(false);
  const [list,setList] = useState(new Values('#f15025').all(10));

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setError(false);
    },5000)
    return ()=>clearTimeout(timeout);
  },[error])

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
       
       let colors = new Values(color).all(10);
       setList(colors);
    }
    catch(error)
    {
      setError(true);
      console.log(error);
    }
  }

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" 
          value={color} 
          placeholder="#f15025" 
          onChange={(e)=>setColor(e.target.value)} 
          className={error?'error':null} />
          <button type="submit"className="btn">Generate</button>
        </form>
      </section>
      <section className="colors">
        {
          list.map((color,index)=>{
            return <SingleColor key={index} {...color} hexC={color.hex} index={index} />
          })
        }
      </section>
    </>
  )
}

export default App

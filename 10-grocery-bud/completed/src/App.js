import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name,setName] = useState('');
  const [list,setList] = useState(JSON.parse(localStorage.getItem('list'))||[]);
  const [isEditing,setIsEditing] = useState(false);
  const [editId,setEditId] = useState(null);
  const [alert,setAlert] = useState({show:false,msg:'',type:''});

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name)
    {
      showAlert(true,'danger','please enter value');
    }
    else if(name && isEditing)
    {
      setList(
        list.map((item)=>{
          if(item.id===editId)
            return {...item,title:name};
          return item;
        })
      )
      setName('');
      setEditId(null);
      setIsEditing(false);
      showAlert(true,'success','value changed');
    }
    else{
      const newItem = {id:new Date().getTime().toString(),title:name};
      setList([...list,newItem]);
      showAlert(true,'success','item added to the list');
      setName('');
    }
  }

  const showAlert = (show=false,type='',msg='') => {
    setAlert({show,type,msg});
  }

  const clearItem = () => {
    showAlert(true,'danger','empty list');
    setList([]);
  }

  const removeItem = (id) => {
    showAlert(true,'danger','Item Removed');
    setList(list.filter( (item) => item.id !== id ));
  }

  const editItem = (id) => {
    const specificItem = list.find((item)=>item.id==id);
    setIsEditing(true);
    setEditId(id);
    setName(specificItem.title);
  }

  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list));
  },[list])

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show&&<Alert {...alert} removeAlert={showAlert} />}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" 
          placeholder="e.g. eggs" 
          value={name} 
          onChange={(e)=>setName(e.target.value)}/>
          <button type="submit" className="submit-btn">
            {isEditing?'edit':'submit'}
          </button>
        </div>
      </form>
      { list.length > 0 && 
          <div className="grocery-container">
            <List items={list} removeItem={removeItem} list={list} editItem={editItem}/>
            <button className="clear-btn" onClick={clearItem}>
              Clear Items
            </button>
          </div>
      }
    </section>
  )
}

export default App

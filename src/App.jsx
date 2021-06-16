import React, { useState } from 'react';
import Todolist from './Todolist.jsx';

var  name=prompt("Enter Your Name","Ujjawal Gupta");
const App= ()=>{
  const [listitem,setlistitem]=useState("");
  const [list,setlist]=useState([]);
  const func=(event)=>{
      let temp=event.target.value;
      setlistitem(temp);
  }
  const execute =()=>{
    if(listitem===''){
      alert('Please Enter Valid Item');
    }
    else{
      setlist([...list,listitem]);
      setlistitem("");
    }
  }
  const deleted = (id)=>{
    console.log("deleted");
    setlist((list)=>{
      return list.filter((element,index)=>{
        return id !== index;
      });
    });
  }
  return(
    <>
      <h1 className="welcome">Welcome {name} !!</h1>
      <div id='container'>
        <br />
        <h1>ToDo List</h1>
        <br />
        <div className='inp'>
            <input type='text' placeholder='Add item' onChange={func} value={listitem}/>
            <button onClick={execute} className="bt"> + </button>
        </div>
        <div className='re'>
        <ol>
          {list.map((item,index,list)=>{
            return <Todolist lists={item} id={index} onSelect={deleted} key={index}/>;
          })}
        </ol>
        </div>
      </div>
    </>
  )
}
export default App;
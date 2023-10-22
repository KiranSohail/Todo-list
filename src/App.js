
import { useState } from 'react';
import './App.css';
import ToDoitems from './components/ToDoitems';
import InputArea from './components/InputArea';


function App() {
  // const[inputList,setInputList]=useState('');
  const[items,setItems]=useState([]);
  // function inputEvent(event){
  //   const newvalue=event.target.value;
  //   setInputList(newvalue); }
  function itemEvent(inputList){
    setItems((previousValue)=>{
    return[  ...previousValue,inputList
    ]})


  }
  function deleteitem(id){
    setItems((previousValue)=>{
      return (previousValue.filter((item,index)=>{
        return (index !==id)
      }))

    })
 

  }
 
  return (
    <div className="App">
      
      <div className='C'>
      <div className='card'>
       <h3>To-Do List</h3>
      {/* <input className='in' onChange={inputEvent} type='text' value={inputList}></input>
      <button disabled={inputList.length===0} className='btn' onClick={itemEvent}>Add</button> */}
      <InputArea   onClick={itemEvent} />
      
      <ul>
  
       {items.map((too,index)=>{
        return(
        <ToDoitems key={index} id={index} txt={too} onChecked={deleteitem}/>
        )

       })}
      </ul>
      </div>
      </div>
    </div>
  );
}

export default App;

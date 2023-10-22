import React from "react";
import { useState } from "react";

function InputArea(props){
    
    const[inputList,setInputList]=useState('');
    function inputEvent(event){
        const newvalue=event.target.value;
        setInputList(newvalue); }


    return(
        <div>
        <input className='in' onChange={inputEvent} type='text' value={inputList}></input>
      <button disabled={inputList.length===0}className='btn'
       onClick={()=>{
        props.onClick(inputList);
        setInputList("");
        }}>Add</button>
        </div>
    )
}
export default InputArea;
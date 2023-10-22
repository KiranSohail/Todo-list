function ToDoitems(props){
    return(
        // <div onClick={props.onChecked(props.id)}>
          <div className="t">
              <li>{props.txt} </li>
           <button className="b" onClick={()=>{props.onChecked(props.id)}}> x</button>
            

        </div>
    )
}
export default ToDoitems;
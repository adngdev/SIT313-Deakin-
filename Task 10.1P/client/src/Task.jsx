import React from "react";

const Task = (props) =>{
    return(
        <div className="task-div">
            <input type="checkbox" checked={props.checked} name={props.name} value={props.value} onChange={props.onChange} />
            <label for={props.name}>{props.lable}</label>
        </div>
    )
}


export default Task
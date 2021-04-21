import { useState } from "react"
import { connect } from "react-redux"
import {addToTodaysTask, showError} from './Redux/actions'
import './custom.css'

function AddTask(props){

    const [taskName, setTaskName]= useState('')
    
    const error= props.localState.showError;
    const category='todaystask'


    const addTask=()=>{
        props.localState.todaystask.find(task=>task.name==taskName)?
            props.showError(true)
        :
            props.addToTodaysTask({taskName, category})
        
        setTaskName('')
    }
    

    return(
        <>
            <div>
                <div>
                    <label for="taskInput"><b>Task Name:</b> </label>
                    <input type='text' id='taskInput' value={taskName} placeholder='Enter task name' onFocus={()=>props.showError(false)} onChange={(e)=>setTaskName(e.target.value)}/>
                </div>

                <div>
                   <button type='button' onClick={addTask} disabled={taskName==''?true:false} >Add task</button>
                </div>

                {error && <span style={{color:'red'}}><b>Task Exists!</b></span>}
            </div>
        </>
    )
}

const mapStateToProps=state=>{
    const localState=state;
    return {localState}
}

const mapDispatchToProps={
    addToTodaysTask,
    showError
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
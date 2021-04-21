import { connect } from "react-redux"
import {updateTasks} from './Redux/actions'


function ManageTasks(props){
    
    const tasks={
        todaystask:[],
        pending:[],
        inprogress:[],
        completed:[],
        abandoned:[]
    }

    props.localState.todaystask.forEach(element => {
        tasks[element.category].push(
            <div
                id={element.id}
                onDragStart={(e) => onDragStart(e, element.id)}
                draggable
                style={{
                    padding :1,
                    margin: '0 0 6px 0',
                    minHeight: '50px',
                    backgroundColor: '#263B4A',
                    color: 'white',
                }}
            >
                <p style={{textAlign:'center'}}>{element.name}</p>
            </div>
        )
    });

    const onDragStart = (ev, id) => {
        ev.dataTransfer.setData("id", id);
      };
    
    const onDragOver = (ev) => {
        ev.preventDefault();
      };
    
    const onDrop = (ev, category) => {
        let id = ev.dataTransfer.getData("id");
    
        let tasksCustom = props.localState.todaystask.filter((task) => {
          if (task.id == id) {
            task.category = category;
          }
          return task;
        });

        props.updateTasks(tasksCustom)

      };

    return(
        <>
            {
                Object.keys(tasks).map(task=>(
                    <div style={{padding:4, width: 120, minHeight: 400, background: 'lightgrey', marginLeft: '10px'}}
                        onDragOver={(e)=>onDragOver(e)}
                        onDrop={(e)=>{onDrop(e, task)}}
                        >
                        <h4 style={{border:'1px solid black', textAlign:'center'}}>{task.toUpperCase()}</h4>
                        {tasks[task]}
                    </div>
                ))
            }
        </>
    )
}



const mapStateToProps=state=>{
    const localState=state;
    return {localState}
}

const mapDispatchToProps={
    updateTasks,
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageTasks);
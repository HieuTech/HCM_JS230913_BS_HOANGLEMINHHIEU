import React,{useState} from 'react'
import './CheckList.scss'
import HandleEditTask from '../HandleEditTask/HandleEditTask'
import HandleDeleteTask from '../HandleDeleteTask/HandleDeleteTask'
export default function CheckList(props) {
  const {tasks,setTasks} = props
  console.log(tasks);
  const [count ,setCount] = useState(0)
  const isChecked = (e) => {
    
    if(e.target.checked){
      tasks.isDone = true
      
      setCount(count+1)
    }else{
      setCount(count-1)
      tasks.isDone = false
      
    }
  }

  return (
    <div>
      <ul className='check-list'>
       
        { tasks.map((item,index)=>{
          return <li className="check-item" key={index}>
          <div className='task'>  <input type="checkbox"  onChange={(e)=>{
            isChecked(e)
          }} />
          <span className='task-name'>{item.name}</span></div>
          <div className='editTask'>
          
          <HandleEditTask tasks={tasks} setTasks={setTasks}  taskId = {item.id}/>
          
          <HandleDeleteTask tasks={tasks} setTasks={setTasks}  taskId = {item.id}/>
          </div>
          </li> 
        })}
      </ul>

      <p className='taskDone'>Công việc đã hoàn thành: 
      <span className='task taskDoneNumber' >{count}</span>/
      <span className='task totalTask'>{tasks.length}</span>
      </p>
    </div>
  )
}

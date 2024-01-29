import React, { useEffect,useState } from 'react'
import './AddTask.scss'
import CheckList from '../CheckList/CheckList'
import { v4 as uuidv4 } from 'uuid';

export default function AddTask() {
 
  const [tasks, setTasks] = useState(localStorage.getItem('Task')?  JSON.parse(localStorage.getItem('Task')) : [])

  const handleAddTask = (e) => {
    e.preventDefault();
    console.log(e.target.addTask.value);

    const newTask = {
      id: uuidv4(),
      name: e.target.addTask.value,
      isDone: false
    }
    
    setTasks([...tasks,newTask])
    
    localStorage.setItem('Task',JSON.stringify(tasks))
  }

  useEffect(() => {
    localStorage.setItem('Task',JSON.stringify(tasks) || [])
  },[tasks])
  
  return (
    <div>
      <div className='search'>
        <form onSubmit={(e)=>{
          handleAddTask(e)
        }}>
        <input type="text" autoFocus name="addTask" id="" className='addTask' />
        <button className='btn btn-add'>AddTask</button>
        </form>
      </div>

      <CheckList tasks={tasks} setTasks={setTasks}/>

    </div>
  )
}
   
  

 
  
 


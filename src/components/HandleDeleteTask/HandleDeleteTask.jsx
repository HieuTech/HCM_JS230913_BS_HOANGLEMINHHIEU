import React, { useEffect, memo } from 'react'

const  HandleDeleteTask = (props) => {

    const {tasks,taskId,setTasks} = props;

    const HandleDeleteTask = () => {
        if(!confirm("Bạn có chắc chắn muốn xóa không?")) return;
        
        const updateTask = tasks.filter((item) => item.id !== taskId);
        setTasks(updateTask)
    }

    useEffect(() => {

        localStorage.setItem("tasks", JSON.stringify(tasks));

    },[tasks])
 

  return (
    <div>
        <i className="fa-solid fa-trash" 
        onClick={()=>{
            HandleDeleteTask()
          }}
          ></i>    
    </div>
  )
}

export default memo(HandleDeleteTask)
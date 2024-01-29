import React, { useEffect, useState } from 'react'
import './HandleEditTask.scss'

export default function HandleEditTask(props) {
  const {tasks,taskId,setTasks} = props;

  const [isOpen, setIsOpen] = useState(false);
  
  const openModal = () => {
    setIsOpen(true);


  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const HandleEditTask = (e) => {
    e.preventDefault();
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, name: e.target.editTask.value } : task
    );

    setTasks(updatedTasks);
    setIsOpen(false);
     

  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks])

  return (
    <>
    <i className="fa-solid fa-pen t" onClick={()=>{
      openModal()
    }} ></i>
     {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button onClick={closeModal} className="close-button">
              Close
            </button>
            <h2>Modal Content</h2>
            <form action="" onSubmit={(e)=>{
              HandleEditTask(e)
            }}>
              <div className='form-group'>
              <label htmlFor="">Task Name</label>
              <input type="text" name="editTask" id=""  />
              </div>
              <div className='submit'>
              <button className='btn btn-edit'>Edit</button>

              </div>
            </form>
          </div>
        </div>
      )}
    
    </>
    
  )
}

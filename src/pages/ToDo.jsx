import React from 'react'
import AddTask from '../components/AddTask/AddTask'
import './ToDo.scss'
export default function ToDo() {
  return (
    <div>
      <h1>Danh sách công việc</h1>
        <AddTask />
    </div>
  )
}
import React from 'react'

const TodoHeader = ({searchText, setSearchText}) => {
  return (
    <div>
        <h1>Todo Listei</h1>
        <input 
        type="text" 
        placeholder='Görev Ara...'
        value={searchText}
        onChange={(e)=>setSearchText(e.target.value)}
        />
    </div>
  )
}

export default TodoHeader
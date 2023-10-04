import React from 'react'
import Items from './items';

export default function Space() {
    const [itemList, setItemList] = React.useState([])
    const [todoItem, setTodoItem] = React.useState('')
    const [error, setError] = React.useState("")
    
    function addTodoItem(e) {
        e.preventDefault()
        if (todoItem.trim() !== '') {
            setItemList([...itemList, todoItem])
            setTodoItem('')
            setError('')
        }else {
            setError("Can't submit an empty list")
        }
    }

    function deleteTodoItem(index) {
        const det = itemList.filter((_, i) => i !== index)
        setItemList(det)
    }

  return (
    <div className='todoList'>
       <h1>Todo List</h1>
       <form>
            <input 
                type="text"
                placeholder='Input List Item'
                name='todoItem'
                value={todoItem}
                onChange={(e) => setTodoItem(e.target.value)}
            />
            <button onClick={addTodoItem}>Add Item</button>
       </form>
       <p className='errorMsg'>{error}</p>
       <ul>
            {itemList.map((item, index) => (
                <Items 
                    text={item} 
                    index={index} 
                    key={index}
                    onDelete={deleteTodoItem}
                />
            ))}
       </ul>
    </div>
  )
}

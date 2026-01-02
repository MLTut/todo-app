import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleAddTodo = (e) => {
    e.preventDefault()
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
      }
      setTodos([...todos, newTodo])
      setInputValue('')
    }
  }

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="app">
      <div className="todo-container">
        <h1>My Todo List</h1>

        <form onSubmit={handleAddTodo} className="todo-form">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task..."
            className="todo-input"
          />
          <button type="submit" className="add-button">
            Add Task
          </button>
        </form>

        <div className="todo-list">
          {todos.length === 0 ? (
            <p className="empty-message">No tasks yet. Add one above!</p>
          ) : (
            todos.map(todo => (
              <div key={todo.id} className="todo-item">
                <span className="todo-text">{todo.text}</span>
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        <div className="todo-count">
          {todos.length} {todos.length === 1 ? 'task' : 'tasks'}
        </div>
      </div>
    </div>
  )
}

export default App

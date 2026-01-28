import { useEffect, useState } from 'react';
import { completeTodo, deleteTodo, getTodos, inCompleteTodo } from '../services/TodoService';
import { useNavigate } from 'react-router-dom';
import { isAdminUser } from '../services/AuthService';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const navigator = useNavigate();

  const isAdmin = isAdminUser();

  function getAllTodos() {
    getTodos()
      .then((response) => setTodos(response.data))
      .catch((error) => console.error(error));
  }

  function handleDeleteTodo(id) {
    deleteTodo(id)
      .then((response) => {
        console.log(response.data);
        getAllTodos();
      })
      .catch((error) => console.error(error));
  }

  function handleInCompleteTodo(id) {
    inCompleteTodo(id)
      .then((response) => {
        console.log(response.data);
        getAllTodos();
      })
      .catch((error) => console.error(error));
  }

  function handleCompleteTodo(id) {
    completeTodo(id)
      .then((response) => {
        console.log(response.data);
        getAllTodos();
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <div>
      <div className='d-flex justify-content-between mb-2'>
        <h3>All Todos</h3>
        {isAdmin && (
          <button
            className='btn btn-primary'
            onClick={() => navigator('/add-todo')}
          >
            Add Todo
          </button>
        )}
      </div>
      <table className='table border table-striped'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>
                <span
                  className={`badge rounded-pill ${todo.completed ? 'text-bg-success' : 'text-bg-warning'}`}
                >
                  {todo.completed ? 'Completed' : 'Pending'}
                </span>
              </td>
              <td>
                {todo.completed ? (
                  <button
                    className='btn btn-primary btn-sm'
                    onClick={() => handleInCompleteTodo(todo.id)}
                  >
                    Mark Incomplete
                  </button>
                ) : (
                  <button
                    className='btn btn-primary btn-sm'
                    onClick={() => handleCompleteTodo(todo.id)}
                  >
                    Mark Complete
                  </button>
                )}
                {isAdmin && (
                  <button
                    className='btn btn-info btn-sm mx-1'
                    onClick={() => navigator(`/edit-todo/${todo.id}`)}
                  >
                    Update
                  </button>
                )}

                {isAdmin && (
                  <button
                    className='btn btn-danger btn-sm'
                    onClick={() => handleDeleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;

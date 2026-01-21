import { useEffect, useState } from 'react';
import { getTodos } from '../services/TodoService';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  function getAllTodos() {
    getTodos()
      .then((response) => setTodos(response.data))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <div>
      <div className='d-flex justify-content-between mb-2'>
        <h3>All Todos</h3>
        <button className='btn btn-primary'>Add Todo</button>
      </div>
      <table className='table border table-striped'>
        <thead>
          <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Description</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>{todo.complete ? 'Completed' : 'Pending'}</td>
              <td>
                {todo.complete ? (
                  <button className='btn btn-primary btn-sm'>Mark Incomplete</button>
                ) : (
                  <button className='btn btn-primary btn-sm'>Mark Complete</button>
                )}
                <button className='btn btn-info btn-sm mx-1'>Update</button>
                <button className='btn btn-danger btn-sm'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;

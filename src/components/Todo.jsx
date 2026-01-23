import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createTodo, getTodoById, updateTodo } from '../services/TodoService';

const Todo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  const [errors, setErrors] = useState({
    title: '',
    description: '',
    completed: false,
  });

  const { id } = useParams();
  const navigator = useNavigate();

  function getTitle() {
    if (id) return 'Update Todo';
    return 'Add New Todo';
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (title.trim()) {
      errorsCopy.title = '';
    } else {
      errorsCopy.title = 'Title is required';
      valid = false;
    }

    if (description.trim()) {
      errorsCopy.description = '';
    } else {
      errorsCopy.description = 'Description is required';
      valid = false;
    }

    setErrors(errorsCopy);

    return valid;
  }

  function handleAddOrUpdateTodo(e) {
    e.preventDefault();

    if (validateForm()) {
      if (id) {
        updateTodo(id, { title, description, completed })
          .then((response) => {
            console.log(response.data);
            navigator('/todos');
          })
          .catch((error) => console.error(error));
      } else {
        createTodo({ title, description, completed })
          .then((response) => {
            console.log(response.data);
            navigator('/todos');
          })
          .catch((error) => console.error(error));
      }
    }
  }

  useEffect(() => {
    if (id) {
      getTodoById(id)
        .then((response) => {
          setTitle(response.data.title);
          setDescription(response.data.description);
          setCompleted(response.data.completed);
        })
        .catch((error) => console.error(error));
    }
  }, [id]);

  return (
    <div className='my-3'>
      <div className='card w-50 mx-auto'>
        <div className='card-header text-center'>
          <h4 className='card-title'>{getTitle()}</h4>
        </div>
        <div className='card-body'>
          <form>
            <div className='mb-3'>
              <label className='form-label'>Title</label>
              <input
                type='text'
                className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                name='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              {errors.title && <div className='invalid-feedback'>{errors.title}</div>}
            </div>
            <div className='mb-3'>
              <label className='form-label'>Description</label>
              <textarea
                className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                rows='3'
                name='description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              {errors.description && <div className='invalid-feedback'>{errors.description}</div>}
            </div>
            <div className='mb-3'>
              <label className='form-label'>Status</label>
              <select
                className={`form-select ${errors.completed ? 'is-invalid' : ''}`}
                name='completed'
                value={completed}
                onChange={(e) => setCompleted(e.target.value)}
              >
                <option
                  value='false'
                  defaultValue
                >
                  No
                </option>
                <option value='true'>Yes</option>
              </select>
              {errors.completed && <div className='invalid-feedback'>{errors.completed}</div>}
            </div>
            <button
              type='submit'
              className='btn btn-primary'
              onClick={handleAddOrUpdateTodo}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Todo;

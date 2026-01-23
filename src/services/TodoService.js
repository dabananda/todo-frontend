import axios from 'axios';

const API_TODO_BASE_URL = 'http://localhost:8080/api/todos';

export const getTodos = () => axios.get(API_TODO_BASE_URL);
export const getTodoById = (id) => axios.get(API_TODO_BASE_URL + '/' + id);
export const createTodo = (todo) => axios.post(API_TODO_BASE_URL, todo);
export const updateTodo = (id, todo) => axios.put(API_TODO_BASE_URL + '/' + id, todo);
export const deleteTodo = (id) => axios.delete(API_TODO_BASE_URL + '/' + id);
export const completeTodo = (id) => axios.patch(API_TODO_BASE_URL + '/' + id + '/complete');
export const inCompleteTodo = (id) => axios.patch(API_TODO_BASE_URL + '/' + id + '/in-complete');

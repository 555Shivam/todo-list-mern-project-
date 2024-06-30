// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <h1 className="title">Shivam's To-Do List</h1>
        </header>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
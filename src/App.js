// src/App.js
import React from 'react';
import TaskList from './components/Tasklist';
import TaskForm from './components/TaskForm';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Task Management App</h1>
        <TaskForm />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;

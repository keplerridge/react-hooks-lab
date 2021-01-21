import React, {useState} from 'react';
import AddTodo from './AddTodo';
import List from './List';
import './App.css';

function App () {
  const [list, setList] = useState([]);

  function addToList(item) {
    const todo = [...list, item];
    setList(todo)
  }

  return (
    <div className="App">
      <AddTodo addToList={addToList}/>
      <List list={list}/>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import './App.css';
import Template from "./components/Template";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";
import ProgressBar from "./components/ProgressBar";

let nextId = 4;
const App = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {id: 1,
    text: "할일 1",
    checked: true
  },
  {id: 2,
    text: "할일 2",
    checked: false
  },
  {id: 3,
    text: "할일 3",
    checked: true
  }
  ]);

  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle(prev => !prev);
  };

  const onInsertTodo = text => {
    if(text === ""){
      return alert("할 일을 입력해주세요.");
    }else{
      const todo = {
        id: nextId,
        text,
        checked: false
      };
      setTodos(todos => todos.concat(todo));
      nextId++;
    }
  };

  const onCheckToggle = (id) => {
    setTodos(todos=>todos.map(todo => (todo.id === id ? {...todo, checked: !todo.checked} :todo)))
  }

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo)
  }

  const onRemove = id => {
    onInsertToggle();
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo, text} : todo))
  }

  const today = new Date();

  const dateString = today.toLocaleString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
  });

  const dayName = today.toLocaleString('ko-KR', { weekday: 'long' });
  return (
  <Template
    dateString={dateString}
    dayName={dayName}
    todoLength={todos.length}
    >
    <div className="App">
      <ProgressBar bgcolor={"#f67280"} nowStep={todos.filter((todos) => todos.checked === true).length} totalStep={todos.length} />
    </div>
    <TodoList 
    todos={todos} 
    onCheckToggle={onCheckToggle} 
    onInsertToggle={onInsertToggle}
    onChangeSelectedTodo={onChangeSelectedTodo} />
    <div className="add-todo-button" onClick={onInsertToggle}>
      <MdAddCircle />
    </div>
    {insertToggle && (
    <TodoInsert
      selectedTodo={selectedTodo}
      onInsertToggle={onInsertToggle}
      onInsertTodo={onInsertTodo}
      onRemove={onRemove}
      onUpdate={onUpdate}
    />
    )}
  </Template>
  
  );
};

export default App;

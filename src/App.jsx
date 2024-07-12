import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { FaPlus } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  let [addBtn, setAddBtn] = useState(<FaPlus />);
  let default_data = ["Milk", "Ghee", "Water"];
  let [editIndex, setEditIndex] = useState(null); // New state for tracking edit index

  const [inputVal, setInputVal] = useState("");

  const getLocalItems = () => {
    let list = localStorage.getItem("lists");
    if (list) {
      return JSON.parse(localStorage.getItem("lists"));
    } else {
      return [];
    }
  };
  const [todoItem, setTodoItem] = useState(getLocalItems());

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(todoItem));
  }, [todoItem]);

  return (
    <>
      <Header></Header>
      <div className="container">
        <TodoInput
          todoItem={todoItem}
          setTodoItem={setTodoItem}
          inputVal={inputVal}
          setInputVal={setInputVal}
          addBtn={addBtn}
          setAddBtn={setAddBtn}
          editIndex={editIndex} // Pass editIndex to TodoInput
          setEditIndex={setEditIndex} // Pass setEditIndex to TodoInput
        ></TodoInput>
        <TodoList
          todoItem={todoItem}
          setTodoItem={setTodoItem}
          inputVal={inputVal}
          setInputVal={setInputVal}
          addBtn={addBtn}
          setAddBtn={setAddBtn}
          setEditIndex={setEditIndex} // Pass setEditIndex to TodoList
        ></TodoList>
      </div>
    </>
  );
}

export default App;

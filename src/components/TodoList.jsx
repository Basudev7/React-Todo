import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const TodoList = ({
  todoItem,
  setTodoItem,
  inputVal,
  setInputVal,
  addBtn,
  setAddBtn,
  setEditIndex, // Add setEditIndex prop
}) => {
  const deleteItem = (element) => {
    console.log(element);
    let newItems = todoItem.filter((item) => {
      return item !== element;
    });
    setTodoItem(newItems);
  };

  const editItem = (e, index) => {
    console.log(e, index);
    setInputVal(e);
    setAddBtn("Update");
    setEditIndex(index);
  };

  const DeleteAll = () => {
    setTodoItem([]);
  };

  return (
    <section className="lists">
      {todoItem.map((element, index) => (
        <div key={element} className="list-item">
          <p>{element}</p>
          <div className="button-container">
            <button element={element} onClick={() => editItem(element, index)}>
              <MdEdit />
            </button>
            <button element={element} onClick={() => deleteItem(element)}>
              <MdDelete />
            </button>
          </div>
        </div>
      ))}
      <button className="deleteAll" onClick={DeleteAll}>
        Delete All
      </button>
    </section>
  );
};

export default TodoList;

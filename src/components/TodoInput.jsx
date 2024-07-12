import React from "react";
import { useState } from "react";

const TodoInput = ({
  todoItem,
  setTodoItem,
  inputVal,
  setInputVal,
  addBtn,
  setAddBtn,
  editIndex,
  setEditIndex,
}) => {
  const words = (e) => {
    setInputVal(e.target.value);
  };

  const funcAdd = (e) => {
    let newVal = e.target.value;
    console.log(`This is before update ${todoItem}`);
    setTodoItem([...todoItem, newVal]);
    setInputVal("");
    console.log(`This is after update ${todoItem}`);
  };

  const addItem = (e) => {
    if (e.code == "Enter") {
      if (addBtn === "Update") {
        console.log("Here it is");
        let newItems = todoItem.map((item, index) => {
          if (index === editIndex) {
            return inputVal;
          } else {
            return item;
          }
        });
        setTodoItem(newItems);
        setAddBtn("Add");
        setEditIndex(null);
      } else {
        if (inputVal === "") {
          alert("Enter a Value");
          return false;
        }
        if (todoItem.length !== 0) {
          todoItem.forEach((item) => {
            if (item === inputVal) {
              alert(`${item} already exists`);
              return false;
            } else {
              funcAdd(e);
            }
          });
        } else {
          console.log("It is here ");
          // console.log(inputVal);

          setTodoItem([inputVal]);
        }
      }
      setInputVal("");
    }
  };

  const addItemfromBtn = () => {
    const selectedItem = inputVal;

    if (selectedItem === "") {
      alert("No value found");
      return;
    }

    if (addBtn === "Update") {
      let newItems = todoItem.map((item, index) =>
        index === editIndex ? selectedItem : item
      );
      setTodoItem(newItems);
      setAddBtn("Add");
      setEditIndex(null);
    } else {
      if (todoItem.includes(selectedItem)) {
        alert(`${selectedItem} already exists`);
      } else {
        setTodoItem([...todoItem, selectedItem]);
        console.log(selectedItem);
      }
    }
    setInputVal("");
  };

  return (
    <section className="todoinput">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={inputVal}
          onChange={words}
          onKeyDown={addItem}
          placeholder="Add an Item"
          required
        />
        <button
          className="btn btn-outline-secondary"
          id="button-addon2"
          onClick={addItemfromBtn}
        >
          {addBtn}
        </button>
      </div>
    </section>
  );
};

export default TodoInput;

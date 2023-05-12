import React, { useState } from 'react';
import TodoItem from './TodoItems';
import InputArea from './InputArea';

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    if (inputText === "") {
      alert("Enter todo!")
    } else {
      setItems((prevItems) => {
        return [...prevItems, inputText];
      });
    }
  }

  function deleteItem(id) {
    console.log('Delete button working');
    setItems((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>
          Tood<span className="lr">l</span>r
        </h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <TodoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

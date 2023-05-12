import React, { useState } from 'react';
// import '/public/styles.css';

function TodoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function lineThrough() {
    setIsDone(!isDone);
  }

  return (
    <div className="todo-items">
      <li
        style={{ textDecoration: isDone ? 'line-through' : 'none' }}
        onClick={lineThrough}
      >
        {props.text}
      </li>
      <button
        className="del-btn"
        onClick={() => {
          props.onChecked(props.id);
        }}
      >
        Del
      </button>
    </div>
  );
}

export default TodoItem;

import React from "react";

const TodoList = ({ filteredTodos, deleteTodo }) => {
  if (filteredTodos.length === 0) {
    return <p>Görev bulunamadı.</p>;
  }

  return (
    <div>
      {filteredTodos.map((todo) => (
        <div key={todo.id}>
          <li>{todo.text}</li>
          <button onClick={() => deleteTodo(todo.id)}>Sil</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

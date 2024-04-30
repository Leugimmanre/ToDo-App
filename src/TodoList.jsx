import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

export const TodoList = ({ todos, toggleTodo, deleteTodo }) => {

    return (
    <ul className="list">
      {todos.length === 0 && "No todos"}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

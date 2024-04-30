import PropTypes from "prop-types";

const TodoItem = ({id, completed, title, toggleTodo, deleteTodo}) => {
  return (
    <li>
      <label htmlFor={`todo-${id}`}>
        <input
          type="checkbox"
          name={`todo-${id}`}
          id={`todo-${id}`}
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;

TodoItem.propTypes = {
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };
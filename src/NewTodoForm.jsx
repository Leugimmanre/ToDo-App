import { useState } from "react";
import PropTypes from 'prop-types';

export const NewTodoForm = ({handleTodo}) => {
  const [newItem, setNewItem] = useState("");

  const handleOnChange = ({ target }) => {
    setNewItem(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newItem.trim()) return;
    handleTodo(newItem)
    setNewItem("");
  };

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          type="text"
          name=""
          id="item"
          value={newItem}
          onChange={handleOnChange}
        />
      </div>
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
};


NewTodoForm.propTypes = {
    handleTodo: PropTypes.func.isRequired,
  }

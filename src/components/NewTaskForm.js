import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[1] || "");

  function handleSubmit(e) {
    e.preventDefault();
    if (text && category) {
      onTaskFormSubmit({ text, category });
      setText("");
      setCategory(categories[1] || "");
    }
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label htmlFor="details-input">
        Details
        <input
        id="details-input"
        type="text"
        placeholder="New task details"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      </label>
      <label>
        Category
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories
          .filter((cat) => cat !== "All")
          .map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
      </select>
      </label>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
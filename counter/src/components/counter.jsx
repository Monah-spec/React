import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const formCount = () => (count === 0 ? "Ноль" : count);
  const tags = ["tag1", "tag2", "tag3"];

  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };

  const renderTags = () => {
    if (tags.length === 0) return "Элементы не найдены";
    return tags.map((tag) => <li key={tag}>{tag}</li>);
  };

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => {
    if (count <= 0) return
    return setCount(count - 1)
  }
  return (
    <>
      {renderTags()}
      <span className={getBadgeClasses()}>{formCount()}</span>{" "}
      <button onClick={handleIncrement} className="btn btn-secondary btn-sm">
        Increment
      </button>
      <button onClick={handleDecrement} className = 'btn btn-secondary btn-sm'>Decrement</button>
    </>
  );
};

export default Counter;

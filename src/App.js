import React, { useState } from 'react';

export const App = () => {
  const [count, setCount] = useState(0);

  const onIncrementClick = () => {
    setCount(count + 1);
  }

  const onDecrementClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="container">
      <h1>code-next-react-counter</h1>

      <h2>https://stackblitz.com/edit/code-next-react-counter</h2>

      <hr />

      <div>
        <h1>Count: {count} </h1>

        <button onClick={onIncrementClick}>Increment</button>
        <button onClick={onDecrementClick}>Decrement</button>
      </div>
    </div>
  );
};

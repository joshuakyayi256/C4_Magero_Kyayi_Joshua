// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Counter = () => {
  // Define a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);
//   creetes two variables 

  // Event handler to update the count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>

      <p> INCREMENT : {count} </p>
      <button onClick={handleIncrement}>Increment</button>

    </div>
  );
};

export default Counter;

// Person.js

import React, { useState } from 'react';

const Person = ({ name, initialAge }) => {
    
  const [age, setAge] = useState(initialAge);

  const handleIncrementAge = () => {
    setAge(age + 1);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={handleIncrementAge}>Increment Age</button>
    </div>
  );
};

export default Person;


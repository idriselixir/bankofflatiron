import React, { useState, useEffect } from 'react';

function MyComponent(props) {
  const [count, setCount] = useState(0);
  
useEffect(() => {
    // this code will run on mount and whenever `count` changes
    document.title = `Count: ${count}`;
  }, [count]);
//This can help avoid unnecessary rendering and improve the code's readability.
  

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default MyComponent;
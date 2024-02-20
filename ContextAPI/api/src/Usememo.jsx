import React, { useState, useMemo } from 'react';

function Usememo() {
  const [count, setCount] = useState(0);

  // Use useMemo to memoize the result of doubling the count
  const doubledCount = useMemo(() => {
    console.log('Calculating doubled count...');
    return count * 2;
  }, [count]); // Dependency array - recompute only if 'count' changes

  return (
    <div>
      <p>Count: {count}</p>
      <p>Doubled Count: {doubledCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default Usememo;

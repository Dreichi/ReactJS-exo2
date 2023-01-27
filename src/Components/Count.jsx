
import React, { useState } from "react";

const Count = () => {
    const [count, setCount] = useState(0);
    
    return (
        <div>
        <p>Le compteur est à : {count} </p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <input type="number" onChange={(e) => setCount(parseInt(e.target.value))} />
        </div>
    );
    };

export default Count;
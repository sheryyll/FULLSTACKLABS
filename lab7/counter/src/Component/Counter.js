import React, {useState, useEffect} from 'react';

const Counter = () =>{
    const [count, setCount] = useState(0);

    useEffect(()=>{
        setCount(1);
    },[]);
    const increment = () => {setCount(count + 1)};
    const decrement = () =>{setCount(count - 1)};
    const double = () => {setCount(count * 2)};
    const reset = () => {setCount(0)};
    return(
        <div>
            <h1>Count: {count}</h1>
            <button style={{border:'2px solid black', padding:'2px', marginRight:'5px'}} onClick={increment}>Increment</button>
            <button style={{border:'2px solid black', padding:'2px', marginRight:'5px'}} onClick={decrement}>Decrement</button>
            <button style={{border:'2px solid black', padding:'2px', marginRight:'5px'}} onClick={double}>Double</button>
            <button style={{border:'2px solid black', padding:'2px', marginRight:'5px'}} onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter;

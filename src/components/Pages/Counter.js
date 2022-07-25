import React, { useEffect, useState } from 'react'

const Counter = () => {

    let [count, setCount] = useState(0)
    let [data, setData] = useState(100)

    // const [stateVariable, function] = useState(initial value)
    // stateVariable -> variable whose state is stored
    // function -> function to update state of state variable
    // initial value -> starting/initial value
    // ''  -> string
    // []  -> array
    // {}  -> object

    const increase_count = () => {
        setCount(++count)
    }

// useEffect(function, [statevariable])
// function -> effects to be seen
// [statevariable] -> variable which will trigger the function
// [] -> effect is seen only once while loading
// [var1,var2] -> effect is seen when var1 and var2 are updated
// <blank> -> effect is seen everytime when any state variable is updated


    useEffect(()=>{
        window.alert("count is updated")
    })


    return (
        <div>
            Count : {count}
            <br/>
            <button onClick={increase_count}>Increase Count</button>
            <button onClick={()=>{return setCount(++count)}}>Increase Count</button>
            <button onClick={()=>{return setCount(--count)}}>Decrease Count</button>
            <button onClick={()=>{return setCount(0)}}>Reset</button>

            <br/>
            Data : {data}
            <button onClick={()=>{return setData(data+10)}}>Increase Data</button>
            <button onClick={()=>{return setData(data-10)}}>Decrease Data</button>
            <button onClick={()=>{return setData(0)}}>Reset</button>

        </div>
    )
}

export default Counter
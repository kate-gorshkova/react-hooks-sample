import './App.css';
import React, { useEffect, useState } from 'react';

function useLogger(value) {
    useEffect(() => {
        console.log('Value changed:', value)
    }, [value])
}

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    const onChange = event => {
        setValue(event.target.value)
    }

    const clear = () => setValue('')

    return {
        bind: {value, onChange},
        value,
        clear
    }
}

function App() {
    //
    // const [name, setName] = useState('')
    // const [lastName, setLastName] = useState('')

    // const changeNameHandler = event => {
    //     setName(event.target.value)
    // }

    // const changeLastNameHandler = event => {
    //     setLastName(event.target.value)
    // }

    // useLogger(name)
    // useLogger(lastName)

    const input = useInput('')
    const input1 = useInput('')

    useLogger(input.value)
    useLogger(input1.value)

    return (
        <div className={'container pt-3'}>
            {/* <input type='text' value={name} onChange={changeNameHandler}/>
            <input type='text' value={lastName} onChange={changeLastNameHandler}/> */}
            <input type='text' {...input.bind}/>
            <input type='text' {...input1.bind}/>
            <button className='btn btn-warning' onClick={() => (input.clear(), input1.clear())}>Очистить</button>

            <h1>{input.value} {input1.value}</h1>
        </div>
  )
}

export default App;

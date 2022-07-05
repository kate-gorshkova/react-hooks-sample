import './App.css';
import React, {useState, useEffect, useRef} from 'react';


function App() {
    const [value, setValue] = useState('')
    const renderCount = useRef(1)
    const inputRef = useRef(null)
    const prevValue = useRef('')

    useEffect(() => {
        prevValue.current = value
    }, [value])

    useEffect(() => {
        renderCount.current++
    })

    const fSetValue = (e) => {
        setValue(e.target.value)
    }

    const focus = () => inputRef.current.focus()

    return (
    <div>
        <h1>Кол-во рендеров: {renderCount.current}</h1>
        <h2>Предыдущее состояние: {prevValue.current}</h2>
        <input ref={inputRef} type="text" value={value} onChange={fSetValue}/>
        <button className='btn btn-success' onClick={focus}>FOCUS</button>
    </div>
  );
}

export default App;

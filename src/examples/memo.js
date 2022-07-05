import './App.css';
import React, {useState, useMemo, useEffect} from 'react';


function complexComputed(num) {
    let i = 0
    while (i < 1000000000) i++
    return num * 2
}

function App() {
    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)

    const styles = useMemo(() => ({
        color: colored ? 'teal' : 'black'
    }), [colored])

    const computed = useMemo(() => {
        return complexComputed(number)
    }, [number])

    useEffect(() => {
        console.log('styles changed')
    }, [styles])

    return (
    <div>
        <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
        <button className='btn btn-success' onClick={() => setNumber(prev => prev + 1)} style={{marginRight: '10px'}}>Добавить</button>
        <button className='btn btn-danger' onClick={() => setNumber(prev => prev - 1)} style={{marginRight: '10px'}}>Удалить</button>
        <button className='btn btn-warning' onClick={() => setColored(prev => !prev)}>Изменить</button>
    </div>
  );
}

export default App;

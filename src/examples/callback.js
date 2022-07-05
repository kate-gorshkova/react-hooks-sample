import './App.css';
import React, {useCallback, useState} from 'react';
import ItemsList from './ItemsList';


function App() {
    const [colored, setColored] = useState(false)
    const [count, setCount] = useState(1)

    const styles = {
        color: colored ? 'teal' : 'black'
    }

    const generateItemsFromAPI = useCallback(() => {
        return new Array(count).fill('').map((_, i) => `Элемент ${i + 1}`)
    }, [count])

    return (
    <div>
        <h1 style={styles}>Кол-во элементов: {count}</h1>
        <button className='btn btn-success' onClick={() => setCount(prev => prev + 1)} style={{marginRight: '10px'}}>Добавить</button>
        <button className='btn btn-warning' onClick={() => setColored(prev => !prev)}>Изменить</button>

        <ItemsList getItems={generateItemsFromAPI} />
    </div>
  );
}

export default App;

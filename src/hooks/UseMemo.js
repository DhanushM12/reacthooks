import React, {useState, useMemo } from 'react'

function UseMemo() {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false);

    const doubleNumber = useMemo(() => {
        return slowNumber(number);
    }, [number])
    const themeStyles = {
        backgroundColor: dark ? '#333' : '#ccc',
        color: dark ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
  return (
    <div>
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
        <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
        <div style={themeStyles}>{doubleNumber}</div>
    </div>
  )
}


function slowNumber(num){
    for(let i=0;i<100000000;i++){}
    return num*2;
}
export default UseMemo
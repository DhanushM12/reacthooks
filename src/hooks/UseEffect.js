import React, {useState, useEffect} from 'react'

function UseEffect() {
    const [resource, setResource] = useState('');
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
        .then(res => res.json())
        .then(json => setItems(json))
    }, [resource])
  return (
    <div>
        <div>
            <button onClick={() => setResource('posts')}>Posts</button>
            <button onClick={() => setResource('users')}>Users</button>
            <button onClick={() => setResource('comments')}>Comments</button>
        </div>
        <div>
            <h1>
                {resource}
            </h1>
            {items.map(item => {
                return <pre>{JSON.stringify(item)}</pre>
            })}
        </div>
    </div>
  )
}

export default UseEffect
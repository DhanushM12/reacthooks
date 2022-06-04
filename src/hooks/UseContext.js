import React, {useState} from 'react'
import ClassContext from '../components/ClassContext';
import FunctionContext from '../components/FunctionContext';

export const ThemeContext = React.createContext();
function UseContext() {
    const [darkTheme, setDarkTheme] = useState(true);
    function toggleTheme(){
        setDarkTheme(prevDark => !prevDark)
    }
    return (
        <div>
            <ThemeContext.Provider value={darkTheme}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <ClassContext />
            <FunctionContext />
            </ThemeContext.Provider>
        </div>
    )
}

export default UseContext;
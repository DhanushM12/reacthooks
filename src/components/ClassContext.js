import React, { Component } from 'react';
import { ThemeContext } from '../hooks/UseContext';

class ClassContext extends Component {
    themeDark(dark) {
        return {
            backgroundColor: dark ? '#333' : '#ccc',
            color: dark ? '#ccc' : '#333',
            padding: '2rem',
            margin: '2rem'
        }
    }
    render() {
        return (
            <div>
                <ThemeContext.Consumer>
                    {darkTheme => {
                        return <div style={this.themeDark(darkTheme)}>Class Theme</div>
                    }}
                </ThemeContext.Consumer>
            </div>
        );
    }
}

export default ClassContext;
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Zegar from './components/zegar';
import Pojedynczy from './components/pojedynczy';


class App extends React.Component {
    render() {
        return (
            <div>

                <div><Zegar /></div>
                <div><Pojedynczy /></div>
            </div>);
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));


import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import './client';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>Edit <code>src/App.js</code> and save to reload.</p>
                    <Button bsStyle="primary">Sign in with Steam</Button>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
            </div>
        );
    }

    componentDidMount() {
        client({

        });
    }
}

export default App;

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    state = {};

    componentDidMount() {
       fetch('/api');
    }

    login = () => {
      fetch('/api/login').then(url => {
         this.setState({steamLoginUrl: url});
      });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">{this.state.message}</h1>
                </header>
            </div>
        );
    }
}

export default App;

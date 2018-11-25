import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import LoginViaSteamButton from "./components/LoginViaSteamButton";

class ProjectOmegaApplication extends Component {

    state = {};

    componentDidMount() {

    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">{this.state.message}</h1>
                    <LoginViaSteamButton/>
                </header>
            </div>
        );
    }
}

export default ProjectOmegaApplication;

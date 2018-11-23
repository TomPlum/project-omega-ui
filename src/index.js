import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import SteamRouter from "./SteamRouter";

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<SteamRouter/>, document.getElementById('steam-router'));
registerServiceWorker();

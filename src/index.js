import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './LoginViaSteamButton.css';
import ProjectOmegaApplication from './ProjectOmegaApplication';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ProjectOmegaApplication />, document.getElementById('root'));
registerServiceWorker();

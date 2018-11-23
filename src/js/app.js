'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

class App extends React.Component {
	componentDidMount() {
	    this.login();
	}

	login() {
	    const self = this;
	    $.ajax({
            url: "http://localhost:8080/api/login"
        }).then(response => {
            self.setState({
                loginResponse: response
            });
        });
    }

    getInitialState() {
	    return {loggedIn: false}
    }

	render() {

	}
}

ReactDOM.render(<App />, document.getElementById('react'));
import React from 'react';

export default class LoginViaSteamButton extends React.Component {
    state = {
        steamRedirectUrl: null
    };

    componentDidMount() {
        fetch('http://localhost:8080/api/steam/login', {method: 'get'})
        .then(response => {
            console.log(response);
            if (!response.ok) throw Error(response.statusText);
            this._asyncRequest = null;
            this.setState({steamRedirectUrl: response.url.toString()});
        })
        .catch(error => {
            console.log(error);
        });
    }

    componentWillUnmount() {
        if (this._asyncRequest) {
            this._asyncRequest.cancel();
        }
    }

    render() {
        return <a href={this.state.steamRedirectUrl} target='_blank' rel="noopener noreferrer">
            <i className="steam-group-icon"/>
            <span className="steam-group-label">Login via Steam</span>
        </a>;
    }
}
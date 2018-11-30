import React from 'react';
import * as qs from 'query-string';

export default class LoginViaSteamButton extends React.Component {
    state = {
        steamRedirectUrl: null
    };

    componentDidMount() {
        const url = qs.parse(window.location.search);
        console.log(url);
        this.fetchSteamOpenIdUrl();
    }

    fetchSteamOpenIdUrl() {
        fetch('http://localhost:8080/api/steam/login', {method: 'get'})
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (!response.valid) throw Error(response.statusText);
                this._asyncRequest = null;
                this.setState({steamRedirectUrl: response.value.toString()});
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
        return <a href={this.state.steamRedirectUrl} target='_blank' rel="noopener noreferrer" className="steam-group-button">
            <i className="steam-group-icon"/>
            <span className="steam-group-label">Login via Steam</span>
        </a>;
    }
}
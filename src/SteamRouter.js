import React from 'react';
import { Redirect } from 'react-router-dom';

export default class SteamRouter extends React.Component {
    constructor(props) {
        super(props);
        this.getSteamRedirectUrl();
    }

    state = {
        redirect: false,
        url: ''
    };

    setRedirect = () => {
        this.setState({
            redirect: true
        });
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={this.state.url} />
        }
    };

    getSteamRedirectUrl = () => {
        fetch('/api/login')
            .then(response => {
                this.setState({ url: response.toString() });
            });
    };

    render () {
        return (
            <div>
                {this.renderRedirect()}
                <button onClick={this.setRedirect}>Redirect</button>
            </div>
        )
    };
}
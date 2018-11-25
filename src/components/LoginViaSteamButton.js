import React from 'react';
import {BrowserRouter, Link} from "react-router-dom";

export default class LoginViaSteamButton extends React.Component {
    render() {
        /*return <BrowserRouter>
            <Link to="route" target="_blank" onClick={(event) => {event.preventDefault(); window.open(this.getSteamRedirectUrl)}} />
        </BrowserRouter>;*/
        return <a href={this.getSteamRedirectUrl()} target='_blank' rel="noopener noreferrer">Login via Steam </a>;
    }

    getSteamRedirectUrl = () => {
        fetch('http://localhost:8080/api/steam/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials' : 'true',
                "Access-Control-Allow-Origin" : 'http://localhost:8080/api/login',
            },
            mode: 'cors',
            body: {
                openIdUrl: 'https://steamcommunity.com/openid'
            }
        })
        .then(response => {
            console.log(response);
            if (!response.ok) throw Error(response.statusText);
            return response;
        })
        .catch(error => {
            console.log(error);
        });
    };
}
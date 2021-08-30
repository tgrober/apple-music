import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import logo from '../logo.svg'
import Header from '../components/Header'
import RunApp from '../components/RunApp'
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


class AppRouter extends React.Component {
  constructor(props) {
        super(props);
        this.state = {isLogin: false, genres:[], albums:[]};
        this.musicInstance = this.props.musicInstance;
        //this.signIn();
       // this.setupAlbumsProvider(this.musicInstance);
        //this.setupPlaylistsProvider(this.musicInstance);
    }
    componentWillMount() {
        if(this.musicInstance.isAuthorized) {
            this.setState({isLogin: true});
        }
    }

  render() {

    return (
      <div className="App">
        <Header />
          <img src={logo} className="App-logo" alt="logo" />
          <RunApp />
          <button id="apple-music-authorize">Authorize Apple Music</button>
          <Button variant="info" type="submit">
            Search App
          </Button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        
      </div>
    );
  }
}

export default AppRouter;

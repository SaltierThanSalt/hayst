import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import myprof from './img/whatttt.png';
import Modal from './containers/Modal';
import NavTabs from './containers/NavTabs';
import Header from './containers/Header';
import what from './img/whatttt.png';
import Home from './containers/Home';
import SocialMedia from './containers/SocialMedia';
import RecentUploads from './containers/RecentUploads';

import {Route, Switch} from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      modalOn: false
    }
  }
  render() {
    const {modalOn} = this.state
    return (
      <div
        style={{
        }}
      >
      <div 
        style={{ 
          borderTop: '10px solid #474647'                   
        }}
      >
      <div>                                                        
        <div
          className="App"
          style={{
            backgroundImage: `url(${what})`,
            backgroundColor: 'black', height: '80',
            backgroundSize: '8%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
          }}
        >
        </div>
          {modalOn && <Modal onHide={() => this.setState({modalOn: false})} />}
          <div className="btn btn-default" onClick={() => this.setState({modalOn: true})}> ⬆ Updates</div>
      <div>
      </div>
      </div>
          <NavTabs />
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/socialmedia" component={SocialMedia} />
            <Route path="/uploads" component={RecentUploads} />
          </Switch>
      </div>
      </div>
    );
  }
}

export default App;

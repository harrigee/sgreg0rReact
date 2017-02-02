import React from 'react';
import Header from './Header';
import Chuck from './Chuck';
import Bears from './Bears';
import Footer from './Footer';

import { Router, Route, hashHistory } from 'react-router'

var Menu = require('react-burger-menu').elastic;

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.closeMenu = this.closeMenu.bind(this);
    this.state = {
      cheers: 0,
      menuIsOpen: false,
      creator: "Stefan Gregor",
      title: "\"I can not bear it.\" - Winnie Pooh",
      menuItems: ['BEARS', 'CHUCK'],
      menuRoutes: ['#/bears', '#/chuck']
    };
  }

  closeMenu() {
    this.setState({ menuIsOpen:false });
  }

  incrementCheers = () => {
    let {cheers} = this.state;
    this.setState({
      cheers: cheers + 1
    });
  }

  render() {
    let {menuItems} = this.state;
    let {menuRoutes} = this.state;
    return (
      <div className="App" id="outer-container">
        <Menu isOpen={ this.state.menuIsOpen } left pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
          { menuItems.map(function(menuItem, i){
            return <a onClick={ this.closeMenu } className="menu-item" key={menuItems} id="test" href={ menuRoutes[i] }>{ menuItem }</a>;
          }, this) }
        </Menu>
      <div id="page-wrap">
        <Header incrementCheers={ this.incrementCheers } title={ this.state.title }/>
        <Router history={ hashHistory }>
          <Route path='/chuck' component={() => ( <Chuck/> )} />
          <Route path='/bears' component={() => ( <Bears cheers={ this.state.cheers }/> )} />
        </Router>
      </div>
        <Footer creator={ this.state.creator }/>
      </div>
    );
  }
}

export default App;

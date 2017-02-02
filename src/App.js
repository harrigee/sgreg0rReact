import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
var Menu = require('react-burger-menu').elastic;
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cheers: 0,
      creator: "Stefan Gregor",
      title: "\"I can not bear it.\" - Winnie Pooh",
      menuItems: ['CHUCK', 'BEARS', 'NOTHING']
    };
  }

  incrementCheers = () => {
    let {cheers} = this.state;
    this.setState({
      cheers: cheers + 1
    });
  }

  render() {
    return (
      <div className="App" id="outer-container">
        <Menu left pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
          {this.state.menuItems.map(function(menuItem, i){
            return <a className="menu-item" href="/">{menuItem}</a>;
          })}
        </Menu>
      <div id="page-wrap">
        <Header incrementCheers={this.incrementCheers} title={this.state.title}/>
        <Content cheers={this.state.cheers}/>
      </div>
        <Footer creator={this.state.creator}/>
      </div>
    );
  }
}

export default App;

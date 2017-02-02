import React from 'react';
import logo from './assets/bear.png';

class Header extends React.Component {

  render() {
    let {incrementCheers} = this.props;
    return (
      <div className="Header">
        <img src={logo} onClick={() => {incrementCheers()}} className="Header-Logo" alt="logo" />
        <div className="Title">{this.props.title}</div>
      </div>
    );
  }
}

export default Header;

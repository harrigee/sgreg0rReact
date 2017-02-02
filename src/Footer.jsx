import React from 'react';
import twitterImage from './assets/twitter.png';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <a target="blank" href="https://twitter.com/boongame">
          <div className="Footer-image">
            <img className="Footer-logo" src={twitterImage} alt="footer"></img>
          </div>
        </a>
           @ {this.props.creator} 2017
      </div>
    );
  }
}

export default Footer;

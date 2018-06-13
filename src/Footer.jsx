import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div className="FooterRow">
          <div className="FooterColumn">
            <a target="blank" href="https://twitter.com/sgreg0r">
              <div className="Footer-image">
                <img className="Footer-logo" src={require('./assets/twitter_logo.svg')} alt="footer"></img>
              </div>
            </a>
          </div>
          <div className="FooterColumn">
            <a target="blank" href="https://www.instagram.com/sgreg0r/">
              <div className="Footer-image">
                <img className="Footer-logo" src={require('./assets/instagram_logo.svg')} alt="footer"></img>
              </div>
            </a>
          </div>
          <div className="FooterColumn">
            <a target="blank" href="https://www.youtube.com/rogfan">
              <div className="Footer-image">
                <img className="Footer-logo" src={require('./assets/youtube_logo.svg')} alt="footer"></img>
              </div>
            </a>
          </div>
          <div className="FooterColumn">
            <a target="blank" href="https://github.com/harrigee">
              <div className="Footer-image">
                <img className="Footer-logo" src={require('./assets/github_logo.svg')} alt="footer"></img>
              </div>
            </a>
          </div>
          <div className="FooterColumn">
            <a target="blank" href="https://www.linkedin.com/in/stefan-gregor/">
              <div className="Footer-image">
                <img className="Footer-logo" src={require('./assets/linkedin_logo.svg')} alt="footer"></img>
              </div>
            </a>
          </div>
        </div>
        @ {this.props.creator} 2018
      </div>
    );
  }
}

export default Footer;

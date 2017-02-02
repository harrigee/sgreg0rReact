import React from 'react';
import pedoBear from './assets/bearIcon.png';


class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cheersLiterals: ["no", "one", "two", "three", "a lot of", "way too many", "okay now there are seriously and honestly way too many", "overload of"],
      quote: "",
      instagramPictures: []
    };
  }

  componentWillMount () {
    this.getQuote();
  }

  getQuote = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({quote:responseJson.value});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  bear = () => {
    const children = [];
    for (var i = 0; i < this.props.cheers; i += 1) {
        children.push(<img className="PedoBear" src={pedoBear} alt="bear"/>);
    };
    return children
  }

  render() {
    return (
      <div>
        <div>
          {this.bear()}
        </div>
        <div className="Content">
          {this.state.cheersLiterals[Math.min(this.props.cheers,this.state.cheersLiterals.length-1)]} {this.props.cheers === 1 ? 'bear' : 'bears'} my friend... But {this.state.quote}
        </div>
      </div>
    );
  }
}

export default Content;

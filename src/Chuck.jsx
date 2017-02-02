import React from 'react';

class Chuck extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quote: ""
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

  render() {
    return (
      <div>
        <div className="Content">
          {this.state.quote}
        </div>
      </div>
    );
  }
}

export default Chuck;

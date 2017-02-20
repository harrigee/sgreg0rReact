import React from 'react';
import ActivityIndicator from 'react-activity-indicator'

class Chuck extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      loading: true
    };
  }

  componentWillMount () {
    this.getQuote();
  }

  getQuote = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({quote:responseJson.value, loading: false});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        { this.state.loading ? <div>
          <ActivityIndicator
            id = "activityIndicator"
            number={3}
            diameter={32}
            borderWidth={1}
            duration={100}
            activeColor="#ffffff"
            borderColor="white"
            borderWidth={5}
            borderRadius="50%"/>
        </div> : null }
        <div className="Content">
          {this.state.quote}
        </div>
      </div>
    );
  }
}

export default Chuck;

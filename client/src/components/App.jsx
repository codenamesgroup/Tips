import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      business: [],
      tips: [{}]
    };
  }

  componentDidMount() {
    axios
      .get("/tips")
      .then(response => {
        console.log(response.data, "this is response from axios get");
        this.setState({
          tips: response.data
        });
      })
      .catch(error => {
        console.log(error, "this is error from axios get");
      });
  }

  render() {
    return (
      <div>
        <h1 className="header">Ask The Community</h1>
        <p className="default_none">
          Yelp users haven’t asked any questions yet about{" "}
          {this.state.tips[0].name}
        </p>
        <span className="ask_button">Ask a Question</span>
      </div>
    );
  }
}

export default App;

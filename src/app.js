import React from "react";
import "./app.scss";

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from "./components/header";
import Footer from "./components/footer";
import Form from "./components/form";
import Results from "./components/results";
import axios from "axios"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      requestParams: {}
    };
  }

  callApi = async (requestParams, requestBody) => {
    if (requestParams.method === "GET" ){
      let data = await axios.get(requestParams.url)
      this.setState({ data: data.data, requestParams });
    }else {
      this.setState({
        data:  { message: 'lodaing' }
      })
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="requst">
          Request Method: {this.state.requestParams.method}
        </div>
        <div className="url">URL: {this.state.requestParams.url}</div>
        <Form handleApiCall={this.callApi} />
        <Results data={this.state.data} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

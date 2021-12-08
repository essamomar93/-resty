import "./app.scss";
import React, { useState, useReducer } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Form from "./components/form";
import Results from "./components/results";
import axios from "axios"
import History from "./components/history/history"
let initialhistory = [];

function historyReducer(history = initialhistory, action) {
  let { type, payload } = action
  switch (type) {
    case 'history':
      history = [...history, payload]
      return history;
    default:
      return history;
  };
};
function addToHistory(url, method, results) {
  return { type: 'history', payload: { url, method, results } }
};

function App() {
  let [data, setData] = useState(null);
  let [requestParams, setrequestParams] = useState({});
  let [history, addHistory] = useReducer(historyReducer, initialhistory)

  const callApi = async (requestParams, requestBody) => {
    setrequestParams(requestParams)
    setData(null);
    if (requestParams.method === "GET") {
      let data = await axios.get(requestParams.url)
      setData({ data: data.data });
    } else {
      setData({
        data: { message: 'lodaing' }
      })
    }
    addHistory(addToHistory(requestParams.url, requestParams.method, data))
  };


  return (
    <React.Fragment>
      <Header />
      <div className="requst">
        Request Method: {requestParams.method}
      </div>
      <div className="url">URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
       <History history={history}  />  
      <Footer />
    </React.Fragment>
  );

}

export default App;

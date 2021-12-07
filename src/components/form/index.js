import React, { useState ,useEffect} from "react";

import "./form.scss";
export default function Form(myProps) {
  const [methods, setMethods] = useState(0);
  const [Url, setUrl] = useState(0);
  const [showTextArea, setShowArea] = useState("");
  let [requestBody, setrequestBody] = useState("");

  const handelPost = (e) => {
    e.preventDefault();
    setShowArea(!showTextArea);
    setMethods(e.target.value);
  };
  const getPost = (e) => {
    e.preventDefault();
    setrequestBody(e.target.value);
  };
  const handleMethod = (e) => {
    e.preventDefault();
    setMethods(e.target.value);
  };
  const handleUrl = (e) => {
    e.preventDefault();
    setUrl(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    requestBody;
    const getData = {
      method: methods,
      url: Url
    };

    myProps.handleApiCall(getData,requestBody);
  };

  useEffect(() => {
    console.log('The name has been changed!');
  }, [requestBody]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="go">
          <span>URL: </span>
          <input name="url" type="text" onChange={handleUrl} />
          <button type="submit">GO!</button>
        </div>
        <div className="methods">
          <button value="GET" onClick={handleMethod}>
            GET
          </button>
          <button value="POST" onClick={handelPost}>
            POST
          </button>
          <button value="PUT" onClick={handelPost}>
            PUT
          </button>
          <button value="DELETE" onClick={handleMethod}>
            DELETE
          </button>
        </div>
        
        <input className="text" name="url" type="text" onChange={getPost} />
      </form>
    </>
  );
}

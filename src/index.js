import React, { Component } from "react";
import ReactDOM from "react-dom";
import CSVReader from "react-csv-reader";

const handleForce = data => {
  let csv = data;
  console.log(csv);
};

const reader = (
  <div className="container">
    <CSVReader
      cssClass="react-csv-input"
      label="Select CSV with secret Death Star statistics"
      onFileLoaded={handleForce}
    />
    <p>and then open the console</p>
  </div>
);

ReactDOM.render(reader, document.getElementById("root"));

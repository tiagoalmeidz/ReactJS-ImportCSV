import React from "react";
import ReactDOM from "react-dom";
import CSVReader from "react-csv-reader";

const handleFile = data => console.log(data);

const reader = (
  <div className="container">
    <CSVReader
      cssClass="react-csv-input"
      label="Selecione um arquivo CSV:"
      onFileLoaded={handleFile}
    />
    <p>and then open the console</p>
  </div>
);

ReactDOM.render(reader, document.getElementById("root"));

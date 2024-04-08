import React from "react";
import ReactDOM from "react-dom/client";

//Using React
// const heading = React.createElement("h1", {id:"heading"}, "This is React!");
// console.log(heading);

//Using JSX
const jsxHeading = (
  <h1 id="jsxHeading" className="heading">
    This is React 🚀
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

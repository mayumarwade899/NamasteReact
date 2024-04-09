import React from "react";
import ReactDOM from "react-dom/client";

// Using React
// const heading = React.createElement("h1", {id:"heading"}, "This is React!");
// console.log(heading);

// Using JSX React Element
const jsxHeading = (
  <h1 id="jsxHeading" className="head">
    This is React 🚀
  </h1>
);

// React Functional Component
// Normal function
const Heading1 = function () {
  return (
    <h1 className="heading">Hello from Functional Component(Heading1)</h1>
 );
};

// Component Composition
const Heading2 = () => (
  <div id="container">
    {/* <Heading1 /> */}
    <h1 className="heading">Hello from Functional Component(Heading2)</h1>
  </div>
);

const number = 10000;

// Adding JS Element/Variable
const Heading3 = () => (
  <div id="container">
    {/* {number} */}
    {/* <h2>{number}</h2> */}
    {/* {jsxHeading} */}
    {/* <Heading1 /> */}
    {Heading1()}
    <h1>{100 + 200}</h1>
    <h1 className="heading">Hello from Functional Component(Heading2)</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<Heading3 />);

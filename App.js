import React from "react"
import ReactDOM from "react-dom/client"

//Nested structure in HTML
{/* <div id="parent">
    <div id="child">
        <h1>This is an H1 Tag</h1>
        <h2>This is an H2 Tag</h2>
    </div>
    <div id="child">
        <h1>This is an H1 Tag</h1>
        <h2>This is an H2 Tag</h2>
    </div>
</div> */}

//Nested structure in React
const parent = 
React.createElement("div", {id:"parent"}, 
    [
        React.createElement("div", {id:"child"}, [
            React.createElement("h1", {}, "This is a H1 tag!!!"),
            React.createElement("h2", {}, "This is a H2 tag!!!")
        ]),
        React.createElement("div", {id:"child"}, [
            React.createElement("h1", {}, "This is a H1 tag!!!"),
            React.createElement("h2", {}, "This is a H2 tag!!!")
        ])
    ]
)

//This is an object (React Element)
// const heading = React.createElement(
//     "h1", 
//     {id: "heading", xyz: "abc"}, 
//     "Hey there!, hello from react"
// );

console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
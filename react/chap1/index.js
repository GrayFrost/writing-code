import React from "./react";
import ReactDOM from "./react-dom";

const element = (
    <h1
        style="color: orange;"
        onClick={() => {
            console.log("hello world");
        }}
    >
        hello
    </h1>
);

ReactDOM.render(element, document.querySelector("#root"));

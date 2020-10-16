import React from "./react";
import ReactDOM from "./react-dom";

class Welcome extends React.Component {
    render() {
        return (
            <h1
                style="color: orange;"
                onClick={() => {
                    console.log("hello world");
                }}
            >
                hello world
            </h1>
        );
    }
}

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
        };
    }

    componentWillUpdate() {
        console.log("update");
    }

    componentWillMount() {
        console.log("mount");
    }

    onClick() {
        this.setState({ num: this.state.num + 1 });
    }

    render() {
        return (
            <div onClick={() => this.onClick()}>
                <h1>number: {this.state.num}</h1>
                <button>add</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.querySelector("#root"));

import * as React from "react"
import * as ReactDOM from "react-dom"

const App = () => {
    return (
        <div>
            <p>Hello world!</p>
        </div>
    );
};

if(typeof document !== "undefined")
    ReactDOM.render(<App/>, document.getElementById('app'));


import * as React from "react"
import * as ReactDOM from "react-dom"

const App = () => {
    return (
        <div>
            <p>Hello world from steve!</p>
        </div>
    );
};

if(typeof document !== "undefined")
    ReactDOM.render(<App/>, document.getElementById('app'));


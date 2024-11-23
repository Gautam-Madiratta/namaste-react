const object = React.createElement(
    "div",
    { id: "parent" }, [
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1", {}, "This is H1 Tag"),
        React.createElement("h2", {}, "This is H2 Tag")] //this is how you create a sibling
    ),
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1", {}, "This is H1 Tag"),
        React.createElement("h2", {}, "This is H2 Tag")]
    )])

//it becomes very difficult to manage and its untidy to maintain    

const object1 = React.createElement("h1", { id: "text" }, "Hello from react");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(object);

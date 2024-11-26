import React from "react";
import ReactDOM from "react-dom/client";

// React element
const object1 = React.createElement("h1", { id: "text" }, "Hello from react");

//React Component
const HeadingComponent = () => {
  return <h1>Hello From component</h1>;
};

//converting
const HeadingComponent1 = <h1>Hello From component</h1>;

// React Component Composition
const AnotherComponent = () => {
  return (
    <div>
      <HeadingComponent></HeadingComponent>
      <h1>Hello From another Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AnotherComponent />);

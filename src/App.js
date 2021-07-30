import React from "React";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me  !"),
    React.createElement(Pet, { name: "luna", animal: "dog?", bread: "havana" }),
    React.createElement(Pet, {
      name: "Brayn",
      animal: "cat",
      bread: "peigion",
    }),
    React.createElement(Pet, { name: "Sudo", animal: "dog", bread: "wheten " })
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

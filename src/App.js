import React from "react";
import ReactDOM from "react-dom";

import SearchParams from "./SearchParams";

const App = () => {
	return (
		<div>
			<h1>Adopte me</h1>
			<SearchParams />
		</div>
	);
};
ReactDOM.render(<App />, document.getElementById("root"));

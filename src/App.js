import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";

const App = () => {
	const theme = useState("darkblue");
	return (
		<ThemeContext.Provider value={theme}>
			<div>
				<Router>
					<header>
						<Link to="/">
							<h1>Adopte me</h1>
						</Link>
					</header>
					<Switch>
						<Route path="/details/:id" component={Details} />
						<Route path="/" component={SearchParams} />
					</Switch>
				</Router>
			</div>
		</ThemeContext.Provider>
	);
};
ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById("root")
);

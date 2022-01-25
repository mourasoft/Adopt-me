import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}
	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		console.log("error boundry ", error, info);
	}
	render() {
		if (this.setState.hasError) {
			return (
				<h2>
					Something went wrong .<Link to="/">Clock Here</Link> to go backto the
					ome page
				</h2>
			);
		} else {
			return this.props.children;
		}
	}
}

export default ErrorBoundary;

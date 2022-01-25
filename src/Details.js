import { Component } from "react";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

class Details extends Component {
	// state
	constructor(props) {
		super(props);
		this.state = { loading: true, pet: {} };
	}
	async componentDidMount() {
		const res = await fetch(
			`http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
		);
		const pet = await res.json();
		// console.log(pet);
		this.setState({ pet: { ...pet.pets[0] }, loading: false });
	}
	render() {
		if (this.state.loading) {
			return <h2>loading</h2>;
		}
		const { name, animal, breed, city, state, description, images } =
			this.state.pet;

		return (
			<div className="details">
				<Carousel images={images} />
				<div>
					<h1>{name}</h1>
					<h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
					<p>{description}</p>
					<ThemeContext.Consumer>
						{([theme]) => {
							return (
								<button style={{ backgroundColor: theme }}>Adopt {name}</button>
							);
						}}
					</ThemeContext.Consumer>
				</div>
			</div>
		);
	}
}

export default Details;

import { Component } from "react";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";
import ThemeContext from "./ThemeContext";

class Details extends Component {
	// state
	constructor(props) {
		super(props);
		this.state = { loading: true, pet: {}, showModal: false };
	}
	async componentDidMount() {
		const res = await fetch(
			`http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
		);
		const pet = await res.json();
		this.setState({ pet: { ...pet.pets[0] }, loading: false });
	}

	toggleModal = () => {
		this.setState({ showModal: !this.state.showModal });
	};

	adopt = () => (window.location = "http://bit.ly/pet-adopt");
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
					{this.state.showModal ? (
						<Modal>
							<div>
								<h1>Would you like to adopt {name}?</h1>
								<button onClick={this.adopt}>Yes!</button>
								<button onClick={this.toggleModal}>No</button>
							</div>
						</Modal>
					) : null}
					<ThemeContext.Consumer>
						{([theme]) => {
							return (
								<button
									onClick={this.toggleModal}
									style={{ backgroundColor: theme }}
								>
									Adopt {name}
								</button>
							);
						}}
					</ThemeContext.Consumer>
				</div>
			</div>
		);
	}
}

export default Details;

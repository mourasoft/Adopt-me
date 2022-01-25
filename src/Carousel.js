import { Component } from "react";

class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: 0,
		};
	}
	static defaultProps = {
		images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
	};

	render() {
		const { active } = this.state;
		const { images } = this.props;
		return (
			<div className="carousel">
				<img src={images[active]} alt="animal" />
				<div className="carousel-smaller">
					{images.map((image, index) => (
						<img
                            onClick={()=>{this.setState({active:index})}}
							key={image}
							src={image}
							className={index === active ? "active" : ""}
							alt="animalth"
						/>
					))}
				</div>
			</div>
		);
	}
}

export default Carousel;

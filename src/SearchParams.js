import React, { useState, useEffect } from "react";
import Results from "./Results";

import useBreedList from "./useBreedList";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
	const [location, setLocation] = useState("");
	const [animal, setAnimal] = useState("");
	const [breed, setBreed] = useState("");
	const [pets, setPets] = useState([]);
	const [breeds] = useBreedList(animal);

	useEffect(() => {
		requestPets();
	}, []); //eslint-disable-line

	async function requestPets() {
		const res = await fetch(
			`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
		);
		const json = await res.json();

		console.log(json);

		setPets(json.pets);
	}

	const handleSubmit = (e) => {
		// predefined function
		e.preventDefault();
		requestPets();
	};

	const handlechange = (e) => {
		setLocation(e.target.value);
	};
	return (
		<div className="search-params">
			<form onSubmit={handleSubmit}>
				<label htmlFor="location">
					Location
					<input
						id="location"
						onChange={handlechange}
						value={location}
						placeholder="location"
					/>
				</label>
				<label htmlFor="animal">
					animal
					<select
						id="animal"
						value={animal}
						onChange={(e) => setAnimal(e.target.value)}
						onBlur={(e) => setAnimal(e.target.value)}
					>
						<option />
						{ANIMALS.map((animal) => (
							<option key={animal} value={animal}>
								{animal}
							</option>
						))}
					</select>
				</label>

				<label htmlFor="breed">
					breed
					<select
						id="breed"
						value={breed}
						onChange={(e) => setBreed(e.target.value)}
						onBlur={(e) => setBreed(e.target.value)}
					>
						<option />
						{breeds.map((breed) => (
							<option key={breed} value={breed}>
								{breed}
							</option>
						))}
					</select>
				</label>
				<button>Submit</button>
			</form>
			<Results pets={pets} />
		</div>
	);
};

export default SearchParams;

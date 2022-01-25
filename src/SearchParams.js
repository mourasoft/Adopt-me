import React, { useState, useEffect, useContext } from "react";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

import useBreedList from "./useBreedList";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
	const [location, setLocation] = useState("");
	const [animal, setAnimal] = useState("");
	const [breed, setBreed] = useState("");
	const [pets, setPets] = useState([]);
	const [breeds] = useBreedList(animal);
	const [theme, setTheme] = useContext(ThemeContext);

	console.log(theme);

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
				<label htmlFor="theme">
					<select
						value={theme}
						onChange={(e) => setTheme(e.target.value)}
						onBlur={(e) => setTheme(e.target.value)}
					>
						Theme
						<option value="peru">Peru</option>
						<option value="darkblue">Dark Blue</option>
						<option value="chartreuse">Chartreuse</option>
						<option value="mediumorchid">Medium Orchid</option>
					</select>
				</label>
				<button style={{ backgroundColor: theme }}>Submit</button>
			</form>
			<Results pets={pets} />
		</div>
	);
};

export default SearchParams;

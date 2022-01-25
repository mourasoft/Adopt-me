import React, { useState, useEffect } from "react";
import Pet from "./pet";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
	const [location, setLocation] = useState("");
	const [animal, setAnimal] = useState("");
	const [breed, setBreed] = useState("");
	const [pets, setPets] = useState([]);
	const breeds = [];

	useEffect(() => {
		requestPets();
	
	},[]);//eslint-disable-line 

	async function requestPets() {
		const res = await fetch(
			`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
		);
		const json = await res.json();

		console.log(json);
		
		setPets(json.pets);
	}

	const handlechange = (e) => {
		setLocation(e.target.value);
	};
	return (
		<div className="search-params">
			<form>
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
			{pets.map(pet =>(<Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id}/>))}
		</div>
	);
};

export default SearchParams;

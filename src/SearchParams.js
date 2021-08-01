import { useState, useEffect } from "react";
import Pet from "./Pet";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [bread, setBread] = useState("");
  const [pets, setPets] = useState([]);
  const breads = [];
  // const [test,settest] = useState('')

  useEffect(() => {
    requstPets();
  }, []);

  async function requstPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?anial=${animal}&location=${location}&bread=${bread}`
    );
    const json = await res.json();
    setPets(json.pets);
    console.log(json.pets);
  }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
            onBlur={(e) => setLocation(e.target.value)}
          ></input>
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((e, i) => {
              return (
                <option value={e} key={i}>
                  {e}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="bread">
          Bread
          <select
            id="bread"
            value={bread}
            onChange={(e) => setBread(e.target.value)}
            onBlur={(e) => setBread(e.target.value)}
          >
            <option />
            {breads?.map((bread) => (
              <option value={bread} key={bread}>
                {bread}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {pets.map((pet) => (
        <Pet
          key={pet.id}
          name={pet.name}
          animal={pet.animal}
          bread={pet.breed}
        />
      ))}
    </div>
  );
};

export default SearchParams;

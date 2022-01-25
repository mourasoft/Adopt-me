import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
	const [breedList, setBreedList] = useState([]);
	const [status, setStatus] = useState("unloading");

	useEffect(() => {
		if (!animal) {
			setBreedList([]);
		}
        else if  (localCache[animal]) {
            setBreedList(localCache[animal]);
            setStatus("loaded");
        }else{
            requestBreedList()
        }
        async function requestBreedList() {
            setBreedList([]);
            setStatus("loading");
            const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
            const json = await res.json();
            console.log('breeds',json.breeds);
            localCache[animal] = json.breeds || [];
            setBreedList(localCache[animal]);
            setStatus("loaded");
        
        }
	},[animal]);
    console.log(localCache)
    return [breedList, status];

}

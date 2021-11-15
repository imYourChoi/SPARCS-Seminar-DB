import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DogPage.css";

const DogPage = () => {
  const breeds = ["shiba", "terrier", "retriever", "husky", "chihuahua", "beagle"];
  const [dogs, setDogs] = useState([]);
  const [breed, setBreed] = useState(breeds[0]);

  useEffect(() => {
    axios.get(`https://dog.ceo/api/breed/${breed}/images/random/10`)
    .then((response) => {
      setDogs(response.data.message)
    });
  }, [breed]);

  return (
    <div>
      {breeds.map(breed =>
        <button key={breed} onClick={() => setBreed(breed)}>{breed}</button>
      )}
      <div className="dogs-list">
        {dogs.length !== 0 &&
          dogs.map(url =>
            <img src={url} key={url} alt="Dog" width="300" />)
        }
      </div>
    </div>
  )
}

export default DogPage;

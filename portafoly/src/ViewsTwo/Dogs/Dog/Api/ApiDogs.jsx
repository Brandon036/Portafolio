import { useEffect, useState } from 'react';
import styles from "./ApiDogs.module.css"

const ApiDogs = () => { 
    const [breeds, setBreeds] = useState([]); 

    useEffect(() => { fetch('https://dog.ceo/api/breeds/list/all') 
        .then(response => response.json())
         .then(data => { 
            
            const breedsList = Object.keys(data.message); 

            setBreeds(breedsList); }) .catch(error => 
            console.error('Error fetching the dog breeds:', error));
         }, []); 

         
            return ( 
            <div className={styles.breed}>
                 <h1 style={{color: "black"}}>Lista de Razas de Perros</h1> 
                 <ul > {breeds.map((breed, index) => (
                     <li  key={index}>{breed}</li> ))} </ul> 
                     </div> ); 
                     }; 
export default ApiDogs;
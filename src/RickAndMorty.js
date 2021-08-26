import React, {useEffect, useState} from 'react';
import axios from "axios";


const RickAndMorty = () => {
    const [persons, setPersons] = useState([])

    useEffect(() => {
        axios("https://rickandmortyapi.com/api/character")
            .then(({data}) => setPersons(data.results))
    }, [])


    return (
        <div className=''>
            {
                persons.map(item => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <img src={item.image} alt=''/>
                    </div>
                ))
            }
        </div>
    );
};

export default RickAndMorty;
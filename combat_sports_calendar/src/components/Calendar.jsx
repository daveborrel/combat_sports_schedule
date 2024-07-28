import React, { useState, useEffect } from 'react';
import FightCard from './FightCard';
import axios from 'axios';

const Calendar = () => {
    const [fights, setFights] = useState([]);

    useEffect(() => {
        const URL = 'https://combat-sports-api.p.rapidapi.com/events';
        const options = {
            headers: {
                'X-RapidAPI-Key': 'f2df5f14c7msh9c14275abc2bce0p116fd3jsn2103a40c5d05',
                'X-RapidAPI-Host': 'combat-sports-api.p.rapidapi.com',
            },
        };

        axios.get(URL, options)
            .then(response => {
                console.log(response.data);
                setFights(response.data);
            })
            .catch(error => {
                console.error('There was an error making the GET request!', error);
            });
    }, []); // The empty array ensures this effect runs only once (like componentDidMount)

    return (
        <div>
            <h1>Upcoming Fights</h1>
            <ul>
                {fights.map((fight, index) => (
                    <FightCard key={index} fight={fight} /> // Use the FightCard component
                ))}
            </ul>
        </div>
    );
};

export default Calendar;

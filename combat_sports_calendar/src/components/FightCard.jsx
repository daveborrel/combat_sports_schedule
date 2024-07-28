import React from 'react';

const FightCard = ({ fight }) => {
    return (
        <div className="fight-card">
            <h2>{fight.title}</h2>
            <p>Date: {fight.date}</p>
            <p>Time: {fight.time}</p>
            <p>Promotion: {fight.promotion}</p>
            <a href={fight.url} target="_blank" rel="noopener noreferrer">More Info</a>
        </div>
    );
};

export default FightCard;
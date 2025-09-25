import React from 'react';
import './Card.css';

function Card({ title, date, time, location, description, skill, price, link }) {
  const handleJoinClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <span className={`skill-badge ${skill.toLowerCase().replace(' ', '-')}`}>{skill}</span>
      </div>
      
      <div className="card-content">
        <div className="event-details">
          <div className="detail">
            <span className="icon">Date:</span>
            <span>{date}</span>
          </div>
          <div className="detail">
            <span className="icon">Time:</span>
            <span>{time}</span>
          </div>
          <div className="detail">
            <span className="icon">Location:</span>
            <span>{location}</span>
          </div>
          <div className="detail">
            <span className="icon">Price:</span>
            <span>{price}</span>
          </div>
        </div>
        
        <p className="card-description">{description}</p>
      </div>
      
      <div className="card-footer">
        <button className="join-button" onClick={handleJoinClick}>
          Join Event
        </button>
      </div>
    </div>
  );
}

export default Card;
import React from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import { eventsData } from './data/eventsData';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="cards-container">
        {eventsData.map((event) => (
          <Card 
            key={event.id}
            title={event.title}
            date={event.date}
            time={event.time}
            location={event.location}
            description={event.description}
            skill={event.skill}
            price={event.price}
            link={event.link}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
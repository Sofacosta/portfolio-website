import React from 'react';
import Event from './Event';

import { events } from '../data/events';

import '../styles/Events.css';

const Events = () => {
  const upcomingEvents = events.filter((event) => event.date > new Date());
  const pastEvents = events.filter((event) => event.date < new Date());
  return (
    <>
      <h2 className="text-white text-4xl mb-12">Upcoming Events</h2>
      {upcomingEvents.length > 0 ? (
        upcomingEvents.map((event) => (
          <Event event={event} isListView={false} key={event.id} />
        ))
      ) : (
        <p>
          <a className="fancy-text" href="https://events.bookitbee.com/memes-ravers-cdmx/1er-aniversario-memes-ravers-cdmx/" target="_blank" rel="noreferrer"><em>Aniversario 1 Memesraverscdmx</em></a>
        </p>
      )}

      <h2 className="text-white text-4xl my-12">Past Events</h2>
      {pastEvents &&
        pastEvents.map((event) => (
          <Event event={event} isListView={true} key={event.id} />
        ))}
    </>
  );
};

export default Events;

import React from 'react';
import Event from './Event';

import { events } from '../data/events';
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
        <p className="text-white my-12 text-center">
          <em>No upcoming events at the moment, check back soon!</em>
        </p>
      )}

      <h2 className="text-white text-4xl my-12">Past Events</h2>
      {pastEvents &&
        pastEvents.map((event) => (
          <Event event={event} isListView={false} key={event.id} />
        ))}
    </>
  );
};

export default Events;

import React from 'react';
import Event from './Event';

import { events } from '../data/events';
const Events = () => {
  return (
    <>
      <h2 className="text-white text-4xl">Events</h2>
      {events.map((event) => <Event event={event} isListView={false} key={event.id} />)}
    </>
  )
}

export default Events;
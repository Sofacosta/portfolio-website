import React from 'react';
import Event from './Event';

import { events } from '../data/events';
const Events = () => {
  return (
    <>
      <h2>Events</h2>
      {events.map((event) => <Event />)}
    </>
  )
}

export default Events;
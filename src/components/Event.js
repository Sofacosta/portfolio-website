import React from 'react';

const Event = (props) => {
  const { event, isListView } = props;
  const { id, title, subtitle, date, location, price, shortDescription, htmlDescription, infoUrl, buyUrl, thumbnail, originalImg } = event;
  return (
  <div id={id} className={isListView ? "event event-list-item text-white" : "event event-expanded text-white"}>
    <img className={isListView ? "event-thumbnail" : "event-hero"} src={isListView ? thumbnail : originalImg} alt="" />
    <h2>{title}</h2>
    {(subtitle && !isListView) && <h3>{subtitle}</h3>}
    <p>Date: {date.toLocaleDateString(navigator.language, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
    <p>Location: {location}</p>
    {(price && !isListView) && <p>Price: ${price}</p>}
    {(shortDescription && !isListView) && <p>{shortDescription}</p>}
    {(htmlDescription && !isListView) && <span dangerouslySetInnerHTML={{ __html: htmlDescription }} />}
    {(infoUrl && !isListView) && <a className="info-url" href={infoUrl}>{infoUrl}</a>}
    {buyUrl && <a className="buy-url" href={buyUrl}>Buy Tickets</a>}
  </div>
  );
};

export default Event;
import ReactHtmlParser from 'react-html-parser';

const Event = (props) => {
  const { event, isListView } = props;
  const { id, title, subtitle, date, location, price, shortDescription, htmlDescription, infoUrl, buyUrl, thumbnail, originalImg } = event;
  return (
  <>
    <hr className="mb-12" />
    <div id={id} className={isListView ? "event event-list-item text-white" : "event event-expanded text-white"}>
      <h2 className="text-2xl my-2">{title}</h2>
      {(subtitle && !isListView) && <h3 className="text-lg mb-1">{subtitle}</h3>}
      {(thumbnail && originalImg) && <img className={isListView ? "event-thumbnail mb-4" : "event-hero mb-4"} src={isListView ? thumbnail : originalImg} alt="" />}
      <p><strong>Date:</strong> {date.toLocaleDateString(navigator.language, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
      <p><strong>Location:</strong> {location}</p>
      {(price && !isListView) && <p><strong>Price:</strong> ${price}</p>}
      {(shortDescription && !isListView) && <p className="mt-4">{shortDescription}</p>}
      {(htmlDescription && !isListView) && <span>{ReactHtmlParser(htmlDescription)}</span>}
      {(infoUrl && !isListView) && <a className="info-url" href={infoUrl}>{infoUrl}</a>}
      {buyUrl && <a className="buy-url" href={buyUrl}>Buy Tickets</a>}
    </div>
  </>
  );
};

export default Event;
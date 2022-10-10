import FlipCardBase from './FlipCardBase';

function SixFrontContent() {
  return (
    <img
      className="object-cover"
      src="/assets/images/counterclockwise.jpeg"
      alt="Landscape"
    />
  );
}
function SixBackContent() {
  return (
    <div>
      <p>
      <a href="https://www.landscape.fm/counterclockwise" target="_blank" rel="noreferrer">BUY HERE</a>
        COUNTERCLOCKWISE includes samples of beats, field recordings,
        vocalizations, and instrumentations from an exciting selection of
        musicians, poets and artists. The samples on COUNTERCLOCKWISE are open
        source, so you can use them however you want. 
      </p>
    </div>
  );
}

export function SixCardFront() {
  return <FlipCardBase content={<SixFrontContent />} isFront={true} />;
}
export function SixCardBack() {
  return <FlipCardBase content={<SixBackContent />} isFront={false} />;
}

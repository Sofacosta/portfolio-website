import FlipCardBackContent from './FlipCardBackContent';

export function SixCardFront() {
  return (
    <img
      className="object-cover"
      src="/assets/images/counterclockwise-square.png"
      alt="Landscape"
    />
  );
}
export function SixCardBack() {
  return (
    <FlipCardBackContent
      description="COUNTERCLOCKWISE is a companion cassette that is included with the Landscape HC-TT that includes samples of beats, field recordings, vocalizations, and instrumentations from an exciting selection of musicians, poets and artists. The samples on COUNTERCLOCKWISE are open source, so you can use them however you want."
      linkText="BUY HERE"
      title="Landscape HC-TT COUNTERCLOCKWISE"
      url="https://www.landscape.fm/counterclockwise"
    />
  );
}

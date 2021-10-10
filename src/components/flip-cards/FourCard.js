import FlipCardBase from "./FlipCardBase"

function FourFrontContent() {
  return (
    <img className="object-cover" src="/assets/images/Analogtitlan.png" alt="Analogtitlan" />
  );
}
function FourBackContent() {
  return (
    <div>
      <p>Analogtitlan is an hour monthly show that presents the sounds, tunes and experiments from the growing synth community in Mexico city. This show is presented by Síntesis con Leo. 25-oct-19 </p>
      <a href="https://www.mixcloud.com/ThreadsRadio/analogtitlan-w-leo-mendez-threadsmexico-city-25-oct-19/">Listen here</a>
    </div>
  );
}

export function FourCardFront() { return <FlipCardBase content={<FourFrontContent />} /> };
export function FourCardBack() { return <FlipCardBase content={<FourBackContent />} /> };
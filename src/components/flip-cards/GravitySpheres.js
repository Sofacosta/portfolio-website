import FlipCardBase from './FlipCardBase';

function GravitySpheresFrontContent() {
  return (
    <img
      className="object-cover h-full"
      src="https://media.giphy.com/media/VTHdQHi0FtzxgbbHqT/giphy.gif"
      alt="Gravity Spheres"
    />
  );
}
function GravitySpheresBackContent() {
  return (
    <div>
      <p>
      This is one of the first sketches I made with Processing. I was really proud of it as I was able to figure out how to make the spheres interact with one another practicing conditionals. Here is the sketch in <a href="https://github.com/Sofacosta/gravity_spheres" target="_blank" rel="noreferrer">Github</a> if you are interested in looking at the code.
      </p>
    </div>
  );
}

export function GravitySpheresCardFront() {
  return <FlipCardBase content={<GravitySpheresFrontContent />} isFront={true} />;
}
export function GravitySpheresCardBack() {
  return <FlipCardBase content={<GravitySpheresBackContent />} isFront={false} />;
}

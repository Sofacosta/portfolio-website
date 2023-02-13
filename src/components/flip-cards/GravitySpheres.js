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
        <a
          href="https://github.com/Sofacosta/gravity_spheres"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </p>
    </div>
  );
}

export function GravitySpheresCardFront() {
  return (
    <FlipCardBase content={<GravitySpheresFrontContent />} isFront={true} />
  );
}
export function GravitySpheresCardBack() {
  return (
    <FlipCardBase content={<GravitySpheresBackContent />} isFront={false} />
  );
}

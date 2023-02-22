import FlipCardBackContent from './FlipCardBackContent';

export function GravitySpheresCardFront() {
  return (
    <img
      className="object-cover"
      src="/assets/images/gravity-spheres-square.gif"
      alt="Gravity Spheres"
    />
  );
}
export function GravitySpheresCardBack() {
  return (
    <FlipCardBackContent
      description="Gravity Spheres is a Processing sketch that simulates the gravitational interaction between multiple spheres. The sketch was inspired by the work of Daniel Shiffman and his Coding Train Youtube channel."
      linkText="Gravity Spheres on Github"
      title="Gravity Spheres"
      url="https://github.com/Sofacosta/gravity_spheres"
    />
  );
}

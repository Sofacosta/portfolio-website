import FlipCardBackContent from './FlipCardBackContent';

export function ResidentAdvisorCardFront() {
  return (
    <img
      className="object-cover"
      src="/assets/images/resident-advisor-square.png"
      alt="Resident Advisor"
    />
  );
}
export function ResidentAdvisorCardBack() {
  return (
    <FlipCardBackContent
      description={`The Critics Roundtable gives writers and artists a chance to go in-depth on their highlights in electronic music from the year thus far."She brings out everyone's inner demons, like you're reminded of primordial urgence" Nyshka Chandran.`}
      linkText="The Critics Roundtable"
      title="Resident Advisor"
      url="https://ra.co/exchange/556"
    />
  );
}

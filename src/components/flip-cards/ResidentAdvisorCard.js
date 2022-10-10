import FlipCardBase from './FlipCardBase';

function ResidentAdvisorFrontContent() {
  return (
    <div>
      <img
        className="object-cover"
        src="/assets/images/Resident-Advisor.png"
        alt="Resident advisor"
      />
    </div>
  );
}
function ResidentAdvisorBackContent() {
  return (
    <div>
      <p>
      {' '}
        <a href="https://ra.co/exchange/556" target="_blank" rel="noreferrer"> The Critics Roundtable </a> gives writers and artists a chance to go in-depth
        on their highlights in electronic music from the year thus far. 28/4/22
      </p>
    </div>
  );
}

export function ResidentAdvisorCardFront() {
  return <FlipCardBase content={<ResidentAdvisorFrontContent />} isFront={true} />;
}
export function ResidentAdvisorCardBack() {
  return <FlipCardBase content={<ResidentAdvisorBackContent />} isFront={false} />;
}

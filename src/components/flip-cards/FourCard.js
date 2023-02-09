import FlipCardBase from './FlipCardBase';

function FourFrontContent() {
  return (
    <img
      className="object-cover"
      src="https://media.giphy.com/media/DTThI1Uo6VHJ3Bitmw/giphy-downsized-large.gif"
      alt="NFT"
    />
  );
}
function FourBackContent() {
  return (
    <div>
      <p>
        NFT collaboration between Theus Mago and Julieta Gil. 100 free-to-claim
        via Pianity and Mutek MX collection.{' '}
      </p>
      <a
        href="https://pianity.com/theus-mago/dead-piano"
        target="_blank"
        rel="noreferrer"
      >
        Claim here
      </a>
    </div>
  );
}

export function FourCardFront() {
  return <FlipCardBase content={<FourFrontContent />} isFront={true} />;
}
export function FourCardBack() {
  return <FlipCardBase content={<FourBackContent />} isFront={false} />;
}

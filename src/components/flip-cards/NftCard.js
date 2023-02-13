import FlipCardBase from './FlipCardBase';

function NftFrontContent() {
  return (
    <img
      className="object-cover"
      src="https://media.giphy.com/media/DTThI1Uo6VHJ3Bitmw/giphy-downsized-large.gif"
      alt="NFT"
    />
  );
}
function NftBackContent() {
  return (
    <div>
      <a
        href="https://pianity.com/theus-mago/dead-piano"
        target="_blank"
        rel="noreferrer"
      >
        FREE-TO-CLAIM NFT
      </a>

      <p>
        NFT collaboration between Coast2c, Theus Mago and Julieta Gil. 100
        free-to-claim via Pianity and Mutek MX collection.
      </p>
    </div>
  );
}

export function NftCardFront() {
  return <FlipCardBase content={<NftFrontContent />} isFront={true} />;
}
export function NftCardBack() {
  return <FlipCardBase content={<NftBackContent />} isFront={false} />;
}

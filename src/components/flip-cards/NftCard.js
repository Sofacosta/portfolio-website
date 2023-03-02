import FlipCardBackContent from './FlipCardBackContent';

export function NftCardFront() {
  return (
    <img
      className="object-cover"
      src="/assets/images/dead-piano-nft.gif"
      alt="NFT"
    />
  );
}
export function NftCardBack() {
  return (
    <FlipCardBackContent
      description="NFT collaboration between Coast2c, Theus Mago and Julieta Gil. 100 free-to-claim via Pianity and Mutek MX collection."
      linkText="Claim your free NFT!"
      title="Dead Piano NFT"
      url="https://pianity.com/theus-mago/dead-piano"
    />
  );
}

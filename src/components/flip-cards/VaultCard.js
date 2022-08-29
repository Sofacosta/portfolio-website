import FlipCardBase from './FlipCardBase';

function VaultFrontContent() {
  return (
    <div>
      <img
        className="object-cover"
        src="/assets/images/Vault_cover.png"
        alt="Vault EP"
      />
    </div>
  );
}
function VaultBackContent() {
  return (
    <div>
      <p>Listen and purchase {' '}
        <a href="https://coast2c.bandcamp.com/album/vault"target="_blank" rel="noreferrer"> here. </a> 
      </p>
    </div>
  );
}

export function VaultCardFront() {
  return <FlipCardBase content={<VaultFrontContent />} isFront={true} />;
}
export function VaultCardBack() {
  return <FlipCardBase content={<VaultBackContent />} isFront={false} />;
}

import FlipCardBase from './FlipCardBase';

function MixmagFrontContent() {
  return (
    <div>
      <img
        className="object-cover"
        src="/assets/images/mixmag2.png"
        alt="Vault EP"
      />
    </div>
  );
}
function MixmagBackContent() {
  return (
    <div>
      <img className="mb-4" src="/assets/images/mixmag.png" alt="Mixmag" />
      <p>
        Entrevista completa
        <a
          href="https://coast2c.bandcamp.com/album/vault"
          target="_blank"
          rel="noreferrer"
        >
          aquí.{' '}
        </a>
      </p>
    </div>
  );
}

export function MixmagCardFront() {
  return <FlipCardBase content={<MixmagFrontContent />} isFront={true} />;
}
export function MixmagCardBack() {
  return <FlipCardBase content={<MixmagBackContent />} isFront={false} />;
}

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
          href="https://content.yudu.com/web/44iu0/0A44iu1/MexicoSEPTIEMBRE22/html/index.html?page=58&origin=reader"
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

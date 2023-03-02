import FlipCardBackContent from './FlipCardBackContent';

export function MixmagCardFront() {
  return (
    <img
      className="object-cover"
      src="/assets/images/mixmag2.png"
      alt="Mixmag"
    />
  );
}
export function MixmagCardBack() {
  return (
    <FlipCardBackContent
      altText="Interview with Mixmag Mexico"
      imageUrl="/assets/images/mixmag.png"
      linkText="Lee la entrevista completa"
      title="Entrevista Mixmag"
      url="https://content.yudu.com/web/44iu0/0A44iu1/MexicoSEPTIEMBRE22/html/index.html?page=58&origin=reader"
    />
  );
}

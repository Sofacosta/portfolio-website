import FlipCardBackContent from './FlipCardBackContent';

export function VirtualSynthCardFront() {
  return (
    <img
      className="object-cover"
      src="/assets/images/virtual-synth-square.png"
      alt="Virtual Synth"
    />
  );
}
export function VirtualSynthCardBack() {
  return (
    <FlipCardBackContent
      altText="Code Synth"
      imageUrl="/assets/images/code-synth.png"
      linkText="View open source project"
      title="Virtual Synth"
      url="https://github.com/Sofacosta/SoundMaker.Solution"
    />
  );
}

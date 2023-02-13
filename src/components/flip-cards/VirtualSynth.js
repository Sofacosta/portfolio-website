import FlipCardBase from './FlipCardBase';

function VirtualSynthFrontContent() {
  return (
    <img
      className="object-cover h-full"
      src="/assets/images/virtual-synth.png"
      alt="Virtual Synth"
    />
  );
}
function VirtualSynthBackContent() {
  return (
    <div>
      <h3 className="text-2xl mb-4">Virtual Synth</h3>
      <img
        className="mb-4"
        src="/assets/images/code-synth.png"
        alt="Code Synth"
      />
      <p className="mb-2">
        <a
          href="https://github.com/Sofacosta/SoundMaker.Solution"
          target="_blank"
          rel="noreferrer"
        >
          Open source project in Github
        </a>
      </p>
    </div>
  );
}

export function VirtualSynthCardFront() {
  return <FlipCardBase content={<VirtualSynthFrontContent />} isFront={true} />;
}
export function VirtualSynthCardBack() {
  return <FlipCardBase content={<VirtualSynthBackContent />} isFront={false} />;
}

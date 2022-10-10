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
      <a href="https://github.com/Sofacosta/SoundMaker.Solution"target="_blank" rel="noreferrer">Open source project in Github</a>.
        This collaborative project is a virtually-controlled synth built in Javascript on
        top of the Web Audio API. You can check the code and resources{' '}
      </p>
      <p className="mb-2">
        The objective was to understand how to work with Web Audio API by
        building our own virtual synthesizer.The initial idea was to build everything modularly so we could
        add functionality as we go. Some features we would like to include are:
        linking BPM to drum beats and oscillators, add more effects, record and
        save live sessions … amongst other functionality to keep the synth
        evolving.
      </p>
      <p className="mb-2">
        <strong>Collaborators:</strong> H.R Williams, Jesse Callahan, Laurie
        Waller, Sofia Acosta and Theron Packus.
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

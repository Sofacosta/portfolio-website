import FlipCardBase from './FlipCardBase';

function FrontContent() {
  return (
    <img
      className="object-cover h-full"
      src="/assets/images/virtual-synth.png"
      alt="Virtual Synth"
    />
  );
}
function BackContent() {
  return (
    <div>
      <h3 className="text-2xl mb-4">Virtual Synth</h3>
      <img
        className="mb-4"
        src="/assets/images/code-synth.png"
        alt="Code Synth"
      />
      <p className="mb-2">
        This is a collaborative project I created with my programming school
        classmates. It is a virtually-controlled synth built in Javascript on
        top of the Web Audio API. You can check the code and resources{' '}
        <a href="https://github.com/Sofacosta/SoundMaker.Solution">HERE</a>.
      </p>
      <p className="mb-2">
        The objective was to understand how to work with Web Audio API by
        building our own virtual synthesizer and host it so people could play
        with it. The initial idea was to build everything modularly so we could
        add functionality as we go. Some features we would like to include are:
        linking BPM to drum beats and oscillators, add more effects, record and
        save live sessions … amongst other functionality to keep the synth
        evolving.
      </p>
      <p className="mb-2">
        Note: It’s buggy on mobile but works great on your computer. Any
        comments and suggestions are welcome at{' '}
        <a href="mailto:sofia@coast2c.me">sofia@coast2c.me</a>
      </p>
      <p className="mb-2">
        <strong>Collaborators:</strong> H.R Williams, Jesse Callahan, Laurie
        Waller and Theron Packus.
      </p>
      <a href="https://github.com/Sofacosta/SoundMaker.Solution">
        Check it out on Github here
      </a>
    </div>
  );
}

export function TestCardFront() {
  return <FlipCardBase content={<FrontContent />} />;
}
export function TestCardBack() {
  return <FlipCardBase content={<BackContent />} />;
}

import React from 'react';

const About = () => {
  return (
    <>
      <div>
        <h2 className="text-white text-4xl mb-12">About</h2>
      </div>
      <div className="mx-auto pt-4">
        <img
          src="/assets/images/SofiaAcosta_026LRcredit_CarlyDiaz.jpg"
          alt="Coast2P"
        />
        <p className="text-white justify-center py-4">
          Sofia Acosta is a multidisciplinary artist focusing on sound, DJing
          and visual arts. Sofia composes electronic music that oscillates
          between acid, drone and experimental techno. Fluent in a multitude of
          rhythmic styles, her DJ sets are eclectic and highly energetic,
          ranging from noisy techno, acid house and synth punk.
        </p>

        <p className="text-white justify-center py-4">
          Sofia has performed in different cities around the world including the
          live electronic music festival{' '}
          <a href="https://kontaktor.lv/">Kontaktor</a> in Latvia. In 2018 with
          the help of a Career Opportunity grant provided by the Oregon Art
          Commission, she studied modular synthesis at Elektronmusikstudion
          (EMS) and helped produced a series of synth educational workshops for
          female and non-binary students at Superbooth Berlin and The Synth
          Library, Prague.
        </p>

        <p className="text-white justify-center py-4">
          Sofia's music has been released on a variety of labels including{' '}
          <a href="https://soundcloud.com/ransom-note-records/sets/graintable-universal-ash-1">
            Ransom Note,
          </a>{' '}
          <a href="https://blankstairs.bandcamp.com/">Blankstairs</a> and {' '}
          <a href="https://coast2ckm.bandcamp.com/track/mente-maleable?label=273540382&tab=music">Krater Music.</a> 
          

        </p>
      </div>
    </>
  );
};

export default About;

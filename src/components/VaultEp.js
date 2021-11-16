import React from 'react';
import { Link } from 'react-router-dom';

const VaultEp = () => {
  return (
    <>
      <Link
        className="text-white"
        target="_blank"
        to={{ pathname: 'https://coast2c.bandcamp.com/album/vault' }}
      >
        Buy | Listen
      </Link>
      <img
        class="transform scale-75"
        src="/assets/images/Vault_cover.png"
        alt="VaultEP"
      />
      <div className="max-w-xl mx-auto pt-4">
        <p className="text-white justify-center py-2">
          Vault starts with an hypnotic acid drone piece with “Bones”, a
          one-take live recording of several different synths, followed by “Time
          is Not Linear”, an exploration of loops created by the evocative sound
          of modular synthesizers. “Cornelius” plays with textures, samples and
          noise. The EP ends with the title track “Vault”, which layers live
          acid sounds on top of the drums.
        </p>
        <hr></hr>
        <p className="text-white justify-center py-4">
          Vault attracted critical attention across Europe and US.
        </p>
      </div>
    </>
  );
};

export default VaultEp;

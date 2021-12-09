import React from 'react';
import { Link } from 'react-router-dom';

const VaultEp = () => {
  return (
    <>
    <div>
    <h2 className="text-white text-4xl mb-12">Vault EP</h2>
    </div>
      <div className="w-max my-18 mx-auto">
        <Link
          className="text-white no-underline text-2xl border-2 border-white rounded-lg p-2"
          target="_blank"
          to={{ pathname: 'https://coast2c.bandcamp.com/album/vault' }}
        >
          Buy | Listen
        </Link>
      </div>
      <img
        class="my-12"
        src="/assets/images/Vault_cover.png"
        alt="VaultEP"
      />
      <div>
        <p className="text-white justify-center">
          Vault starts with an hypnotic acid drone piece with “Bones”, a
          one-take live recording of several different synths, followed by “Time
          is Not Linear”, an exploration of loops created by the evocative sound
          of modular synthesizers. “Cornelius” plays with textures, samples and
          noise. The EP ends with the title track “Vault”, which layers live
          acid sounds on top of the drums.
        </p>
        <br></br>
        <hr></hr>
        <p className="text-white mx-auto justify-center py-4">
          Vault EP was released on January 26, 2021 receiving very positive feedback from different outlets:
          <ul>
            <li><Link target="_blank" to={{ pathname: "https://ra.co/exchange/556" }}>Resident advisor</Link></li>
            <li><Link target="_blank" to={{ pathname: "https://filtermexico.com/2021/01/27/coast2c-explora-el-minimalismo-del-drone-y-el-techno-en-vault/" }}>Filter Mexico</Link></li>
            <li><Link target="_blank" to={{ pathname: "https://www.youtube.com/watch?v=REBfhwf9UHk" }}>Hate Lab</Link></li>
            <li><Link target="_blank" to={{ pathname: "https://coldexperiment.com/news/coast2c-vault/" }}>Cold Experiment</Link></li>
            <li><Link target="_blank" to={{ pathname: "https://www.techclubbers.com/coast2c-vaul-ep-gestef-records/" }}>Tech Clubbers</Link></li>
            <li><Link target="_blank" to={{ pathname: "http://wickedstyle.neural.it/2020/12/coast2c-vault/" }}>Wicked Style</Link></li>
            <li><Link target="_blank" to={{ pathname: "https://soundcloud.com/thebrvtalistxx/coast2c-time-is-not-linear-gestef-records" }}>The Brvtalist</Link></li>
          </ul>
        </p>
      </div>
    </>
  );
};

export default VaultEp;

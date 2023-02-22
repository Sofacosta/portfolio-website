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
      <img class="my-12" src="/assets/images/Vault_cover.png" alt="VaultEP" />
      <div>
        <p className="text-white justify-center">
          Vault starts with an hypnotic acid drone piece with “Bones”, a
          one-take live recording of several different synths, followed by “Time
          is Not Linear”, an exploration of loops created by the evocative sound
          of modular synthesizers. “Cornelius” plays with textures, samples and
          noise. The EP ends with the title track “Vault”, which layers live
          acid sounds on top of the drums.
        </p>
        <br />
        <hr />
        <p className="text-white mx-auto justify-center py-4">Press:</p>
        <ul>
          <li>
            <a
              href="https://ra.co/exchange/556"
              target="_blank"
              rel="noreferrer"
            >
              Resident advisor
            </a>
          </li>
          <li>
            <a
              href="https://filtermexico.com/2021/01/27/coast2c-explora-el-minimalismo-del-drone-y-el-techno-en-vault/"
              target="_blank"
              rel="noreferrer"
            >
              Filter Mexico
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=REBfhwf9UHk"
              target="_blank"
              rel="noreferrer"
            >
              Hate Lab
            </a>
          </li>
          <li>
            <a
              href="https://coldexperiment.com/news/coast2c-vault/"
              target="_blank"
              rel="noreferrer"
            >
              Cold Experiment
            </a>
          </li>
          <li>
            <a
              href="https://www.techclubbers.com/coast2c-vaul-ep-gestef-records/"
              target="_blank"
              rel="noreferrer"
            >
              Tech Clubbers
            </a>
          </li>
          <li>
            <a
              href="http://wickedstyle.neural.it/2020/12/coast2c-vault/"
              target="_blank"
              rel="noreferrer"
            >
              Wicked Style
            </a>
          </li>
          <li>
            <a
              href="https://soundcloud.com/thebrvtalistxx/coast2c-time-is-not-linear-gestef-records"
              target="_blank"
              rel="noreferrer"
            >
              The Brvtalist
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default VaultEp;

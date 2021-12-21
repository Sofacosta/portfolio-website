import Release from './Release';

import { releases } from '../data/releases';

const Releases = () => {
  return (
    <>
    <h2 className="border-b-2 pb-3 border-white text-4xl mb-12">Releases</h2>
    {releases.length > 0 && 
      releases.map((release) => {
        return <Release {...release} />;
      })
    }
    </>
    
  );
};

export default Releases;

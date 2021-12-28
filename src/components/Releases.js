import Release from './Release';

import { releases } from '../data/releases';

const Releases = () => {
  return (
    <>
    <h2 className="border-b-2 pb-3 border-white text-4xl mb-24">Releases</h2>
    {releases.length > 0 && 
      releases.map((release, index) => {
        const isLastItem = index === releases.length - 1;
        const releaseItem = isLastItem ? <Release {...release} /> : <><Release {...release} /><hr className='my-12' /></>;
        return releaseItem;
      })
    }
    </>
    
  );
};

export default Releases;

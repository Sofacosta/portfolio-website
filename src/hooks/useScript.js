import { useEffect } from 'react';

/**
 * @param  {string} url
 * @param  {array} attrs array of objects with each object in the array representing an html attribute and it's value, ex: crossorigin="anonymous"
 */
const useScript = (url, attrs) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;

    if (attrs) {
      for (let i = 0; i < attrs.length; i++) {
        const attr = attrs[i];
        for (const [key, value] of Object.entries(attr)) {
          script[key] = value;
        }
        
      }
    }

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url, attrs]);
};

export default useScript;

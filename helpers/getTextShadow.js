import { useEffect, useState } from 'react';

const getTextShadow = (index, array, className) => {
  const [shadowIndex, setShadowIndex] = useState(-1);

  useEffect(() => {
    const isCurrentElementInTheArray = shadowIndex < array.length;
    if (isCurrentElementInTheArray) {
      setTimeout(() => {
        setShadowIndex(shadowIndex + 1);
      }, 1500);
    }
  }, [shadowIndex]);

  const shadowClassName = index === shadowIndex ? className : '';

  return shadowClassName;
};

export default getTextShadow;

import React from 'react';
import { LoadingContainer, LoadingIcon } from '../styledComponents/Loading';

/**
 * Loading icon component whith the circle animation.
 * @param {String} height - Size of the loading icon
 * @param {Boolean} light - if true the loading icon is white otherwise it's green
 * @return {React.ReactElement} Animated Loading
 */
const Loading = ({ light, height }) => {
  return (
    <LoadingContainer height={height} $light={light}>
      <LoadingIcon height={height} />
    </LoadingContainer>
  );
};

export default Loading;

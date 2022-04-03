import React from 'react';
import styled from '@emotion/styled';
import { mq, fontWeights, Rem, colors } from '../../styles/designSystem';
import { images } from '../../assets/images';

const Cover = styled.div({
  [mq.maxTablet]: {
    background: `url(${images.backgrounds.cover.small}) no-repeat 50% 50%/contain`,
    position: 'relative',
    paddingTop: '38.13333333%',
  },
  [mq.minXsmall]: {
    background: `url(${images.backgrounds.cover.large}) no-repeat 50% 50%/cover`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '285px',
  },
  '& h1': {
    fontWeight: fontWeights.black,
    fontSize: '8.53333vw',
    textAlign: 'center',
    color: colors.default,
    [mq.maxTablet]: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    [mq.minXsmall]: {
      fontSize: Rem(64)
    },
  },
});

export default Cover;

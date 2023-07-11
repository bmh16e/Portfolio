import React from 'react';
import { styled } from '@mui/material/styles';
import { ColorModeContext } from '../Theme';

export interface AnimatedWaveProps {}

export const AnimatedWave: React.FC<AnimatedWaveProps> = () => {
  const { colorMode } = React.useContext(ColorModeContext);

  const SVG = styled('svg')({
    position: 'relative',
    width: '100%',
    height: '15vh',
    marginBottom: '-7px' /*Fix for bottom gap*/,
    marginTop: -150,
    minHeight: '100px',
    maxHeight: '150px',
    '.parallax > use': {
      animation: 'move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite'
    },
    '.parallax > use:nth-child(1)': {
      animationDelay: '-2s',
      animationDuration: '7s'
    },
    '.parallax > use:nth-child(2)': {
      animationDelay: '-3s',
      animationDuration: '10s'
    },
    '.parallax > use:nth-child(3)': {
      animationDelay: '-4s',
      animationDuration: '13s'
    },
    '.parallax > use:nth-child(4)': {
      animationDelay: '-5s',
      animationDuration: '20s'
    },
    '@keyframes move-forever': {
      from: {
        transform: 'translate3d(-90px,0,0)'
      },
      to: {
        transform: 'translate3d(85px,0,0)'
      }
    }
  });

  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="waves"
      preserveAspectRatio="none"
      viewBox="0 24 150 28">
      <defs>
        <path id="a" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z" />
      </defs>
      <g className="parallax">
        <use
          xlinkHref="#a"
          x={48}
          fill={colorMode === 'dark' ? 'rgba(14, 35, 54,0.3)' : 'rgba(255,255,255,0.7)'}
        />
        <use
          xlinkHref="#a"
          x={48}
          y={3}
          fill={colorMode === 'dark' ? 'rgba(14, 35, 54,0.5)' : 'rgba(255,255,255,0.5)'}
        />
        <use
          xlinkHref="#a"
          x={48}
          y={5}
          fill={colorMode === 'dark' ? 'rgba(7, 22, 35,0.7)' : 'rgba(255,255,255,0.3)'}
        />
        <use
          xlinkHref="#a"
          x={48}
          y={7}
          fill={colorMode === 'dark' ? 'rgba(7, 22, 35, 1)' : 'rgba(255,255,255, 1)'}
        />
        {/* <use xlinkHref="#a" x={48} fill="rgba(243, 243, 243,0.7)" />
        <use xlinkHref="#a" x={48} y={3} fill="rgba(243, 243, 243,0.5)" />
        <use xlinkHref="#a" x={48} y={5} fill="rgba(243, 243, 243,0.3)" />
        <use xlinkHref="#a" x={48} y={7} fill="#f3f3f3" /> */}
      </g>
    </SVG>
  );
};

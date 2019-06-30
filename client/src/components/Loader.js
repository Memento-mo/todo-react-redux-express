import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  .filter {
    position: absolute;
    visibility: hidden;
  }

  .dots {
    filter: url(#gooeyness);
    padding: 30px;
  }

  .dot {
    background: #0097A7;
    border-radius: 50%;
    display: inline-block;
    margin-right: 20px;
    width: 27px;
    height: 27px;
  }

  .dot:first-child {
    animation: FirstDot 3s infinite;
  }

  .dot:nth-child(2) {
    animation: SecondDot 3s infinite;
  }

  .dot:nth-child(3) {
    animation: ThirdDot 3s infinite;
  }

  .dot:nth-child(4) {
    animation: FourthDot 3s infinite;
  }

  .dot:nth-child(5) {
    animation: FifthDot 3s infinite;
  }

  @keyframes FirstDot {
    0% {
      transform: scale(1) translateX(0);
    }
    25% {
      transform: scale(2.5) translateX(0);
    }
    50% {
      transform: scale(1) translateX(0);
    }
    83% {
      transform: scale(1) translateX(240px);
    }
    100% {
      transform: scale(1) translateX(0);
    }
  }

  @keyframes SecondDot {
    0% {
      transform: translateX(0px);
    }
    27% {
      transform: translateX(-40px);
    }
    50% {
      transform: translateX(0px);
    }
    81% {
      transform: translateX(180px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes ThirdDot {
    0% {
      transform: translateX(0px);
    }
    29% {
      transform: translateX(-100px);
    }
    50% {
      transform: translateX(0px);
    }
    79% {
      transform: translateX(120px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes FourthDot {
    0% {
      transform: translateX(0px);
    }
    31% {
      transform: translateX(-160px);
    }
    50% {
      transform: translateX(0px);
    }
    77% {
      transform: translateX(60px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes FifthDot {
    0% {
      transform: scale(1) translateX(0);
    }
    33% {
      transform: scale(1) translateX(-220px);
    }
    50% {
      transform: scale(1) translateX(0);
    }
    75% {
      transform: scale(2.5) translateX(0);
    }
    100% {
      transform: scale(1) translateX(0);
    }
  }
`;

const Loader = () => {
  return (
    <Wrapper>
      <svg className="filter" version="1.1">
          <defs>
            <filter id="gooeyness">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="gooeyness" />
              <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
            </filter>
          </defs>
        </svg>
      <div className="dots">
        <div className="dot mainDot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </Wrapper>
  )
}

export default Loader;
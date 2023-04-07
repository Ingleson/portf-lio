import styled, { css } from "styled-components";
import 'animate.css';

export const ContainerMenuMobile = styled.div`
  position: absolute;
  backdrop-filter: blur(2px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0;

  background: rgb(51,51,51);
  background: linear-gradient(360deg, rgba(51,51,51,1) 0%, rgba(69,68,68,1) 38%, rgba(129,127,127,0.9304096638655462) 100%);

  opacity: 0;
  pointer-events: none;

  transition: 1s;
  
  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transition: 0.5s;
    
    animation: fadeInUp 1s;

    .close {
      animation: rotateIn 1.2s;
    }
  `}

  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transition: .5s;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 40px;

    a {
      display: flex;
      align-items: center;
      font-size: 24px;
      font-style: italic;
      text-decoration: none;
      gap: 10px;

      :hover {
        text-decoration: underline;
      }
    }

    .wpp {
      color: #25D366;
    }
    .lk {
      color: #0e76a8;
    }
    .gh {
      color: #000;
    }

  }
`
import styled from "styled-components";

export const ContainerFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1.5rem 7% 1em 7%;
  background-color: #00BFFF;
  gap: 5px;

  button, svg {
    transition: 1s;

    :hover {
      transition: 1s;
    }
  }

  button {
    background-color: #140523;
    padding: 5px 7px;
    border: transparent;
    border-radius: 50%;
    position: absolute;
    top: 97.3rem;

    @media (max-width: 1088px) {
      top: 98.8rem;
    }
    @media (max-width: 695px) {
      top: 100.2rem;
    }
    @media (max-width: 600px) {
      top: 98.8rem;
    }
    @media (max-width: 411px) {
      top: 100.2rem;
    }

    :hover {
      background-color: #00BFFF;
      
      svg {
        color: #140523;
      }
    }
    svg {
      color: #00BFFF;
      width: 20px;
      height: 20px;
    }
  }
  p {
    font-style: italic;
    color: #fff;
    text-shadow: 2px 2px 3px #140523;
    display: flex;
    align-items: center;

    svg {
      color: #140523;
      height: 20px;
      width: 20px;
    }
  }
`
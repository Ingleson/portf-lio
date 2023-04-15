import styled from 'styled-components';

export const ContainerAside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 1.3rem;

  @media (max-width: 600px) {
    display: none;
  }

  h4 {
    font-size: 18px;
    
  }
  p, h4 {
    color: #fff;
  }
  p {
    font-style: italic;
  }
  a {
    background-color: #00BFFF;
    color: #fff;
    padding: 10px 20px;
    width: 100px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    transition: 1s;
    :hover {
      transform: scale(1.1);
      transition: 1s;
    }
  }
`
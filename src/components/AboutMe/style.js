import styled from 'styled-components';

export const ContainerAboutMe = styled.div`
  width: 100%;
  height: 530px;
  background-color: #00BFFF;

  .about-me {
    width: 70%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 5px;

    padding: 0 7%;

    @media (max-width: 600px) {
      width: 100%;
    }

    i, h1, h2, p {
      color: #fff;
    }

    i {
      font-size: 16px;
    }
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 20px;
    }
    p {
      padding: 30px 0;
      line-height: 24px;
    }
  }
  .btn-box {
    display: flex;
    gap: 20px;

    a {
      background-color: #fff;
      color: #00BFFF;
      padding: 10px 20px;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 700;

      :hover {
        text-decoration: underline;
      }
    }
  }
`
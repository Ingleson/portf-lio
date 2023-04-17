import styled from 'styled-components';

export const ContainerProject = styled.section`
  display: flex;
  flex-direction: column;
  width: 65%;
  gap: 10px;

  @media (max-width: 600px) {
    width: 100%;
  }

  i {
    color: #fff;
  }
  h3 {
    color: #fff;
    font-size: 24px;
    letter-spacing: 3px;
    margin-bottom: 30px;

    strong {
      color: #00BFFF;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
    gap: 50px;
    overflow-x: hidden;

    li {
      display: flex;
      flex-direction: column;
      max-width: 95%;
      gap: 10px;

      h4 {
        color: #fff;
        margin-bottom: 15px;
        font-size: 20px;
      }
      p {
        font-size: 13px;
        font-style: italic;
        color: #fff;
        margin-bottom: 15px;
        letter-spacing: 1px;
      }
    }
    .lang-box {
      display: flex;
      gap: 10px;
      align-items: center;
      flex-wrap: wrap;
      
      
      span {
        background-color: #10041c;
        color: #fff;
        font-size: 12px;
        font-style: italic;
        padding: 5px;
        border: .5px solid #00BFFF;
        border-radius: 10px;
      }
    }
    .btn-box {
      display: flex;
      gap: 30px;

      a {
        display: flex;
        align-items: center;
        gap: 7px;
        text-decoration: none;
        color: #fff;
        
        :hover {
          text-decoration: underline;
        }
      }
    }
  }
`
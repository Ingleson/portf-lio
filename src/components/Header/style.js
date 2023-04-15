import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 76px;
  padding: 0 7%;


  background-color: #10041c;

  @media (max-width: 600px) {
    padding: 0 20px;
  }
  
  .user-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    
    img {
      border-radius: 50%;
      width: 44px;
      height: 44px;
      cursor: pointer;
      transition: .5s;
      
      :hover {
        transform: scale(1.1);
        transition: .5s;
      }
    }
    p {
      font-size: 20px;
      font-style: italic;
      color: #fff;
    }
  }  
  .social-box {
    display: flex;
    align-items: center;
    gap: 35px;
    
    @media (max-width: 600px) {
      display: none;
    }

    .wpp {
      border: none;
      border-radius: 4px;
      background-color: #00BFFF;
      color: #fff;
      font-size: 16px;
      padding: 10px;
      transition: .5s;
      text-decoration: none;
      
      :hover {
        background-color: #25D366;
        transition: .5s;
        transform: none;
      }
    }

    a {
      transition: 500ms;
    }
    a:hover {
      transform: scale(1.5);
      transition: .5s;
    }

    .gh, .lk {

      svg {
        color: #fff;
      }
    }
  }
  span {
    display: none;

    svg {
      color: #fff;
    }

    @media (max-width: 600px) {
      display: flex;
    }
  }
`
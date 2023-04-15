import styled from 'styled-components';

export const ContainerTools = styled.section`
  display: flex;
  flex-direction: column;
  height: 282px;
  width: 100%;
  padding: 2.6rem 7%;
  gap: 40px;
  background-color: #10041c;

  h3 {
    font-size: 24px;
    color: #fff;
  }
  ul {
    display: flex;
    flex-direction: row;
    gap: 25px;
    overflow-x: auto;

    li {
      min-width: 140px;
      min-height: 100px;
      background-color: #fff;
      border-radius: 4px;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 70px;
        height: 70px;
        cursor: auto;
      }
    }
  }
`
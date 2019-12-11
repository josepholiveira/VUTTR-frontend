import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  button {
    align-self: flex-end;
    transition: 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    color: #2f55cc;
    border: 2px solid #2f55cc;
    border-radius: 5px;
    box-shadow: 0px 15px 20px #00000012;
    margin: 15px 10px;
    padding: 5px 10px;

    &:hover {
      background: #2f55cc;
      color: #fff;
    }
  }
`;

export const Title = styled.h3`
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

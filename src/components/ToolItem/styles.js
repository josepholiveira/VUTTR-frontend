import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 5px;
  border: 2px solid #2f55cc;
  box-shadow: 0px 15px 20px #00000012;
  border-radius: 5px;
  padding: 15px 10px;
  margin: 15px 0;

  .item-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      background: none;
      color: #f95e5a;
    }
  }

  p {
    margin-bottom: 15px;
  }

  b + b {
    margin: 0 5px;
  }
`;

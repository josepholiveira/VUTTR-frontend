import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 5px;
  border: 1px solid #333;
  padding: 15px 10px;
  margin: 15px 0;

  .item-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
    }
  }

  b + b {
    margin: 0 5px;
  }
`;

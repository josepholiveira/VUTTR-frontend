import styled from 'styled-components';
import searchIcon from 'assets/Icon-Search.svg';
import { darken } from 'polished';

export const Container = styled.div``;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .search {
    padding: 0 20px 0 35px;
    background: url(${searchIcon}) no-repeat center left 7px;
    background-color: #fff;
    background-size: 15px;
    width: 150px;
    height: 30px;
    border: 1px solid #000;
    border-radius: 5px;
  }

  label {
    margin-left: 10px;

    input {
      border-radius: 5px;
      margin-right: 10px;
    }
  }

  button {
    transition: 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 30px;
    background: #170c3a;
    color: #fff;
    border: none;
    border-radius: 5px;

    &:hover {
      background: ${darken(0.05, '#170c3a')};
    }
  }
`;

export const ToolsContainer = styled.div``;

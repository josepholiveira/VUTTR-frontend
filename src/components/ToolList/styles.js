import styled from 'styled-components';
import searchIcon from 'assets/Icon-Search.svg';

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
    border: 2px solid #2f55cc;
    border-radius: 5px;
    box-shadow: 0px 15px 20px #00000012;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    input#tag {
      display: none;

      &:checked + label {
        .box {
          border-radius: 5px;
          margin-right: 5px;
          border: 2px solid #2f55cc;

          animation: animOnTransform 1s 1 forwards;
          background: rgba(#000, 0.5);

          svg {
            transform: translate(-50%, -50%) scale(1);
            transition-duration: 200ms;
            transition-delay: 400ms;
            opacity: 1;
          }
        }
      }
    }

    label {
      display: flex;
      align-items: center;
      flex-direction: row;
      margin-left: 10px;

      .box {
        box-shadow: 0px 15px 20px #00000012;
        background: rgba(#000, 0.3);
        border: 2px solid #2f55cc;
        border-radius: 5px;
        background: #fff;
        margin-right: 5px;
        position: relative;
        width: 20px;
        height: 20px;
        transition: background 300ms ease;

        &:hover {
          background: rgba(#000, 0.5);
        }

        svg {
          position: absolute;
          top: 50%;
          left: 50%;
          font-size: 15px;
          display: inline-block;
          opacity: 0;
          pointer-events: none;
          transition: all 0.2s ease-in-out;
          transition-delay: 200ms;
          transform: translate(-50%, -50%) scale(4);
        }
      }
    }
  }

  button {
    transition: 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 30px;
    background: #fff;
    color: #2f55cc;
    border: 2px solid #2f55cc;
    border-radius: 5px;
    box-shadow: 0px 15px 20px #00000012;

    &:hover {
      background: #2f55cc;
      color: #fff;
    }
  }
`;

export const ToolsContainer = styled.div``;

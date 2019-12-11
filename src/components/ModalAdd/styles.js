import styled from 'styled-components';
import { Form, Input, Textarea } from '@rocketseat/unform';

export const Button = styled.button`
  align-self: flex-end;
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
  margin: 15px 0 0 0;

  &:hover {
    background: #2f55cc;
    color: #fff;
  }
`;

export const MyForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 0 30px;

  label {
    margin: 5px 0 0 0;
  }

  & > span {
    margin-top: 5px;
    color: #f95e5a;
  }
`;

export const MyInput = styled(Input)`
  display: block;
  width: 400px;
  height: 30px;
  padding: 12px 20px;
  margin: 10px 0 0px 0;
  border: 2px solid #2f55cc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const MyTextarea = styled(Textarea)`
  resize: none;
  width: 100%;
  height: 100px;
  padding: 12px 20px;
  margin: 15px 0 0 0;
  display: inline-block;
  border: 2px solid #2f55cc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Title = styled.h3`
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

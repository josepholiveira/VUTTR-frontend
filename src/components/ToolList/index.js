import React from 'react';

import ToolItem from 'components/ToolItem';
import { MdAdd } from 'react-icons/md';

import { Container, SearchContainer } from './styles';

export default function ToolList() {
  return (
    <Container>
      <SearchContainer>
        <div>
          <input type="text" className="search" />

          <label htmlFor="tag">
            <input id="tag" type="checkbox" />
            search in tags only
          </label>
        </div>

        <button type="button">
          <MdAdd /> Add
        </button>
      </SearchContainer>
      <ToolItem />
    </Container>
  );
}

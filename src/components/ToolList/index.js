import React, { useState, useEffect } from 'react';

import ToolItem from 'components/ToolItem';
import { MdAdd } from 'react-icons/md';

import api from 'services/api';

import { Container, SearchContainer, ToolsContainer } from './styles';

export default function ToolList() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    async function searchTools() {
      const { data } = await api.get('/tools');

      setTools(data);
      console.log(data);
    }

    searchTools();
  }, []);

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

      <ToolsContainer>
        {tools.map(tool => (
          <ToolItem key={tool.id} tool={tool} />
        ))}
      </ToolsContainer>
    </Container>
  );
}

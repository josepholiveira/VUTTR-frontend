/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';

import ToolItem from 'components/ToolItem';
import { MdAdd, MdCheck } from 'react-icons/md';

import api from 'services/api';

import { Container, SearchContainer, ToolsContainer } from './styles';

export default function ToolList() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    async function searchTools() {
      const { data } = await api.get('/tools');

      setTools(data);
    }

    searchTools();
  }, []);

  return (
    <Container>
      <SearchContainer>
        <div>
          <input type="text" className="search" placeholder="search" />

          <div>
            <input id="tag" type="checkbox" />
            <label htmlFor="tag">
              <div className="box">
                <MdCheck color="#2F55CC" />
              </div>
              search in tags only
            </label>
          </div>
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

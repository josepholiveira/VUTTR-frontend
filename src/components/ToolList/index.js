/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ModalAdd from 'components/ModalAdd';

import ToolItem from 'components/ToolItem';
import { MdAdd, MdCheck } from 'react-icons/md';

import { Container, SearchContainer, ToolsContainer } from './styles';

import * as ToolActions from '../../store/modules/tools/actions';

export default function ToolList() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const [modalStatus, setModalStatus] = useState(false);
  const [searchOnlyTags, setSearchOnlyTags] = useState('');
  const tools = useSelector(state => state.tools);

  useEffect(() => {
    dispatch(ToolActions.searchToolsRequest());
  }, [dispatch]);

  function searchToolsSubmit(e) {
    e.preventDefault();
    const searchParams = { searchOnlyTags, searchValue };

    dispatch(ToolActions.searchToolsRequest(searchParams));
  }

  function toggleModalAdd() {
    setModalStatus(!modalStatus);
  }

  return (
    <Container>
      <SearchContainer>
        <form onSubmit={searchToolsSubmit}>
          <input
            type="text"
            className="search"
            placeholder="search"
            onChange={event => setSearchValue(event.target.value)}
          />

          <div>
            <input
              id="tag"
              type="checkbox"
              onChange={event => setSearchOnlyTags(event.target.checked)}
            />
            <label htmlFor="tag">
              <div className="box">
                <MdCheck color="#2F55CC" />
              </div>
              search in tags only
            </label>
          </div>
        </form>

        <button type="button" onClick={() => toggleModalAdd()}>
          <MdAdd /> Add
        </button>
      </SearchContainer>

      <ToolsContainer>
        {tools.map(tool => (
          <ToolItem
            key={tool.id}
            tool={tool}
            search={searchValue}
            onlyTags={searchOnlyTags}
          />
        ))}
      </ToolsContainer>

      <ModalAdd isOpen={modalStatus} />
    </Container>
  );
}

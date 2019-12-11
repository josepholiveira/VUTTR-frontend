import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MdClose } from 'react-icons/md';
import { Container, Tag } from './styles';

import ModalRemove from '../ModalRemove';

export default function ToolItem({ tool, search, onlyTags }) {
  const [modalStatus, setModalStatus] = useState(false);

  function toggleModalRemove() {
    setModalStatus(!modalStatus);
  }

  return (
    <>
      <Container>
        <div className="item-header">
          <a href={tool.link} target="_blank" rel="noopener noreferrer">
            <h2>{tool.title}</h2>
          </a>
          <button type="button" onClick={() => toggleModalRemove()}>
            <MdClose /> <span>remove</span>
          </button>
        </div>
        <p>{tool.description}</p>

        {tool.tags.map(tag => (
          <Tag key={tag} tag={tag} search={search} onlyTags={onlyTags}>
            #{tag}
          </Tag>
        ))}

        <ModalRemove isOpen={modalStatus} tool={tool} />
      </Container>
    </>
  );
}

ToolItem.defaultProps = {
  search: '',
};

ToolItem.propTypes = {
  tool: PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  search: PropTypes.string,
  onlyTags: PropTypes.bool.isRequired,
};

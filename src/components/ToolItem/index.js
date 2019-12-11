import React, { useState } from 'react';

import { MdClose } from 'react-icons/md';
import { Container } from './styles';

import ModalRemove from '../ModalRemove';

export default function ToolItem({ tool }) {
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
          <b key={tag}>#{tag}</b>
        ))}

        <ModalRemove isOpen={modalStatus} tool={tool} />
      </Container>
    </>
  );
}

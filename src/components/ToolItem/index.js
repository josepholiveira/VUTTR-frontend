import React, { useEffect } from 'react';

import { MdClose } from 'react-icons/md';
import { Container } from './styles';

export default function ToolItem({ tool }) {
  return (
    <Container>
      <div className="item-header">
        <a href={tool.link} target="_blank">
          <h2>{tool.title}</h2>
        </a>
        <button type="button">
          <MdClose /> <span>remove</span>
        </button>
      </div>
      <p>{tool.description}</p>

      {tool.tags.map(tag => (
        <b>#{tag}</b>
      ))}
    </Container>
  );
}

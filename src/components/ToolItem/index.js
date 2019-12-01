import React, { useEffect } from 'react';

import { MdClose } from 'react-icons/md';
import { Container } from './styles';

export default function ToolItem({ tool }) {
  useEffect(() => {
    console.log(tool == undefined);
  }, [tool]);

  return (
    <Container>
      <div className="item-header">
        <a href={tool.link} target="_blank">
          <h2>{tool.title}</h2>
        </a>
        <div>
          <MdClose /> remove
        </div>
      </div>
      <p>{tool.description}</p>

      {tool.tags.map(tag => (
        <b>#{tag}</b>
      ))}
    </Container>
  );
}

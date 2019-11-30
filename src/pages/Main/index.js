import React from 'react';

import Header from 'components/Header';
import ToolList from 'components/ToolList';
import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <ToolList />
    </Container>
  );
}

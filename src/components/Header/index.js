import React from 'react';

import { Container, LogoText, DescriptionText } from './styles';

export default function Header() {
  return (
    <Container>
      <LogoText>VUTTR</LogoText>
      <DescriptionText>Very Useful Tools to Remember</DescriptionText>
    </Container>
  );
}

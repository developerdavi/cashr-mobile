import React from 'react';

import Container from './Container';
import Title from './Title';
import MenuButton from './MenuButton';

export default function Header({ children }) {
  return (
    <Container
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 0
      }}
    >
      <MenuButton />
      <Container
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1
        }}
      >
        <Title size={28}>{children}</Title>
      </Container>
    </Container>
  );
}

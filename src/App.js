import React from 'react';

import { PageWrapper } from './state';

import Toggle from './components/Toggle';
import Inc from './components/Inc';
import { Card, CardGrid, Container, Header } from './Elements';
import Menu from './Menu';
import Mount from './components/Mount';
import Hover from './components/Hover';
import Nav from './components/Nav';
import Cookie from './components/Cookie';
import Script from './components/Script';
import Local from './components/Local';
import Theme from './components/Theme';

import blue from './blue.png';
import purp from './purp.png';
import black from './black.png';
import green from './green.png';

import './App.css';

function App() {
  return (
    <PageWrapper>
      <Header>
        <Menu />
        <h1>Header</h1>
      </Header>
      <Nav />
      <Container>
        <h2>Super Cool</h2>
        <Theme />
        <Script />
        <Toggle />
        <Inc />
        <Mount />
        <Cookie />
        <Local />
        <Hover />
        <CardGrid>
          <Card style={{ background: 'var(--purp)' }}>
            <h3>Some card</h3>
            <img src={purp} alt="text" />
          </Card>
          <Card style={{ background: 'var(--blue)' }}>
            <h3>Some card</h3>
            <img src={blue} alt="text" />
          </Card>
          <Card style={{ background: 'var(--black)' }}>
            <h3>Some card</h3>
            <img src={black} alt="text" />
          </Card>
          <Card style={{ background: 'var(--green)' }}>
            <h3>Some card</h3>
            <img src={green} alt="text" />
          </Card>
        </CardGrid>
      </Container>
    </PageWrapper>
  );
}

export default App;

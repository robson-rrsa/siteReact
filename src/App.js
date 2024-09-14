import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Aside from './components/Aside';
import Footer from './components/Footer';
import { AppContainer, Content, MainContainer } from './styles/global';

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Content>
        <Nav />
        <MainContainer>
          <Main />
          <Aside />
        </MainContainer>
      </Content>
      <Footer />
    </AppContainer>
  );
};

export default App;

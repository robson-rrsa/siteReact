import React from 'react';
import Card from '../Card';
import { MainWrapper, FeaturedSection, CardsContainer } from './style';

const Main = () => {
  return (
    <MainWrapper>
      <FeaturedSection>
        <h3>HQs Recentes</h3>
      </FeaturedSection>
      <CardsContainer>
        <Card
          imageSrc="/images/boku.jpg"
          titulo="Boku no Hero"
          descricao="Focado em heróis"
        />
         <Card
          imageSrc="/images/boku.jpg"
          titulo="Boku no Hero"
          descricao="Focado em heróis"
        />
         <Card
          imageSrc="/images/boku.jpg"
          titulo="Boku no Hero"
          descricao="Focado em heróis"
        />
         <Card
          imageSrc="/images/boku.jpg"
          titulo="Boku no Hero"
          descricao="Focado em heróis"
        />
         <Card
          imageSrc="/images/boku.jpg"
          titulo="Boku no Hero"
          descricao="Focado em heróis"
        />
         <Card
          imageSrc="/images/boku.jpg"
          titulo="Boku no Hero"
          descricao="Focado em heróis"
        />
      </CardsContainer>
    </MainWrapper>
  );
};

export default Main;

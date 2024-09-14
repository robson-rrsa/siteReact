import styled from 'styled-components';

export const MainWrapper = styled.main`
  padding: 2em;
  background-color: #f8f9fa; /* Cinza claro */
`;

export const FeaturedSection = styled.section`
  margin-bottom: 2em;
  h3 {
    color: #000000; /* Preto */
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  padding: 0;
`;

import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  flex: 1;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

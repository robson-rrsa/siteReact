import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: #ffffff; /* Branco */
  border: 1px solid #343a40; /* Cinza escuro para bordas */
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: 1em;
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 1em;
  text-align: center;

  h3 {
    margin: 0;
    font-size: 1.2em;
    color: #000000; /* Preto */
  }

  p {
    margin: 0;
    color: #666666; /* Cinza claro */
    font-size: 0.9em;
  }
`;

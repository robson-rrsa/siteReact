import React from 'react';
import { CardWrapper, CardImage, CardContent } from './style';

const Card = ({ imageSrc, titulo, descricao }) => {
  return (
    <CardWrapper>
      <CardImage src={imageSrc} alt={titulo} />
      <CardContent>
        <h3>{titulo}</h3>
        <p>{descricao}</p>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;

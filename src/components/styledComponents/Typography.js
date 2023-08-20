import { styled } from 'styled-components';

//Definition of the different font styles used in the application

export const Heading2 = styled.h2`
  font-weight: 500;
`;

export const Paragraph1 = styled.p`
  font-size: 0.9rem;
  font-weight: 500;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const Paragraph2 = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.green};

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export const LightText = styled.span`
  font-size: 1rem;
  font-weight: 300;
  line-height: 2;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

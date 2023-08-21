import { styled } from 'styled-components';

/**
 * H1 object wiyh styles.
 */
export const Heading1 = styled.h1`
  font-size: 2rem;
  text-align: ${(props) => props.$align || 'left'};
`;

/**
 * H2 object wiyh styles.
 */
export const Heading2 = styled.h2`
  font-weight: 500;
`;

/**
 * Title inherited from heading2 and uppercase.
 * @return {React.ReactElement} StyledHeading2
 */
export const StyledHeading2 = styled(Heading2)`
  text-transform: uppercase;
  text-align: end;
  margin-right: 10px;
`;

/**
 * H3 object wiyh styles.
 */
export const Heading3 = styled.h3`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 10px;
  text-align: ${(props) => props.$align || 'left'};
`;

/**
 * Paragraph1 object wiyh styles.
 */
export const Paragraph1 = styled.p`
  font-size: 0.9rem;
  font-weight: 500;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

/**
 * Paragraph2 object wiyh styles.
 */
export const Paragraph2 = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.green};

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

/**
 * Span object wiyh styles-LightText.
 */
export const LightText = styled.span`
  font-size: 1rem;
  font-weight: 300;
  line-height: 2;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

/**
 * Paragraph object wiyh styles-BigText.
 */
export const BigText = styled.p`
  font-size: 1.5rem;
`;

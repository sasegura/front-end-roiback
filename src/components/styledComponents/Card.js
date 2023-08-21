import styled from 'styled-components';
import { Container } from './Container';

//Card styles: container elements that have a shadow and can contain title and sections
export const Card = styled.div`
  box-shadow: 0px 1.5px 3px 0px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  margin-top: 20px;
  margin-bottom: 20px;
  min-width: ${(props) => props.$minWidth};

  div:last-child {
    border: none;
  }
`;

//styles of the title section of a card
export const CardTitle = styled.div`
  background-color: ${({ theme }) => theme.colors.darkTeal};
  color: ${({ theme }) => theme.colors.white};
  padding: 15px;
  padding-left: 20px;
`;

//styles of a section of the card that has a border at the bottom
export const CardSectionBorder = styled(Container)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  padding: 15px;
  padding-top: ${(props) => props.$paddingY || '15px'};
  padding-bottom: ${(props) => props.$paddingY || '15px'};
  padding-left: ${(props) => props.$paddingL || '15px'};

  @media (max-width: 600px) {
    padding-left: 15px;
  }
`;

/**
 * Centered CardSectionBorder component.
 * @return {React.ReactElement} StyledCardSectionBorder
 */
export const CardSectionBorderTextAlignCenter = styled(CardSectionBorder)`
  text-align: center;
  padding-top: 75px;
`;

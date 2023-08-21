import { IoMdCheckmarkCircle } from 'react-icons/io';
import { styled } from 'styled-components';
import { Heading2 } from '../../components/styledComponents/Typography';
import { CardSectionBorder } from '../../components/styledComponents/Card';

/**
 * Big green check icon
 * @return {React.ReactElement} GreenCheckIcon
 */
export const GreenCheckIcon = styled(IoMdCheckmarkCircle)`
  color: ${({ theme }) => theme.colors.lightGreen};
  height: 150px;
  width: 150px;
  margin-bottom: 20px;
  text-align: center;
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
 * Centered CardSectionBorder component.
 * @return {React.ReactElement} StyledCardSectionBorder
 */
export const StyledCardSectionBorder = styled(CardSectionBorder)`
  text-align: center;
  padding-top: 75px;
`;

import { styled } from 'styled-components';
import { CiCalendar } from 'react-icons/ci';
import { IoMdCheckmarkCircle } from 'react-icons/io';

//Small Calendar Icon
export const CalendarIcon = styled(CiCalendar)`
  width: 25px;
  height: 25px;
  transform: translate(-2px, 7px);
  margin-right: 10px;
`;

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

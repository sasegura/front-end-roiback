import { styled } from 'styled-components';
import { CiCalendar } from 'react-icons/ci';

//Small Calendar Icon
export const StyledCalendarIcon = styled(CiCalendar)`
  width: 25px;
  height: 25px;
  transform: translate(-2px, 7px);
  margin-right: 10px;
`;

//Date range container
export const DateRange = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
  padding-bottom: 4px;
`;

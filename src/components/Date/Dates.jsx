import { DatesParse } from '../../utils/utilFunctions';
import { LightText } from '../styledComponents/Typography';

/**
 * Dates in and out interval.
 * @param {String} dateIn - Card's title
 * @param {String} dateOut - Set of rooms
 * @return {React.ReactElement} Dates interval
 */
const Dates = ({ dateIn, dateOut }) => (
  <LightText>{`${DatesParse(dateIn, dateOut)}`}</LightText>
);
export default Dates;

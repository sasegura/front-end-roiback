import React from 'react';
import { Card, CardSectionBorder, CardTitle } from '../styledComponents/Card';
import { Button } from '../styledComponents/Button';
import { CenterFlexItem, FlexContainer } from '../styledComponents/Container';
import {
  Heading2,
  Paragraph1,
  Paragraph2,
} from '../styledComponents/Typography';
import { capitalizeString } from '../../utils/utilFunctions';

/**
 * Room card info.
 * @summary Show rooms information by iterateting all rooms
 * @param {String} title - Card's title
 * @param {Array} rooms - Set of rooms
 * @param {function} handleSelectedRoom - Callback function to handle selected room
 * @return {React.ReactElement} Rooms info
 */
const RoomCardInfo = ({ title, rooms, handleSelectedRoom }) => {
  return (
    <Card>
      <CardTitle>
        <Heading2>{title}</Heading2>
      </CardTitle>
      {rooms?.map((room, index) => (
        <CardSectionBorder
          key={`room${index}`}
          $paddingY="30px"
          $paddingL="20px"
        >
          <FlexContainer $gap={'10px'}>
            <CenterFlexItem $flex={3}>
              <Paragraph1>{capitalizeString(room.name)}</Paragraph1>
            </CenterFlexItem>
            <CenterFlexItem $flex={1} $align={'center'}>
              <Paragraph2>${room.price}</Paragraph2>
            </CenterFlexItem>
            <CenterFlexItem $flex={1} $align={'center'}>
              <Button onClick={() => handleSelectedRoom(room)}>Reservar</Button>
            </CenterFlexItem>
          </FlexContainer>
        </CardSectionBorder>
      ))}
    </Card>
  );
};

export default RoomCardInfo;

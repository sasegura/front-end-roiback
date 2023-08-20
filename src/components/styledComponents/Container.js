import styled from 'styled-components';

//Block container that will be 100% of the parent element
export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  display: block;
  padding: 50px 15px;
  max-width: 900px;

  @media (max-width: 600px) {
    max-width: 600px;
    padding: 35px 25px;
  }
`;

//Flex container with the option to define the spacing between its elements through
export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${(props) => props.$gap || 0};
`;

//Flex item with the option of defining the alignment of the text and the size it will take up inside the flex container
export const FlexItem = styled.div`
  flex: ${(props) => props.$flex || 1};
  text-align: ${(props) => props.$align || 'left'};
`;

//Vertically centered flex item that inherits from the FlexItem
export const CenterFlexItem = styled(FlexItem)`
  margin: auto;
`;

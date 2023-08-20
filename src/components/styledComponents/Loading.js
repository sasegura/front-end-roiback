import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { keyframes, styled } from 'styled-components';

/* Loading rotate styles */
export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

/**
 * Loading icon styles.
 * @return {React.ReactElement} Loading Icon
 */
export const LoadingIcon = styled(AiOutlineLoading3Quarters)`
  display: block;
  height: ${(props) => props.height || '42px'};
  width: ${(props) => props.height || '42px'};
`;

/**
 * Loading container styles.
 * @return {React.ReactElement} Loading container
 */
export const LoadingContainer = styled.div`
  color: ${(props) =>
    props.$light
      ? ({ theme }) => theme.colors.white
      : ({ theme }) => theme.colors.green};
  animation: 1.4s linear 0s infinite normal none running ${rotate};
  display: inline-block;
  height: ${(props) => props.height || '42px'};
  width: ${(props) => props.height || '42px'};
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

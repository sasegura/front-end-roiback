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

/* Loading icon styles */
export const LoadingIcon = styled(AiOutlineLoading3Quarters)`
  display: block;
  height: 42px;
  width: 42px;
`;

/* Loading container styles */
export const LoadingContainer = styled.div`
  color: ${({ theme }) => theme.colors.green};
  animation: 1.4s linear 0s infinite normal none running ${rotate};
  display: inline-block;
  height: 42px;
  width: 42px;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

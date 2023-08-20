import styled from 'styled-components';

//Styles of the green button element
export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  outline: 0px;
  border: 0px;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6px 16px;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  height: 33px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGreen};
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;

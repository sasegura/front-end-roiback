import { styled } from 'styled-components';
import { Button } from '../styledComponents/Button';

/**
 * Form with its inputs organized vertically.
 * @return {React.ReactElement} Styled Form
 */
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px 0;
  min-width: 300px;
`;

/**
 * Input styles.
 * @param {Boolean} $error - Indicates if there is an error in the data inserted in the input.
 * @return {React.ReactElement} Styled Input
 */
export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border: none;
  border-bottom: 1px solid
    ${(props) =>
      props.$error
        ? ({ theme }) => theme.colors.red
        : ({ theme }) => theme.colors.darkGrey};
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 15px 15px 5px 15px;
  width: calc(100% - 30px);
  height: 30px;
  transition: border 0.2s ease;

  &:focus {
    outline: none;
    border-bottom: 2px solid
      ${(props) =>
        props.$error
          ? ({ theme }) => theme.colors.red
          : ({ theme }) => theme.colors.green};
  }
`;

/**
 * Select styles.
 * @param {Boolean} $error - Indicates if there is an error in the data inserted in the select.
 * @return {React.ReactElement} Styled Select
 */
export const Select = styled.select`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border: none;
  border-bottom: 1px solid
    ${(props) =>
      props.$error
        ? ({ theme }) => theme.colors.red
        : ({ theme }) => theme.colors.darkGrey};
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 15px 15px 5px 11px;
  width: 100%;
  height: 50px;

  &:focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.green};
  }
`;

/**
 * Check styles.
 * @param {Boolean} $error - Indicates if there is an error in the check.
 * @return {React.ReactElement} Styled Check
 */
export const Check = styled.input`
  height: 20px;
  width: 20px;
  transform: translateY(4px);
  margin-right: 20px;

  &:before {
    display: block;
    content: '';
    border: 1px solid
      ${(props) => (props.$error ? ({ theme }) => theme.colors.red : 'none')};
    height: 18px;
    width: 18px;
    border-radius: 3px;
    transition: border 0.2s ease;
  }
`;

/**
 * Small label style.
 * @return {React.ReactElement} Styled Label
 */
export const Label = styled.label`
  font-size: 10px;
  color: #777;
  position: absolute;
  left: 3px;
  top: -1px;
  transform: translate(12px, 7px) scale(1);
`;

/**
 * Red error message.
 * @return {React.ReactElement} Styled Text
 */
export const ErrorMessageStyled = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-size: 12px;
`;

/**
 * Form field container with the option of defining the height.
 * @param {String} $height - The height of the Form field container.
 * @return {React.ReactElement} Form field container
 */
export const FormField = styled.div`
  position: relative;
  height: ${(props) => props.$height || '65px'};
`;

/**
 * Button inheriting from Button component with increased height.
 * @return {React.ReactElement} Styled Form Button
 */
export const FormButton = styled(Button)`
  height: 45px;
`;

/**
 * Button inheriting from Form Button component and has a disabled style.
 * @return {React.ReactElement} Styled Disabled Form Button
 */
export const DisabledFormButton = styled(FormButton)`
  cursor: default;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
      rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  }
`;

import { UseFormRegisterReturn } from 'react-hook-form';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface IInputsProps {
  label: string;
  register: UseFormRegisterReturn<string>;
  errors?: string | undefined;
}

const Input = ({ label, register, errors }: IInputsProps) => (
  <fieldset>
    <StyledTextField label={label} {...register} type='text' />
    <StyledParagraph fontColor='red'>
      {errors ? <p>{errors}</p> : null}
    </StyledParagraph>
  </fieldset>
);

export default Input;

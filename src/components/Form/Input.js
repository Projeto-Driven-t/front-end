import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import InputMask from 'react-input-mask';

export default function Input({
  mask = '',
  maskChar = '',
  formatChars,
  variant = 'outlined',
  value = '',
  onFocus,
  onChange = () => 0,
  ...props
}) {
  return mask || maskChar ? (
    <InputMask
      mask={mask}
      maskChar={maskChar}
      value={value}
      onFocus={onFocus}
      onChange={onChange}
      {...(formatChars && { formatChars })}
    >
      {() => <StyledTextField {...props} variant={variant} />}
    </InputMask>
  ) : (
    <StyledTextField {...props} value={value} onFocus={onFocus} onChange={onChange} variant={variant} />
  );
}

const StyledTextField = styled(TextField)`
  margin-top: 8px !important;
`;

import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export default function ButtonTypography({ text }) {
  return <StyledTypography variant="h6">{text}</StyledTypography>;
}

const StyledTypography = styled(Typography)`
  font-size: 14px !important; 
  font-weight: 500 !important;
  color: #000000;
`;

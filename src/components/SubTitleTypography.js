import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export default function SubTitleTypography({ title }) {
  return <StyledTypography variant="h6">{title}</StyledTypography>;
}

const StyledTypography = styled(Typography)`
  margin-bottom: 17px !important;
  color: #8e8e8e;
`;

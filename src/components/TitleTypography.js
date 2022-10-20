import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export default function TitleTypography({ title }) {
  return <StyledTypography variant="h4">{title}</StyledTypography>;
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export default function EventMode() {
  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

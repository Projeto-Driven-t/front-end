import { BsFillCheckCircleFill } from 'react-icons/bs';
import styled from 'styled-components';

export default function ConfirmedPayment() {
  return (
    <Container>
      <BsFillCheckCircleFill />
      <ConfirmedInfo>
        <h5>Pagamento confirmado!</h5>
        <h6>Prossiga para escolha de hospedagem e atividades</h6>
      </ConfirmedInfo>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  svg {
    width: 44px;
    height: 44px;
    color: #36b853;
  }
`;

const ConfirmedInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: 16px;
  line-height: 18.75px;
  color: #454545;

  h5 {
    font-weight: 700;
  }
`;

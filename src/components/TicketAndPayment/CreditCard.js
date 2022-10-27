import 'react-credit-cards/es/styles-compiled.css';
import Cards from 'react-credit-cards';
import styled from 'styled-components';

export default function CreditCard({ name, cardNumber, expirationDate, cvc, focus }) {
  return (
    <CardContainer>
      <Cards name={name} number={cardNumber} expiry={expirationDate} cvc={cvc} focused={focus} />
    </CardContainer>
  );
}

const CardContainer = styled.div`
  .rcss {
    margin: 0;
  }
`;

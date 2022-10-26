import useSavePayment from '../../hooks/api/useSavePayment';
import usePaymentForm from '../../hooks/usePaymentForm';
import styled from 'styled-components';
import CreditCard from './CreditCard';
import Button from '../Form/Button';
import Input from '../Form/Input';
import { InputWrapper } from '../PersonalInformationForm/InputWrapper';

export default function PaymentInfo() {
  const { savePaymentLoading } = useSavePayment();
  const { values, handleChange, handleFocus, handleSubmit } = usePaymentForm();

  return (
    <PaymentWrapper onSubmit={(event) => handleSubmit(event)}>
      <CreditCardContainer>
        <CreditCard
          name={values.name}
          cardNumber={values.cardNumber}
          expirationDate={values.expirationDate}
          cvc={values.cvc}
          focus={values.focus}
        />
        <PaymentForm>
          <InputWrapper>
            <Input
              label="Número do Cartão"
              name="cardNumber"
              type="text"
              value={values.cardNumber}
              onChange={handleChange}
              onFocus={handleFocus}
              mask="9999 9999 9999 9999"
              size="small"
              required
            />
          </InputWrapper>
          <CardNumberExample>E.g.: 49...,51...,36...,37...</CardNumberExample>
          <InputWrapper>
            <Input
              label="Nome"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              onFocus={handleFocus}
              size="small"
              required
            />
          </InputWrapper>
          <CardWrapper>
            <InputWrapper>
              <Input
                label="Data de Expiração"
                name="expirationDate"
                type="text"
                value={values.expirationDate}
                onChange={handleChange}
                onFocus={handleFocus}
                mask="99/99"
                size="small"
                required
              />
            </InputWrapper>
            <CvcWrapper>
              <InputWrapper>
                <Input
                  label="CVC"
                  name="cvc"
                  type="text"
                  value={values.cvc}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  mask="9999"
                  size="small"
                  required
                />
              </InputWrapper>
            </CvcWrapper>
          </CardWrapper>
        </PaymentForm>
      </CreditCardContainer>

      <SubmitContainer>
        <Button type="submit" disabled={savePaymentLoading}>
          Finalizar Pagamento
        </Button>
      </SubmitContainer>
    </PaymentWrapper>
  );
}

const PaymentWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const CreditCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 10px;
`;

const PaymentForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 350px;
`;

const CardNumberExample = styled.h6`
  color: #8e8e8e;
`;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0 10px;
`;

const CvcWrapper = styled.div`
  width: 35%;
`;

const SubmitContainer = styled.div`
  margin-top: 40px !important;
  width: 100% !important;

  > button {
    margin-top: 0 !important;
  }
`;

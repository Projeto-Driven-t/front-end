import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import api from '../../../services/api';
import useToken from '../../../hooks/useToken';
import Card from './component';

export default function Payment() {
  const token = useToken();
  const [payment, setPayment] = useState(false);

  useEffect(() => {
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    const promise = api.get('/payment', config);
    promise.then(() => {
      setPayment(true);
    });
    promise.catch(err => {
      console.log(err);
    });
  });
 
  return (
    <> {payment ?
      <PaymentConfirm>
        <ion-icon name="checkmark-circle-sharp"></ion-icon>
        <div className="message">
          <h1>Pagamento Confirmado!</h1>
          Prossiga para escolha de hospedagem e atividades
        </div>
      </PaymentConfirm>
      :
      <Card token={token} setPayment={setPayment}/>
    }</>
  );
}

const PaymentPage = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 gap: 50px;

 #PaymentForm {
  width: 100%;
  display: flex;
  gap: 10px;

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 14px;

      .cardNumber {
        display: flex;
        flex-direction: column;
        gap: 5px;
        p {
          color: #BABBBB;
        }
      }
      .flex {
        display: flex;
        gap: 20px;
      }

      input {
        width: 100%;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #616161;
      
        padding-left: 10px;
      }
      input::placeholder {
        font-size: 14px;
        color: #BABBBB;
      }
    }
  }
  button {
    width: 182px;
    height: 37px;
    border: none;
    border-radius: 4px;
    background-color: #E0E0E0;

    font-size: 13px;
    font-weight: 500;
  }
 
 /* form {
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 50px;
  
   .flex {
     display: flex;
     gap: 30px;
 
     .cardNumber {
       display: flex;
       flex-direction: column;
       gap: 5px;
       p {
         color: #BABBBB;
       }
     }
    
     input {
       width: 100%;
       height: 45px;
       border-radius: 5px;
       border: 1px solid #616161;
      
       padding-left: 10px;
     }
     input::placeholder {
       font-size: 16px;
       color: #BABBBB;
     }
 
     .flex {
       display: flex;
       gap: 20px;
     }
   }
 
   button {
     width: 182px;
     height: 37px;
     border: none;
     border-radius: 4px;
     background-color: #E0E0E0;
 
     font-size: 13px;
     font-weight: 500;
   }
 } */
`;
 
// const Card = styled.div`
//  width: 100%;
//  height: 190px;
//  background-color: #929292;
//  border: none;
//  border-radius: 15px;
// `;
 
// const InfoCard = styled.div`
//  width: 100%;
//  height: 100%;
//   display: flex;
//  flex-direction: column;
//  gap: 14px;
// `;
 
const PaymentConfirm = styled.div`
 width: 100%;
 display: flex;
 align-items: center;
 
 ion-icon {
   font-size: 44px;
   color: green;
 }
 
 h1 {
   font-weight: 700;
 }
`;

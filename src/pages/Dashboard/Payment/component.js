import React from 'react';
import Cards from 'react-credit-cards';
import styled from 'styled-components';
import 'react-credit-cards/es/styles-compiled.css';
import useToken from '../../../hooks/useToken';
import api from '../../../services/api';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';

export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };
 
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <PaymentPage>
        <div id="PaymentForm">
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
          <form>
            <div className="cardNumber">
              <input
                type="tel"
                name="number"
                placeholder="Card Number"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <p>E.g.: 49...., 51...., 36...., 37....</p>
            </div>
            <input
              type="string"
              name="name"
              placeholder="Name"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <div className="flex">
              <input
                type="number"
                name="expiry"
                placeholder="Valid Thru"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <input
                type="number"
                name="cvc"
                placeholder="CVC"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
          </form>
        </div>
        <button onClick={() => finalizePayment()}>FINALIZAR PAGAMENTO</button>
      </PaymentPage>
    );
  }
}

function finalizePayment() {
  const token = useToken();
  const [payment, setPayment] = useState(false);
  
  const body = { cardNumber: 1, name: 1, validThru: 1 };
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };

  const promise = api.post('/payment', body, config);
  promise.then(() => {
    setPayment(true);
    toast('Pagamento realizado com sucesso');
  });
  promise.catch(err => {
    console.log(err);
    toast('Deu erro');
  });
};

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
 
// const PaymentConfirm = styled.div`
//  width: 100%;
//  display: flex;
//  align-items: center;
 
//  ion-icon {
//    font-size: 44px;
//    color: green;
//  }
 
//  h1 {
//    font-weight: 700;
//  }
// `;

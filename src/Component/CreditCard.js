import { Fragment, useState } from "react";
import CardInfo from "./CardInfo";
import List from "./List";
import  "./CreditCard.module.css";

const CreditCard = (props) => {
  const [creditCardNumbers, setCreditCardNumber] = useState([]);
  const addCredential = (ccNumber) => {  
      if(ccNumber.length < 16){
          return
      }  
    const cct = { id: ccNumber.substring(0, 5), number: ccNumber };
    setCreditCardNumber((prevState) => [...prevState, cct]);
  };
  const deleteHandler= (id) => {
    const newCred = creditCardNumbers.filter(element =>{
        if(element.id !== id){
            return element;
        }
    })
    setCreditCardNumber(newCred)
  }
  const lists = creditCardNumbers.map(ccnumber => <List key={ccnumber.id} 
    id={ccnumber.id} ccNumber={ccnumber.number}
    onclick={deleteHandler}
    />)
  return (
    <Fragment>
      <h1>Enter Credit Card</h1>
      <CardInfo onclick={addCredential} />
        {lists}
    </Fragment>
  );
};

export default CreditCard;

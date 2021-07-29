import React , {useState, useEffect} from 'react';

export default function Dealer ({cardDeck}){
  const [dealerCard , setDealerCard ] = useState('Deck is loading')

  useEffect(()=>{
    setDealerCard(cardDeck[0])

  },[dealerCard])





  return(
  <>
  <div className = "card1">the value of the dealer's card is : {dealerCard.value} , {dealerCard.suit} </div>
  </>
  )





}

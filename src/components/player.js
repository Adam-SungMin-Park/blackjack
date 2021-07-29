import React , {useState, useEffect} from 'react';

export default function Player ({cardDeck}){
  const [dealerCard , setDealerCard ] = useState('Deck is loading')

  useEffect(()=>{
    setDealerCard(cardDeck[22])

  },[dealerCard])





  return(
  <>
  <div className = "card1">the value of the player's card is : {dealerCard.value} , {dealerCard.suit} </div>
  </>
  )





}

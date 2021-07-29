import React , {useState, useEffect} from 'react';

export default function Dealer ({cardDeck}){
  const [playerCard , setPlayerCard ] = useState('Deck is loading')

  useEffect(()=>{

    for(let i = 0 ; i < cardDeck.length ; i++){
      let card1 = Math.floor((Math.random()*cardDeck.length))
      let card2 = Math.floor((Math.random()*cardDeck.length))


    setPlayerCard([cardDeck[card1],cardDeck[card2]])
    }


  },[cardDeck])





  return(
  <>
  <div className = "card1">the value of the player's card is : {playerCard[0].value} , {playerCard[0].suit}  {playerCard[1].value} , {playerCard[1].suit}  </div>
  </>
  )





}

import React , {useState, useEffect} from 'react';

export default function Dealer ({cardDeck}){
  const [dealerCard , setDealerCard ] = useState(['Deck is loading'])

  useEffect(()=>{
     for(let i = 0 ; i < cardDeck.length ; i++){
      let card1 = Math.floor((Math.random()*cardDeck.length))
      let card2 = Math.floor((Math.random()*cardDeck.length))


    setDealerCard([cardDeck[card1],cardDeck[card2]])
    }


  },[cardDeck])

 console.log(dealerCard)



  return(
  <>
  <div className = "dealerTable">the value of the dealer's card is :
    {dealerCard.map((card,index)=>{
      return (
        <div className = "dealerCard" key = {index} >{card.suit} {card.value} </div>
      )
    })}
    </div>
  </>
  )





}

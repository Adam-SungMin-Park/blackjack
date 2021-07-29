import React , {useState, useEffect} from 'react';

export default function Dealer ({card}){
  const [playerCard , setPlayerCard ] = useState(card)
  useEffect(()=>{
    setPlayerCard(card);



  },[card])

  console.log(playerCard)
  if(playerCard === undefined){
    return(
    <>
    <div className = "card1">the value of the player's card is :


    </div>
    </>
    )

  }
  else{
     return(
    <>
    <div className = "playerTable">the value of the player's card is :
      {playerCard.map((card,index)=>{
        return(
          <div className = "playerCard" key = {index}>
            {card.suit} {card.value}
            </div>
        )
      })}

    </div>
    </>
    )
  }





}

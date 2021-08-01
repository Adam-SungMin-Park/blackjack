import React from 'react';

export default function Result({playerScore, dealerScore,playerCard}) {
  if(playerCard.length <3 && playerScore ===21){
    return (
      <div className ="result">
        Player BlackJack!
      </div>
    )
  }
  if(dealerScore === 21){
    return (
      <div className ="result">
       Dealer BlackJack!
      </div>
    )
  }

  if(playerCard.length <3 || playerScore < 21 ){
    return(
      <div className = "result">
        Game
      </div>
    )
  }

  if(playerCard.length >=3 && playerScore > 21){
    return (
      <div className ="result">
        Dealer Win
      </div>
    )
  }
  if(playerCard.length >=3 && dealerScore > 21){
    return (
      <div className ="result">
        Player Win
      </div>
    )
  }


}

import React from 'react';

export default function Result({playerScore, dealerScore,playerCard}) {
  if(playerCard.length <3  ){
    return(
      <div className = "result">
        Game
      </div>
    )
  }

  if(playerScore === 21){
    return(
      <div className = "result">
        Player BlackJack!
      </div>
    )
  }
  else if(dealerScore === 21){
    return(
      <div className = "result">
        Dealer BlackJack!
      </div>
    )
  }
  while(playerCard.length >2){

    if(dealerScore <21 && dealerScore > playerScore){
      return(
        <div className = "result">
          Dealer win
        </div>
      )
    }
    if ( playerScore < 21 && playerScore > dealerScore){
      return(
        <div className = "result">
          Player win
        </div>
      )
    }
  }


}

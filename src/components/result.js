import React from 'react';

export default function Result({playerScore, dealerScore,playerCard,dealerCard,winner}) {


  if(dealerCard && playerCard && dealerCard.length === playerCard.length && dealerScore === playerScore){
    <div className = "result">
      Tie
    </div>
  }
  if(winner && dealerScore < playerScore){
    return (
      <div className = "result">
        Player win
      </div>
    )
  }
  if(winner && dealerScore > playerScore){
      return (
        <div className = "result">
          Dealer win
        </div>
      )
  }
  if(winner){
    return(
      <div className = "result">
        {winner} win
      </div>
    )
  }
  if(playerScore ===21 ){
    return (
      <div className = "result">
        Player win
      </div>
    )
  }
  if(dealerScore === 21){
    return (
      <div className = "result">
        Dealer win
      </div>
    )
  }
  if(dealerCard === 21 && playerCard === 21 && playerCard.length < dealerCard.length){
    return (
      <div className = "result">
        Player win
      </div>
    )
  }
  if(dealerCard === 21 && playerCard === 21 && playerCard.length > dealerCard.length){
    return (
      <div className = "result">
        Dealer win
      </div>
    )
  }
  if(playerScore > 21 && dealerScore <= 21){
    return (
      <div className = "result">
        Dealer win
      </div>
    )
  }
  if(dealerScore > 21 && playerScore <= 21){
    return (
      <div className = "result">
        Player win
      </div>
    )
  }
  if(dealerScore > 21 &&   playerScore >21){
    return(
      <div className = "result">
        Tie
      </div>
    )
  }
  if(dealerScore >17 && dealerScore === playerScore){
     return(
      <div className = "result">
        Tie
      </div>
    )
  }
  else{
    return(
      <div className = "result">
        Game
      </div>
    )
  }
}

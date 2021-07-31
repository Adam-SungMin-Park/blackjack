import React from 'react';

export default function Result({playerScore, dealerScore}) {



   if(dealerScore > 21 && playerScore <=21){
    return(
      <div className ="result">
        Player Wins
      </div>
    )
  }
  else if(dealerScore <= 21 && playerScore >21){
    return(
      <div className ="result">
        Dealer Wins
      </div>
    )
  }
  else if(dealerScore === 21 && playerScore ===21){
    return(
      <div className ="result">
        Tie
      </div>
    )

  }
   else{
    return(
      <div className ="result">
        game ongoing
      </div>
    )
  }


}

import React from 'react';

export default function Dealer ({card , score}){

  console.log(score)
  if(card === undefined){
    return(
    <>
      <div className = "card1">the value of the player's card is : </div>

    </>
    )
  }
  else{
     return(
    <>
    <div className = "scoreBoard">Player :{score}</div>
      <div className = "playerTable">
        {card.map((card,index)=>{
          return(
            <div className = "playerCard" key = {index}>
              <div className ="cardInfo">
              {card.suit} {card.value}
              </div>
              </div>
          )
        })}
      </div>
    </>
    )
  }





}

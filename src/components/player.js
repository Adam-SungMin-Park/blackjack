import React , {useState, useEffect} from 'react';

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
      <div className = "playerTable">the value of the player's card is :{score}
        {card.map((card,index)=>{
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

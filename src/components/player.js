import React from 'react';

export default function Dealer ({card , score}){

  /*if(score > 21 ){
    return(
      <>
      <div className = "gameResult">
        Player Lost
      </div>
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

  }*/



  if(card === undefined){
    return(
    <>
      <div className = "card1">the value of the player's card is : </div>

    </>
    )
  }
  else if (card!==undefined){
     return(
    <>
    <div className = "scoreBoard">Player :{score}</div>
      <div className = "playerTable">
        {card.map((card,index)=>{
          return(
            <div className = "card" key = {index}>
              <div className ="cardInfo">
                <div className ={`suit ${card.suit}`}>
                  <div className ={`value ${card.value}`}>
                    {card.value}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
    )
  }





}

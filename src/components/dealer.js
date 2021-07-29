import React  from 'react';

export default function Dealer ({card,score}){




  return(
  <>
  <div className = "scoreBoard">Dealer :{score}</div>
  <div className = "dealerTable">
    {card.map((card,index)=>{
      return(
        <div className = "dealerCard" key = {index}>
          <div className = "cardInfo">
          {card.suit} {card.value}
          </div>
        </div>
      )
    })}
  </div>
  </>
  )





}

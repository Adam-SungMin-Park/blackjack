import React  from 'react';

export default function Dealer ({card,score}){




  return(
  <>
  <div className = "scoreBoard">Dealer :{score}</div>
  <div className = "dealerTable">
    {card.map((card,index)=>{
      return(
        <div className = "card" key = {index}>
          <div className = "cardInfo">
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

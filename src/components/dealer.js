import React , {useState, useEffect} from 'react';

export default function Dealer ({card}){
  const [dealerCard , setDealerCard ] = useState(['isloading'])
  //const [dealerScore , setDealerScore ] = useState(0)


  useEffect(()=>{
    setDealerCard(card)




  },[dealerCard])


  return(
  <>
  <div className = "dealerTable">the value of the dealer's card is :

  </div>
  </>
  )





}

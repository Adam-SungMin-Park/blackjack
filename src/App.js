import Player from './components/player';
import Dealer from './components/dealer';
import './App.css';
import { useEffect , useState } from 'react';
import { conditionalExpression } from '@babel/types';


function App() {
  const [playerCard , setPlayerCard ] = useState();
  const [demo , setDemo] = useState(false)
  const [dealerCard , setDealerCard ] = useState();
  const [playerScore , setPlayerScore ] = useState(0);
  const [dealerScore , setDealerScore ] = useState(0);
  const [deck , setDeck] = useState(['loading'])

  useEffect(()=>{
    const suits = ["spades", "diamonds", "clubs", "hearts"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const deck = [];

    for(let i = 0 ; i < suits.length ; i++){
      for(let j = 0 ; j < values.length ; j++){
          let card = {value: values[j] , suit : suits[i]};
          deck.push(card);
      }
      setDeck(deck);
    }
    let random = Math.floor((Math.random()*deck.length));
    let randomDealer = Math.floor((Math.random()*deck.length));
    if(random === randomDealer){
        random = Math.floor((Math.random()*deck.length));
    }
    setPlayerCard([deck[random]]);
    setDealerCard([deck[randomDealer]]);
    deck.splice(randomDealer,1)
    deck.splice(random,1);

  },[])
  useEffect(()=>{
    let score=0;
    let dealerScore =0;
    if(playerCard !== undefined ){
      for(let i = 0 ; i < playerCard.length ; i++){
        if(playerCard[i].value==="A"){
          if(score >= 11){
             playerCard[i].score = 1;

          }else{
            playerCard[i].score = 11;
          }
        }
        else if(playerCard[i].value==="Q" ||playerCard[i].value==="J" ||playerCard[i].value==="K" ){
          playerCard[i].score = 10;
        }
        else{
          playerCard[i].score = playerCard[i].value
        }
        score = score + +playerCard[i].score
      }
      setPlayerScore(score)
    }
    if(dealerCard !== undefined ){
      for(let i = 0 ; i < dealerCard.length ; i++){
        if(dealerCard[i].value==="A"){
          if(score >= 11){
             dealerCard[i].score = 1;
          }else{
            dealerCard[i].score = 11;
          }
        }
        else if(dealerCard[i].value==="Q" ||dealerCard[i].value==="J" ||dealerCard[i].value==="K" ){
          dealerCard[i].score = 10;
        }
        else{
          dealerCard[i].score = dealerCard[i].value;
        }
          dealerScore = dealerScore + +dealerCard[i].score
      }
      setDealerScore(dealerScore)
    }
  },[playerCard, dealerCard])

  function hit(){
    let random = Math.floor((Math.random()*deck.length));
    let randomDealer = Math.floor((Math.random()*deck.length));
    if(random===randomDealer){
      random++;
    }
    if(playerScore <21 &&dealerScore <17){
      setDealerCard([...dealerCard,deck[random]]);
      deck.splice(random,1);
      setPlayerCard([...playerCard,deck[randomDealer]]);
      deck.splice(randomDealer,1);
    }
    if(playerScore <21 && dealerScore >17){
      setPlayerCard([...playerCard,deck[randomDealer]]);
      deck.splice(randomDealer,1);
    }
  }
  function reset(){
    let random = Math.floor((Math.random()*deck.length));
    let randomDealer = Math.floor((Math.random()*deck.length));
    if(random === randomDealer){
        random = Math.floor((Math.random()*deck.length));
    }
    setPlayerCard([deck[random]]);
    setDealerCard([deck[randomDealer]]);
    deck.splice(randomDealer,1)
    deck.splice(random,1);

  }

  if(demo ===false){
    return(
      <div className = "App">
        <div className ="container">
          <div className = "landingPage">
            <div>Thank you for visiting. This is a Black Jack web application.</div>
            <div>Rules:</div>
            <div>1. Reset will give new cards to both dealer and the player.</div>
            <button onClick ={()=>setDemo(true)}>Play the Game</button>
          </div>
        </div>
      </div>
    )
  }
  else{

    return (
      <div className="App">
        <div className="container">

          <Result
            playerScore = {playerScore}
            dealerScore = {dealerScore}
            />


          <Player
            card = {playerCard}
            score = {playerScore}
          />
          <div className = "gameOptions">
            <button onClick = {()=> window.location.reload()} >Reset</button>
            <button >Stay</button>
            <button onClick ={hit}>Hit</button>
          </div>
          <Dealer
            card = {dealerCard}
            score = {dealerScore}
          />

        </div>
      </div>
    );
  }
<<<<<<< HEAD
=======

>>>>>>> 5cc68dbc8e8d6b5cb1e86c6741473d154c08a964
}

export default App;

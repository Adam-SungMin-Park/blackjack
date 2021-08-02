import Player from './components/player';
import Dealer from './components/dealer';
import Result from './components/result'
import './App.css';
import { useEffect , useState } from 'react';



export default function App() {
  const [playerCard , setPlayerCard ] = useState();
  const [demo , setDemo] = useState(false)
  const [dealerCard , setDealerCard ] = useState();
  const [playerScore , setPlayerScore ] = useState(0);
  const [dealerScore , setDealerScore ] = useState(0);
  const [deck , setDeck] = useState(['loading'])
  const [winner , setWinner] = useState()

  useEffect(()=>{
    const suits = ["spades", "diamonds", "clubs", "hearts"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const deck = [];

    for(let i = 0 ; i < suits.length ; i++){
      for(let j = 0 ; j < values.length ; j++){
          let card = {value: values[j] , suit : suits[i] , score : values[j]};
          if(values[j]==="Q" ||values[j]==="J" ||values[j]==="K" ){
            card.score = 10;
          }
          deck.push(card);
      }
      setDeck(deck);
    }
    for (let i = deck.length -1 ; i > 0 ; i--){
      let j = Math.floor(Math.random()*i);
      let temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
    }
    setPlayerCard([deck[deck.length-1],deck[deck.length-2]]);
    setDealerCard([deck[deck.length-3]]);
    deck.pop()
    deck.pop()
    deck.pop()


    console.log(deck)

  },[])
  useEffect(()=>{
    let score=0;
    let dealerScore =0;
    if(playerCard !== undefined ){
      for(let i = 0 ; i < playerCard.length ; i++){
        if(playerCard[i].score==="A"){
          if(score >= 11){
             playerCard[i].score = 1;

          }if(score < 11){
            playerCard[i].score = 11;
          }
        }
        score = score + +playerCard[i].score

      }

      setPlayerScore(score)
    }
    if(dealerCard !== undefined ){
      for(let i = 0 ; i < dealerCard.length ; i++){
        if(dealerCard[i].value==="A"){
          if(dealerScore >= 11){
             dealerCard[i].score = 1;
          }if(dealerScore < 11){
            dealerCard[i].score = 11;
          }
        }
          dealerScore = dealerScore + +dealerCard[i].score
      }
      setDealerScore(dealerScore)
    }
  },[playerCard, dealerCard])

  function hit(){
    console.log(deck)

    if(playerScore <21 &&dealerScore <17){
      setDealerCard([...dealerCard,deck[deck.length-1]]);
      deck.pop()
      setPlayerCard([...playerCard,deck[deck.length-1]]);
      deck.pop()
    }
    if(playerScore < 21 && dealerScore >=17){
      setPlayerCard([...playerCard,deck[deck.length-1]]);
    deck.pop()

  }
}
  function reset(){

    const suits = ["spades", "diamonds", "clubs", "hearts"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const deck = [];

    for(let i = 0 ; i < suits.length ; i++){
      for(let j = 0 ; j < values.length ; j++){
          let card = {value: values[j] , suit : suits[i] , score : values[j]};
          if(values[j]==="Q" ||values[j]==="J" ||values[j]==="K" ){
            card.score = 10;
          }
          deck.push(card);
      }
      setDeck(deck);
    }
    setWinner()
   for (let i = deck.length -1 ; i > 0 ; i--){
      let j = Math.floor(Math.random()*i);
      let temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
    }
    setPlayerCard([deck[deck.length-1],deck[deck.length-2]]);
    setDealerCard([deck[deck.length-3]]);
    deck.pop()
    deck.pop()
    deck.pop()
  }
  function stay(){

    if(dealerScore >= 17 && playerScore > dealerScore){
      setWinner("player");
    }
    if(dealerScore > 21 ){
      setWinner("player")
    }
    if(dealerScore <= 21 && dealerScore > playerScore){
      setWinner("Dealer")
    }
    if(dealerScore<17 ){
      let random = Math.floor((Math.random()*deck.length));
      setDealerCard([...dealerCard, deck[random]])
      deck.splice(random, 1);
    }
  }

  if(demo ===false){
    return(
      <div className = "App">
        <div className ="container">
          <div className = "landingPage">
            <div>Thank you for visiting. This is a Black Jack web application.</div>
            <div>Rules:</div>
            <div>1. "Reset" will give new cards to both dealer and the player.</div>
            <div>2. "Stay" will give new card to dealer as long as dealer's score is less than 17.</div>
            <div>3. "Hit" will give card to player. Dealer will get a card if dealer's score is less than 17.</div>
            <button onClick ={()=>setDemo(true)}>Play the Game</button>
          </div>
        </div>
      </div>
    )
  }
  else if(demo && playerScore < 21 && dealerScore <21 ){
    return (
      <div className="App">
        <div className="container">
          <Result
            playerScore = {playerScore}
            dealerScore = {dealerScore}
            playerCard = {playerCard}
            winner = {winner}
            />
          <Player
            card = {playerCard}
            score = {playerScore}
          />
          <div className = "gameOptions">
            <button onClick = {reset } >Reset</button>
            <button onClick = {stay} >Stay</button>
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
  else if(dealerCard.length === playerCard.length+1 || deck.length <3 ) {
    return(
       <div className="App">
        <div className="container">
          <Result
            playerScore = {playerScore}
            dealerScore = {dealerScore}
            playerCard = {playerCard}
            dealerCard = {dealerCard}
            winner = {winner}
            />
          <Player
            card = {playerCard}
            score = {playerScore}
          />
          <div className = "gameOptions">
            <button onClick = {reset } >Reset</button>
          </div>
          <Dealer
            card = {dealerCard}
            score = {dealerScore}
          />
        </div>
      </div>
    )
  }
  else{
     return(
       <div className="App">
        <div className="container">
          <Result
            playerScore = {playerScore}
            dealerScore = {dealerScore}
            playerCard = {playerCard}
            dealerCard = {dealerCard}
            winner = {winner}
            />
          <Player
            card = {playerCard}
            score = {playerScore}
          />

          <div className = "gameOptions">
            <button onClick = {reset } >Reset</button>
          </div>
          <Dealer
            card = {dealerCard}
            score = {dealerScore}
          />
        </div>
      </div>
    )
  }
};

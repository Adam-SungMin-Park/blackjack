import Player from './components/player';
import Dealer from './components/dealer';
import './App.css';
import { useEffect , useState } from 'react';

/*export const BlackJackContext = React.createContext();*/

function App() {
  const [playerCard , setPlayerCard ] = useState();
  const [dealerCard , setDealerCard ] = useState(["Deck Loding"]);
  const [playerScore , setPlayerScore ] = useState(0);
  //const [dealerScore , setDealerScore ] = useState(0);
  const [deck , setDeck] = useState(['loading'])

  /*const BlackJackContextValue = {
    hit
  }*/


  useEffect(()=>{
    const suits = ["spades", "diamonds", "clubs", "hearts"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const deck = [];
    let score = 0;



    for(let i = 0 ; i < suits.length ; i++){
      for(let j = 0 ; j < values.length ; j++){
          let card = {value: values[j] , suit : suits[i]};
          deck.push(card);
      }
      setDeck(deck);

    }
    setPlayerCard([deck[Math.floor((Math.random()*deck.length))]])
    setDealerCard([deck[Math.floor((Math.random()*deck.length))]])

  },[])
  useEffect(()=>{
    let score=0;
    if(playerCard !== undefined ){

      for(let i = 0 ; i < playerCard.length ; i++){
        if(playerCard[i].value==="A" && score >=11){
          playerCard[i].value = 1
        }
        if(playerCard[i].value==="A" && score <=10){
          playerCard[i].value = 11
        }
        if(playerCard[i].value==="Q" ||playerCard[i].value==="J" ||playerCard[i].value==="K" ){
          playerCard[i].value = 10
        }
          score = score + +playerCard[i].value
      }
      setPlayerScore(score)
    }
  },[playerCard])




  function hit(){
    /*if(playerCard!==undefined)
      for(let i = 0 ; i < playerCard.length ; i++){
        if(playerCard[i].value==="A" && score >=11){
          playerCard[i].value = 1
        }
        if(playerCard[i].value==="A" && score <=10){
          playerCard[i].value = 11
        }
        if(playerCard[i].value==="Q" ||playerCard[i].value==="J" ||playerCard[i].value==="K" ){
          playerCard[i].value = 10
        }
          score = score + +playerCard[i].value
      }
    console.log(playerScore)
    setPlayerScore(score)*/

      for(let i = 0 ; i < deck.length ; i++){
        let newCard = Math.floor((Math.random()*deck.length))
        setPlayerCard([...playerCard , deck[newCard]])

      }
      console.log(playerCard)

    }


  return (
    <div className="App">
      <header className="App-header">

        <Player
          card = {playerCard}
          score = {playerScore}
        />
        <button onClick = {()=> window.location.reload()} >Reset</button>
        <button >Stay</button>
        <button onClick ={hit}>Hit</button>
        <Dealer
          card = {dealerCard}
        />

      </header>
    </div>
  );
}

export default App;

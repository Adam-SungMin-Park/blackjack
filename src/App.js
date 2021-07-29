import Player from './components/player';
import Dealer from './components/dealer';
import './App.css';
import { useEffect , useState } from 'react';

function App() {
  const [cardDeck , setCardDeck ] = useState("Deck Loding");




  useEffect(()=>{
    const suits = ["spades", "diamonds", "clubs", "hearts"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const deck = [];
    for(let i = 0 ; i < suits.length ; i++){
      for(let j = 0 ; j < values.length ; j++){
          let card = {value: values[j] , suit : suits[i]};
          deck.push(card);
      }

    }
    setCardDeck(deck)

  },[])



  return (
    <div className="App">
      <header className="App-header">

        <Player
          cardDeck = {cardDeck}
        />
        <button  >Play</button>
        <button >Stay</button>
        <button >Hit</button>
        <Dealer
          cardDeck = {cardDeck}
        />

      </header>
    </div>
  );
}

export default App;

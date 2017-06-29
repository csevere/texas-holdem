import React, { Component } from 'react'
import PokerHand from './PokerHand'

import Deck from './utilityClass/Deck'
import Buttons from './Buttons'
import ThePot from './ThePot'

var cards = new Deck()

class PokerTable extends Component{
	constructor(props) {
		super(props);
		this.state = {
			dealersHand: ['deck','deck'],
			playersHand: ['deck','deck'],
			communityCards: ['deck','deck','deck','deck','deck'],
			wager: 0
		}
		this.prepDeck = this.prepDeck.bind(this)
		this.playerBet = this.playerBet.bind(this)
		this.draw = this.draw.bind(this)
	}

	prepDeck(){
		cards.createDeck();
		cards.shuffleDeck();
		// The deck is now ready for a new hand!
		// Set up the playershand and the dealershand
		var card1 = cards.deck.shift();
		var card2 = cards.deck.shift();
		var card3 = cards.deck.shift();
		var card4 = cards.deck.shift();
		// cards.deck is now 4 items fewer -- we mutated it!
		var playersStartingHand = [card1,card3];
		var dealersStartingHand = [card2,card4];
		this.setState({
			playersHand: playersStartingHand,
			dealersHand: dealersStartingHand
		})
	}

	playerBet(amount){
		var newWager = this.state.wager + amount;
		this.setState({
			wager: newWager

		})
		this.draw();
	}

	draw(){
		var communityNewHand = this.state.communityCards;
		communityNewHand.push(cards.deck.shift());
		this.setState({
			communityCards: communityNewHand
		})
	}



	render(){
		return(
			<div className="col-sm-12 the-table">
				{ /* <DealerHand /> */ }
				{ /* <PlayersHand /> */ }
				<ThePot wager = {this.state.wager}/>
				<PokerHand cards={this.state.dealersHand} /> { /* The computers hand */ }
				<PokerHand cards={this.state.communityCards} /> { /* Community Cards */ }
				<PokerHand cards={this.state.playersHand} /> { /* The players hand */ }
				<Buttons deal={this.prepDeck} bet= {this.playerBet} draw = {this.draw} />
			</div>
		)
	}
}

export default PokerTable
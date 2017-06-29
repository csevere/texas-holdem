
import React, { Component } from 'react'
import Card from './Card'

class PokerHand extends Component{
	render(){
		var hand = [];
		this.props.cards.map((card, index)=>{
			hand.push(<Card key={index} card={card} />)
		})
		return(
			<div className="col-sm-12 poker-hand">
				{hand}
			</div>
		)
	}
}

export default PokerHand;
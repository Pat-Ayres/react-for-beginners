import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
    render() {
        const { fishKey, addToOrder, details } = this.props
        const isAvailable = details.status === 'available';
        const buttonText = isAvailable ? 'Add To Order' : 'Sold Out!';
        return (
            <li className="menu-fish">
                <img src={details.image} alt={details.image} />
                <h3 className="fish-name">
                    {details.name}
                    <span className="price">{formatPrice(details.price)}</span>
                </h3>
                <p>{details.desc}</p>
                <button disabled={!isAvailable} onClick={() => addToOrder(fishKey)} >{buttonText}</button>
            </li>
        )
    }

}

Fish.propTypes = {
    fishKey: React.PropTypes.string.isRequired,
    addToOrder: React.PropTypes.func.isRequired,
    details: React.PropTypes.object.isRequired
}


export default Fish;
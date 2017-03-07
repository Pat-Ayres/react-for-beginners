import React from 'react';

class OrderItem extends React.Component {
    render() {
        return (
            <div className="order-item">
                {this.props.name} - {this.props.price}
            </div>
        )
    }

}

OrderItem.propTypes = {
    name: React.PropTypes.string.isRequired,
    price: React.PropTypes.string.isRequired
}

export default OrderItem
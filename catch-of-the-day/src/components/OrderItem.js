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

export default OrderItem
import React from 'react';

class AddFishForm extends React.Component {
    constructor() {
        super();
        this.createFish = this.createFish.bind(this);
    }
    createFish(e) {
        event.preventDefault();
        console.log("Gonna make some fish!");
        console.log(this);
    }

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input type="text" placeholder="Fish Name" />
                <input type="text" placeholder="Fish Price" />
                <select>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea placeholder="Fish Desc"></textarea>
                <input type="text" placeholder="Fish Image" />
                <button type="submit">+ Add Item</button>
            </form>
        )
    }
}

export default AddFishForm;
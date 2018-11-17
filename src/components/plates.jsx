import React, { Component } from 'react';

class Plate extends Component {
    state = {
        food: []
    };
    render() {
        return (<div>
            <div>
                <button className='plateDelete'>Delete one Item</button>
                <button className='plateRemove'>Remove All Items</button>
            </div>
        </div>)
    }
}

export default Plate;
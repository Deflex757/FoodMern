import React, { Component } from 'react';

class Plate extends Component {
    state = {
        food: []
    };

    style = {
        fontSize: "20px",
        backgroundImage: "url('/image/plates.png')",
        backgroundSize: "100%",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: "250px",
        height: "250px",
        textAlign: "center"

    };

    formantCount = () => {
        const { count } = this.state;
        return count === 0 ? "Zero" : count
    };

    getBadgeClasses = () => {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "primary" : "warning"; //no need to write badge-warning, badge-primary over
        return classes;
    }


    render() {
        return (<div>
            <div className="buttonDiv" style={this.style}>
                <span className={this.getBadgeClasses()}>{this.formantCount()}</span>

                <button className='plateDelete'>Delete one Item</button>
                <button className='plateRemove'>Remove All Items</button>
            </div>
        </div>)
    }
}

export default Plate;
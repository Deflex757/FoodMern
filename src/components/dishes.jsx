import React, { Component } from "react";
// const axios = require('axios');

class Dishes extends Component {
    state = {
        food: ['Plain Sushi', 'Cucumber Sushi', 'Tuna Sushi', 'Salmon Sushi', 'Shrimp Sushi', 'Clamp Sushi']
    }
    render() {
        return (
            <div><p>This is the dishes component</p></div>
        )
    }
    // componentDidMount() {
    //     axios.get('/sushi', function (req, res) {
    //         Dishes.find({})
    //             .then(function (err, results) {
    //                 if (err) {
    //                     res.send(err);
    //                 } else {
    //                     res.json(results);
    //                 }
    //             })
    //             .catch(function (err) { throw err })
    //     });
    // }
}

export default Dishes;
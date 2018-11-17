import React, { Component } from "react";
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const port = 8080; //do I need two ports if React is already using a port? same port?
const dishesDB = 'mongodb://localhost/dishes';

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

mongoose.connect(dishesDB);

class Dishes extends Component {
    state = {
        food: ['Plain Sushi', 'Cucumber Sushi', 'Tuna Sushi', 'Salmon Sushi', 'Shrimp Sushi', 'Clamp Sushi']
    }

    componentDidMount() {
        app.get('/sushi', function (req, res) {
            res.send('sushi working');
            console.log(req);
        })
    }
}

export default Dishes;
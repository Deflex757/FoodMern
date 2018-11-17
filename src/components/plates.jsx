import React, { Component } from 'react';
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const port = 8080; //do I need two ports if React is already using a port? same port?
const plateDB = 'mongodb://localhost/plate';

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

mongoose.connect(plateDB);

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
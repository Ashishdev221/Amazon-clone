const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51LcnAuSFuECzlNDE6e7yTau74DtWql3E3fNHeEe8fDqt9oYag3u3HxZ4p4Z9XuLziJoXtBPvvOP9VZM4OgxK52JH00AZQ66Gfy')

//API

//app config
const app = express();

// middlewares
app.use(cors({origin: true}));
app.use(express.json());

//api routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('payment request recieved boom!! for this amount >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
//listen command
exports.api = functions.https.onRequest(app);
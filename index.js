const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = process.env.PORT || 4000;

app.use(express.json());

const users = [
    { name: 'mahfuj', age: 18, Location: "Rajshahi" },
    { name: 'mizan', age: 32, Location: "Dhaka" },
    { name: 'raju', age: 52, Location: "Chittagong" },
    { name: 'kabir', age: 32, Location: "Nilfamari" },
    { name: 'nannu', age: 23, Location: "Natore" },
    { name: 'jafor', age: 14, Location: "Chittagong" },
    { name: 'romiz', age: 65, Location: "Naoga" }
];

const fazlee = { name: 'fazlee', weight: '500 grams', color: 'yellow', origin: 'chapainawabgang' }

// filter by search qwery parameters

app.get('/users', (req, res) => {
    console.log('query', req.query);
    const serach = req.query.name.toLocaleLowerCase();
    if (serach) {
       const matched = users.filter(u => u.name.toLocaleLowerCase().includes(serach));
       res.send(matched);
    }
    else {
        res.send(users);
    }
});

app.get('/', (req, res) => {
    res.send('Hello from smarty people restart me');
});

app.get('/fruits', (req, res) => {
    res.send(fazlee);
});

app.get('/users/:id', (req, res) => {
    console.log(req.query);
    res.send('finding id');
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log('Listening to port', port);
});

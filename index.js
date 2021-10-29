const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Wow! I am Excited to learing node js and express with nodemon. automatic restared');
})

const users = [
    { id: 0, name: 'Abdul Ahad', email: 'abdulahad@gmail.com', phone: '01790036841', },
    { id: 1, name: 'Shipa Begum', email: 'shipa@gmail.com', phone: '01790036841', },
    { id: 2, name: 'Rohim Ahamed', email: 'rohimahmed@gmail.com', phone: '01790036841', },
    { id: 3, name: 'Habibullah', email: 'habibullah@gmail.com', phone: '01790036841', },
    { id: 4, name: 'Shabuddin', email: 'shabuddin@gmail.com', phone: '01790036841', },
    { id: 5, name: 'Abu Talha', email: 'abutalha@gmail.com', phone: '01790036841', },
];

app.get('/users', (req, res) => {
    // console.log(req.query.search)
    const search = req.query.search;
    //use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
});
// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log('hitting the post', req.body);
    // res.send('inside post');
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})


// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
    // console.log(req.params.id);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'lichu', 'apple']);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazli');
})

app.listen(port, () => {
    console.log('Listening to port', port);
})
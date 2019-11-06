const express = require('express');
const app = express();

app.use(express.json());

const users = [
    {id: 1, name: 'Adam', surname: 'Wierzbinski'}, 
    {id: 2, name: 'Michal', surname: 'Jarmolinski'},
];

app.get('/', (req, res) => {
res.send('app zadanie 2')
});

app.get('/users', (req,res) => {
    res.send(users)
});

app.post('/users', (req,res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name,
        surname: req.body.surname
    }
    users.push(user);
    res.send(user)
});

app.get('/users/:id', (req, res) => {
    const user = users.find(c => c.id === parseInt(req.params.id));
    if(!user) res.status(404).send('User z tym ID nie został znaleziony');
    res.send(user);
});
const port = process.env.PORT || 3000
app.listen(port, () => console.log('apka zadanie 2'))


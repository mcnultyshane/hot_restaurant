const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reserve = [];

const waitList = [];

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));
app.get('/table', (req, res) => res.sendFile(path.join(__dirname, 'table.html')));


app.get('api/table', (req, res) => res.json(table))
app.get('api/reserve', (req, res) => res.json(reserve)) 



app.post('api/reserve', (req, res) => {
    const newReservation = req.body;

    if (reserve.length + 1 <= 5) {
        reserve.push(newReservation)
    } else {
        waitList.push(newReservation)
    }
});



app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`));
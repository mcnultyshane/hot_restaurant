const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reserve = [];

const waitList = [];

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, './public/reseve.html')));
app.get('/table', (req, res) => res.sendFile(path.join(__dirname, './public/table.html')));


app.get('api/table', (req, res) => res.json)
app.get('api/reserve', (req, res) => res.json) 



app.post('api/reserve', (req, res) => {
    const newReservation = req.body;

    if (reserve.length + 1 <= 5) {
        reserve.push(newReservation)
    } else {
        waitList.push(newReservation)
    }
});



app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`));
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, './public/reseve.html')));
app.get('/table', (req, res) => res.sendFile(path.join(__dirname, './public/table.html')));

const reserve = [];

const waitList = [];


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
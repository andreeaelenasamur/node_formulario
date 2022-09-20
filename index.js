const express = require('express');
const app = express();

const port = 3010;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('/public/index.html');
});

app.listen(port, () => {
    console.log(`Se ha levantado el servidor en el puerto ${port}`);
});
import express from 'express';

const app = express();
const port = 8080;
const host = 'localhost'

app.listen(port, host, () => {
    console.log('Listen..')
})
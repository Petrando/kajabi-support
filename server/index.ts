import express from 'express';
import { rootHandler, helloHandler } from './routes/handlers';

const app = express();
const port = process.env.PORT || '8000';

app.get('/', rootHandler);
app.get('/hello/:name', helloHandler);

app.listen(() => {
    return console.log(`Server is listening on ${port}`);
});

app.on('error', (err) => {
    console.error('Server error:', err);
});
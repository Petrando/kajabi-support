import express from 'express';
require ('dotenv').config();
const mongoose = require('mongoose');
import { rootHandler, helloHandler } from './routes/handlers';

const app = express();
const port = process.env.PORT || '8000';

mongoose.connect(process.env.DATABASE, 
	{ dbName:"medical-data" })
	.then(() => {
		console.log('Connected to Atlas cluster');
	})
	.catch((err: any) => {
		console.log(err);
	});

app.get('/', rootHandler);
app.get('/hello/:name', helloHandler);

app.listen(port, () => {    
    console.log(`Server is listening on ${port}`);
});

app.on('error', (err) => {
    console.error('Server error:', err);
});

module.exports = app;
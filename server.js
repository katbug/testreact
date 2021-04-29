import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/anxieties', {
    useMongoClient: true,
    promiseLibrary: global.Promise    
});

const app = express();

app.use(morgan('combined'));

app.use('/v1', router);

//app.get('/', (req, res) =>
//        res.send('Hello World!')
//)


const server = app.listen(3001, () => {
    const { address, port } = server.address();
    console.log('Listening at http://${address}:${port}'); 
});

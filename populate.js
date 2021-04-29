import mongoose from 'mongoose';
import Anxiety from './models/anxieties';
mongoose.Promise = Promise;

const anxieties = [
{
    event: 'friends want to party super late',
    description: 'test',
    result: 'in reality we left the club at 1am'
},
{
    event: 'mark gets a project I wanted',
    description: 'I dont know what to put here',
    result: 'it turns out to be a trivial project anyway'
},
{
    event: 'I am running late for something',
    description: 'I am freaking out about being late',
    result: 'being late to a movie is ok, and I usually make it anyway'
},
];

mongoose.connect('mongodb://localhost/anxieties', {
    useMongoClient: true,
    promiseLibrary: global.Promise    
 });

anxieties.map(data => {
    const anxiety = new Anxiety(data);
    anxiety.save();
});

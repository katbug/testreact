import Anxiety from '../models/anxieties';
import moment from 'moment';

export const index = (req, res, next) => {
    Anxiety.find().lean().exec((err, anxieties) => res.json(
        { anxieties: anxieties.map(anxiety => ({
           ...anxiety,
         }))}
    ));
};



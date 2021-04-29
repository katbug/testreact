import mongoose, { Schema } from 'mongoose';

var anxietySchema = new Schema({
    event: {
        type: String,
        unique: true,
    },
    description: String,
    result: String,
});

export default mongoose.model('anxieties', anxietySchema);

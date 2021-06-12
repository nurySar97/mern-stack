const { Schema, model, Types: { ObjectId } } = require('mongoose');

const shema = new Schema({
    email: { type: String, require: true, unique: true },
    password: { type: String, required: true },
    links: [
        { type: ObjectId, ref: 'Link' },
    ]
});

module.exports = model('User', shema);
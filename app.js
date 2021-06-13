const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const app = express();

/* Middlewares */
app.use(express.json({ extended: true }));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/link', require('./routes/link.routes'));

/* PORT */
const PORT = config.get('port') || 5000;

/* INIT */ 
void async function () {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        app.listen(PORT, () => {
            console.log(`App has been started on port ${PORT}...`)
        })
    } catch (error) {
        console.log('Server error: ', error.message);
        process.exit(1);
    }
}()
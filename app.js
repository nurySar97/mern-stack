const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const path = require('path');
const app = express();

/* Middlewares */
app.use(express.json({ extended: true }));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/link', require('./routes/link.routes'));
app.use('/t/', require('./routes/redirect.routes'));

app.get('*', (req, res) => {

    res.sendFile(path.resolve(__dirname, 'client_app', 'index.html'));

})

/* PORT */
const PORT = config.get('port') || 5000;

/* INIT */
void async function () {

    try {

        await mongoose.connect(config.get('mongoUri'), {

            useNewUrlParser: true,

            useUnifiedTopology: true,

            useCreateIndex: true

        });

        app.listen(PORT, () => {

            console.log(`App has been started on port ${PORT}...`)

        });

    } catch (error) {

        console.log('Server error: ', error.message);

        process.exit(1);

    }

}()
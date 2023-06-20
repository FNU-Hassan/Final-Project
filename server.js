const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./Routes/routes');

const app = express();
const port = 8000;

// Enable CORS
app.use(cors());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://hassan:aliasghar@cluster0.uytdt4z.mongodb.net/Hassan_data?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log('Failed to connect to MongoDB Atlas', error);
  });

app.use(express.json());
app.use('/', routes);

module.exports = app;

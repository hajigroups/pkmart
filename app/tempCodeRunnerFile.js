const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/e-commerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema and model for users
const userSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Define a schema and model for orders
const orderSchema = new mongoose.Schema({
  fullname: String,
  address: String,
  city: String,
  description: String,
  product: {
    image: String,
    title: String,
    price: String,
  },
});

const Order = mongoose.model('Order', orderSchema);

// Define a schema and model for contact form submissions
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  complain: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// Route to handle form submission
app.post('/signup', async (req, res) => {
  const { fullname, email, password } = req.body;

  try {
    const newUser = new User({ fullname, email, password });
    await newUser.save();
    res.status(201).send('User created successfully');
  } catch (error) {
    res.status(500).send('Error creating user');
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && user.password === password) {
      res.status(200).send('Login successful');
    } else {
      res.status(401).send('Invalid email or password');
    }
  } catch (error) {
    res.status(500).send('Error during login');
  }
});

// Route to handle order submission
app.post('/order', async (req, res) => {
  const { fullname, address, city, description, product } = req.body;

  console.log('Received order:', { fullname, address, city, description, product });

  try {
    const newOrder = new Order({
      fullname,
      address,
      city,
      description,
      product,
    });
    await newOrder.save();
    res.status(201).send('Order placed successfully');
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).send('Error placing order');
  }
});

// Route to handle contact form submission
app.post('/contact', async (req, res) => {
  const { name, email, phone, complain } = req.body;

  try {
    const newContact = new Contact({ name, email, phone, complain });
    await newContact.save();
    res.status(201).send('Contact form submitted successfully');
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).send('Error submitting contact form');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

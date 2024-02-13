const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotentv = require('dotenv');

const UserRoutes = require('./routes/User');

const app = express();
dotentv.config();

app.use(express.json());
app.use(cors({origin:true,credentials:true}));
app.use(express.urlencoded({extended:true}));

app.use('/',UserRoutes);

const DB = process.env.URL;
const PORT = 8000;

mongoose.connect(DB).catch((err)=>console.log('Error' + err));
app.listen(PORT,()=>console.log('Listeting on port' + PORT))
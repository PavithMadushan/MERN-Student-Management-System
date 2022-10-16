//take dependancies stored
const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
const dotenv=require("dotenv");

const app=express();

//assigning any available port or 8070
const PORT = process.env.PORT || 8070


//use dependancies
app.use(cors());
app.use(bodyParser.json());
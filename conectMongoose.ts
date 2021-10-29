const express =require('express');

const connectMongoos=express();
const mon= require('mongoose');
mon.connect('mongodb+srv://design:<design>@jiramaexpress.nwh84.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
module.exports=connectMongoos;
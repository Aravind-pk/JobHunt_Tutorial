const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const JobSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  salary: Number,
  des:   String,
  link:String
},{timestamps:true})

const Job = mongoose.model('Job', JobSchema);

module.exports =Job;
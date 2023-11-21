import mongoose from "mongoose";

const kittySchema=new mongoose.Schema({
    name:String,
    Place:String
})

const kittenModelExists = mongoose.models['kitten'];

const kitten = kittenModelExists
  ? mongoose.model('kitten')
  : mongoose.model('kitten', kittySchema);


export default kitten
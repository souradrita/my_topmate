import mongoose from 'mongoose';
const Schema=new mongoose.Schema({name:String,email:String,phone:String,service:String,price:Number,date:String,time:String,meetLink:String,paymentStatus:String},{timestamps:true});
export default mongoose.models.Booking||mongoose.model('Booking',Schema);
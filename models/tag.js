import mongoose  from "mongoose";

const { Schema } = mongoose;
const schema = new Schema({
   name: String,
});
  
export default  mongoose.model("Tag", schema);
import mongoose  from "mongoose";

const { Schema } = mongoose;
const schema = new Schema({
    name: String,
    category : { type: Schema.Types.ObjectId, ref: 'Category' },
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag', default: [] }],
    photoUrls: String,
    status: {
        type: String,
        enum : ['available','pending','sold'],
        default: 'available'
    },
});
    
export default  mongoose.model("Pet", schema);
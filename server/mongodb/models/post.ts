import mongoose, { Document } from "mongoose";

interface PostDocument extends Document {
    name: string;
    prompt: string;
    photo: string;
}

const Post = new mongoose.Schema({
    name: {type: String , required: true},
    prompt: {type: String , required: true},
    photo: {type: String , required: true},
});

const PostSchema = mongoose.model<PostDocument>('Post',Post);

export default PostSchema;
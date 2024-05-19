import mongoose, { models, Schema } from "mongoose";

const userSchema = new Schema({

    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    DateOfBirth: { type: Date, required: true },
    highestEducation: { type: String },
    workExperience: { type: Number, default: 0 },
    savedJobs: [{ type: mongoose.Schema.ObjectId }],
    appliedJobs: [{ type: mongoose.Schema.ObjectId }],
    accountType: { type: String, default: "user", required: true }

}, { timestamps: true })

const userModel = models.user || mongoose.model('user', userSchema);

export default userModel;
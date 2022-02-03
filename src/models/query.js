import mongoose from "mongoose"

const opts = {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
};
const schema = mongoose.Schema(
    {
        name: String,
        email: String,
        subject: String,
        message: String,
        location: String
    },
    opts
)

export default mongoose.model("Query", schema)
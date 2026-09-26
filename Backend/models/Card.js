import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: "" },
    priority: { type: String, enum: ["low", "medium", "high"], default: "low" },
    dueDate: { type: String, default: "" },
    columnId: { type: mongoose.Schema.Types.ObjectId, ref: "Column", required: true },
    position: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Card = mongoose.model("Card", cardSchema);
export default Card;
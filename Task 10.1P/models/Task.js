const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema(
    {
        taskType: String,
        taskTitle: String,
        taskDesc: String,
        suburb: String,
        date: Date,     
    }
)

module.exports = mongoose.model("Task", taskSchema)
import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  email: String,
  isCompleted: Boolean,
});

module.exports =
  mongoose.models.Contact || mongoose.model('Contact', contactSchema);

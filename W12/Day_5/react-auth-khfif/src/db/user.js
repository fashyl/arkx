import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt'

const schema = new Schema({
  firstname: { type: String, required: true, trim: true },
  lastname: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  password: { type: String, required: true},
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  }
});

class PasswordHashingError extends Error {
  constructor(message) {
    super(message);
  }
}

schema.pre('save', async function(next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  try {
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
    return next()
  } catch (error) {
    return next(new PasswordHashingError("An error occured while bcrypting"))
  }
});

export const UserModel = model('User', schema);

import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

interface IPendingUser extends Document {
  username?: string;
  email: string;
  password: string;
  token: string;
  hashUserPwd: () => Promise<boolean>;
  generateToken: () => string;
}

const pendingUserSchema = new Schema<IPendingUser>({
  username: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    default: '',
  },
});

pendingUserSchema.methods.hashUserPwd = async function () {
  this.password = await bcrypt.hash(this.password as string, 10);
  return true;
};

pendingUserSchema.methods.generateToken = function () {
  if (process.env.JWT_PRIVATE_KEY) {
    this.token = jwt.sign({ userId: this.email }, process.env.JWT_PRIVATE_KEY, {
      expiresIn: '1d',
    });
  }
  return this.token;
};

// eslint-disable-next-line import/no-mutable-exports
let PendingUser: mongoose.Model<IPendingUser>;

try {
  PendingUser = mongoose.model<IPendingUser>('PendingUser');
} catch (error) {
  PendingUser = mongoose.model<IPendingUser>(
    'PendingUser',
    pendingUserSchema,
    'pendingUsers'
  );
}

export default PendingUser;

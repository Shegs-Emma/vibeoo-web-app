import { Schema, model, Document, Model } from 'mongoose';

interface IUser extends Document {
  username: String;
  googleId?: String;
  twitterId?: String;
  facebookId?: String;
  email: String;
  signupMethod: String;
  profilePicture: String;
}

const userSchema: Schema<IUser> = new Schema({
  username: { type: String, required: true },
  googleId: String,
  twitterId: String,
  facebookId: String,
  email: { type: String, default: '' },
  signupMethod: { type: String, required: true },
  profilePicture: { type: String, default: '' },
});

// eslint-disable-next-line import/no-mutable-exports
let User: Model<IUser>;

try {
  User = model<IUser>('user');
} catch (error) {
  User = model<IUser>('user', userSchema, 'users');
}

export default User;

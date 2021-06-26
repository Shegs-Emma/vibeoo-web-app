import { Schema, model, Document, Model } from 'mongoose';
import { IUser } from '../../../types/app.d';



const userSchema: Schema<IUser> = new Schema({
  username: { type: String, required: true },
  googleId: String,
  twitterId: String,
  facebookId: String,
  email: { type: String, default: '' },
  signupMethod: { type: String, required: true },
  profilePicture: { type: String, default: '' },
  showsFollowing: [String],
  playlist: [{ type: Schema.Types.ObjectId, ref: 'episode' }]
}, { timestamps: true } );

// eslint-disable-next-line import/no-mutable-exports
let User: Model<IUser>;

try {
  User = model<IUser>('user');
} catch (error) {
  User = model<IUser>('user', userSchema, 'users');
}

export default User;

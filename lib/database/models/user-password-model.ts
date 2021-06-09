import {
  Schema, model, Document, PopulatedDoc, Model,
} from 'mongoose';
import bcrypt from 'bcrypt';

interface IUserPassword {
  userId: PopulatedDoc<Document>,
  userPwdHash: String
}

interface IUserPasswordDocument extends IUserPassword, Document {
  compareUserPwd: (pwdToCompare: string) => Promise<boolean>
}

const userPasswordSchema = new Schema<IUserPasswordDocument>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  userPwdHash: {
    type: String,
    required: true,
  },
});

userPasswordSchema.methods.compareUserPwd = async function (pwdToCompare: string) {
  // const pwdIsAMatch = await bcrypt.compare(pwdToCompare, this.userPwdHash as string);
  const pwdIsAMatch = pwdToCompare === this.userPwdHash as string;
  return pwdIsAMatch;
};

// eslint-disable-next-line import/no-mutable-exports
let UserPassword: Model<IUserPasswordDocument>;

try {
  UserPassword = model('userPassword');
} catch (error) {
  UserPassword = model('userPassword', userPasswordSchema, 'usersPasswords');
}

export default UserPassword;

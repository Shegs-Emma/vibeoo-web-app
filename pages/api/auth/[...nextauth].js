import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import {
  signupViaEmail, fetchUserFromDb, saveGoogleUser, saveFbUser,
} from '../../../lib/api/user-api-helpers';

const options = {
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        console.log('cred', credentials);

        return { id: credentials.id, email: credentials.email };
      },
    }),
    Providers.Email({
      server: {
        port: 465,
        host: 'smtp.gmail.com',
        secure: true,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      from: process.env.NEXTAUTH_EMAIL_FROM,
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Providers.Twitter({
      clientId: '',
      clientSecret: '',
    }),
  ],
  session: {
    jwt: true,
    maxAge: 24 * 60 * 60,
  },
  jwt: {
    secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
  },
  callbacks: {
    signIn: async (user, account, profile) => {
      // console.log('acct', account);
      // console.log('user', user);
      // console.log('profile', profile);
      if (account.type === 'oauth') {
        console.log('came to signin oauth');
        if (account.provider === 'google') {
          user.id = await saveGoogleUser({
            googleId: profile.id,
            email: profile.email,
            username: profile.given_name,
            profilePicture: profile.picture,
          });
          console.log('came to google signin oauth');
          // user.id = 'fjghgfygye44434ng4h4nnh34';
          // console.log('user', user);
          return true;
        }
        if (account.provider === 'facebook') {
          user.id = await saveFbUser({
            facebookId: profile.id,
            username: profile.name,
            profilePicture: profile.picture.data.url,
          });
          console.log('came to fb signin oauth');
          return true;
        }
      }
      if (account.type === 'email' && !profile.verificationRequest) {
        user.id = await signupViaEmail(profile.email);
        // console.log('user', user);
        return !!user.id;
      }
      return true;
    },
    session: async (session, token) => {
      // console.log('session-token-d', token.id);
      const dbUser = await fetchUserFromDb(token.id);
      if (!dbUser) return null;
      session.user = { ...dbUser };
      return session;
    },
    jwt: async (token, user) => {
      // console.log('jwt-user', user);
      // console.log('jwt-token', token);
      if (user) token = { id: user.id };
      return token;
    },
  },
};

export default (req, res) => NextAuth(req, res, options);

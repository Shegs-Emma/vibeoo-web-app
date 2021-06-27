import NextAuth from 'next-auth';
import { EpisodeProps } from './app.d';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */
  interface Session {
    user: {
      /** The user's account id. */
      _id: string,
      /** The user's account username. */
      username: string,
      /** The user's account display picture. */
      profilePicture: string,
      /** The user's last played podcast. */
      lastPlayed: EpisodeProps,
      /** The user's playlist. */
      playlist: Array<string>,
    }
  }
}

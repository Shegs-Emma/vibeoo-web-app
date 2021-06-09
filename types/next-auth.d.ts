import NextAuth from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */
  interface Session {
    user: {
      /** The user's account username. */
      username: string,
      /** The user's account display picture. */
      profilePicture: string,
    }
  }
}

import type { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export const authOptions: NextAuthOptions = {
  // logger: {
  //   error(code, metadata) {
  //     console.log(code, metadata)
  //   },
  //   warn(code) {
  //     console.log(code)
  //   },
  //   debug(code, metadata) {
  //     console.log(code, metadata)
  //   },
  // },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
}

export default NextAuth(authOptions)

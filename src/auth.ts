import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Github({
      clientId: "e2de0abc82413b6e51bd",
      clientSecret: "c40016927476716f76a60659d8398d1097db9a8f",
    }),
    CredentialsProvider({
        async authorize(credentials) {
          // make api call to authorize the user
            return {
                email: "sdsdsdsdsd",
                name: "asdasdad",
                access: "anirban",
                refresh: "shimanta"
            }
        },
    })
  ],
  secret: "Avsdf#$*",
  session: {strategy: "jwt"},
  pages: {
    signIn: "/auth/login"
  },
  callbacks: {
    async jwt({token, user}) {
        return {...token, ...user}
    },
    async session({session, token}) {
        session.user = token as any
        return session
    },
  }
});

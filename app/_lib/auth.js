import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
  // the providers must be array because in some points we use muliple providers such as Google Github and more...
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
};
export const {
  auth,
  handlers: { GET, POST },
} = NextAuth(authConfig);

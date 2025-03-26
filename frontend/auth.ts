import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";

import { JWT } from "next-auth/jwt"

import { onUserLogIn } from "./actions/userAction";

declare module "next-auth" {
  interface User {
    id?: string
    discord_id?: string
    name?: string | null
    email?: string | null
    image?: string | null

  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string
  }
}

export const { handlers, signIn, signOut, auth} = NextAuth({
  providers: [
    Discord({
      async profile(profile: any) {
        if (profile.avatar === null) {
          const defaultAvatarNumber =
            profile.discriminator === "0"
              ? Number(BigInt(profile.id) >> BigInt(22)) % 6
              : parseInt(profile.discriminator) % 5
          profile.image_url = `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png`
        } else {
          const format = profile.avatar.startsWith("a_") ? "gif" : "png"
          profile.image_url = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${format}`
        }
        return {
          discord_id: profile.id,
          name: profile.global_name ?? profile.username,
          email: profile.email,
          image: profile.image_url,

        };
      }
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) { // User is available during sign-in
        await onUserLogIn(user.discord_id!, user.name!)
        token.id = user.discord_id
      }
      return token
    },
    session({ session, token }) {
      session.user.discord_id = token.id
      return session
    },
  },
});
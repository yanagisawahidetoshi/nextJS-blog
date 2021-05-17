import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import type { NextApiRequest, NextApiResponse } from "next";
import userRepository from "repositories/userRepository";

type TCredentials = {
  email: string;
  password: string;
};

const findUserByCredentials = async (credentials: TCredentials) => {
  try {
    const data = await userRepository.index(
      `filters=email[equals]${credentials.email}[and]password[equals]${credentials.password}`
    );

    if (data.contents.length > 0) {
      return { id: data.contents[0].id, name: data.contents[0].name };
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

const options = {
  providers: [
    Providers.Credentials({
      name: "Email",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials: TCredentials) => {
        const user = findUserByCredentials(credentials);
        if (user) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
  callbacks: {
    session: async (session: any, data: any) => {
      return Promise.resolve({
        ...session,
        id: data.sub,
      });
    },
  },
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

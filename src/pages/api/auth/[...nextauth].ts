import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import type { NextApiRequest, NextApiResponse } from "next";

type TCredentials = {
  email: string;
  password: string;
};

const findUserByCredentials = async (credentials: TCredentials) => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY ?? "" },
  };
  const res: any = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}user?filters=email[equals]${credentials.email}[and]password[equals]${credentials.password}`,
    key
  )
    .then((res) => res)
    .catch((err) => console.log(err));
  const data = await res.json();

  if (data.contents.length > 0) {
    return { id: data.contents[0].id, name: data.contents[0].name };
  } else {
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

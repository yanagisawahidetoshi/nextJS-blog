import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Admin = () => {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (loading) {
      return;
    }
    !session ? signIn() : router.push("admin/create-post");
  });

  return null;
};
export default Admin;

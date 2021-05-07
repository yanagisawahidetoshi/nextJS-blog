import { signIn, useSession } from "next-auth/client";
import { useEffect } from "react";

const Admin = () => {
  const [session, loading] = useSession();
  useEffect(() => {
    if (loading) {
      return;
    }
    !session ? signIn() : console.log(session.user?.name);
  });

  return null;
};
export default Admin;

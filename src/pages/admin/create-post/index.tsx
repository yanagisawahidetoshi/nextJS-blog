import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";
import IndexPage from "components/pages/Admin/CreatePost";

const Index = () => {
  const [session] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, [session]);

  return <IndexPage />;
};

export default Index;

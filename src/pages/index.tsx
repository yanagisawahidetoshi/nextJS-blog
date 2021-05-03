import { NextPage } from "next";
import PageIndex from "components/pages/Index";
import { IPost } from "models/posts";

type Props = {
  posts: Array<IPost>;
};

const Index: NextPage<Props> = ({ posts }) => {
  return <PageIndex posts={posts} />;
};

export const getStaticProps = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY ?? "" },
  };
  const res: any = await fetch(`${process.env.API_BASE_URL}blog?limit=30`, key)
    .then((res) => res)
    .catch((err) => console.log(err));
  const data = await res.json();

  return {
    props: {
      posts: data.contents,
    },
  };
};

export default Index;

import { NextPage } from "next";
import PageIndex from "components/pages/Index";
import { IPost } from "models/posts";
import blogRepository from "repositories/blogRepository";

type Props = {
  posts: Array<IPost>;
};

const Index: NextPage<Props> = ({ posts }) => {
  return <PageIndex posts={posts} />;
};

export const getStaticProps = async () => {
  try {
    const data = await blogRepository.index();
    return {
      props: {
        posts: data.contents,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};

export default Index;

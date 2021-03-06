import Layout from "components/Layout";
import Card from "components/atoms/Card";
import Container from "components/atoms/Container";
import Pagination from "components/atoms/Pagination";
import Summary from "components/atoms/Summary";
import Head from "components/atoms/Head";
import { IPost } from "models/posts";

import { useSummary } from "../../../hooks/useSummary";

type Props = {
  posts: Array<IPost>;
};

const PageIndex: React.FC<Props> = ({ posts }) => {
  const { removeHtml } = useSummary();

  return (
    <Layout>
      <Head
        description="Next.js/TypeScript/microCMSでJAMスタックなブログをReact未経験でもわかるように書いています。。"
        title="JAMスタックでブログを作ろう"
        url={""}
      />
      <Container>
        {posts.map((post: IPost) => {
          return (
            <Card key={post.id}>
              <Summary
                date={post.createdAt}
                title={post.title}
                excerpt={removeHtml(post.content)}
                slug={`./posts/${post.id}`}
                tags={post.tags}
              />
            </Card>
          );
        })}
      </Container>
    </Layout>
  );
};

export default PageIndex;

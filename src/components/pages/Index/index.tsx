import Layout from "../../Layout";
import Card from "../../atoms/Card";
import Container from "../../atoms/Container";
import Pagination from "../../atoms/Pagination";
import Summary from "../../atoms/Summary";
import { IPost } from "../../../models/posts";

import { useSummary } from "../../../hooks/useSummary";

type Props = {
  posts: Array<IPost>;
};

const PageIndex: React.FC<Props> = ({ posts }) => {
  const { removeHtml } = useSummary();

  return (
    <Layout>
      <Container>
        {posts.map((post: IPost) => {
          return (
            <Card key={post.id}>
              <Summary
                date={post.createdAt}
                title={post.title}
                excerpt={removeHtml(post.content)}
                slug={`./posts/${post.id}`}
              />
            </Card>
          );
        })}
      </Container>
    </Layout>
  );
};

export default PageIndex;

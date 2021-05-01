import PagePost from "./";
import { mockPosts } from "../../../models/posts";

export default {
  title: "components/pages/PagePost",
  component: PagePost,
};

export const Basic = () => (
  <PagePost
    id={mockPosts[0].id}
    kv={mockPosts[0].kv}
    title={mockPosts[0].title}
    createdAt={mockPosts[0].createdAt}
    highlightedBody="テキスト"
    description={mockPosts[0].description}
  />
);

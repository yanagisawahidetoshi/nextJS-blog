import PagePost from "./";
import { mockPosts } from "../../../models/posts";

export default {
  title: "components/pages/PagePost",
  component: PagePost,
};

export const Basic = () => (
  <PagePost
    title={mockPosts[0].title}
    createdAt={mockPosts[0].createdAt}
    highlightedBody="テキスト"
  />
);

import Summary from "./";

export default {
  title: "components/atoms/Summary",
  component: Summary,
};

export const Basic = () => (
  <Summary date="2021-01-01" title="rタイトル" excerpt="hogehoge" slug="slug" />
);

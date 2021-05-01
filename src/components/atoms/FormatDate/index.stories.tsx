import FormatDate from "./";

export default {
  title: "components/atoms/FormatDate",
  component: FormatDate,
};

export const Basic = () => <FormatDate date="2021-01-01 10:00:00" />;
export const WithTimeZone = () => (
  <FormatDate date="2021-04-26T18:16:47.316Z" />
);
export const EmptyDate = () => <FormatDate />;

import dayjs from "dayjs";
dayjs.locale("ja");

type Props = {
  date?: string;
  format?: string;
};

const FormatDate: React.FC<Props> = ({
  date = dayjs(),
  format = "YYYY年MM月DD日",
}) => {
  return <>{dayjs(date).format(format)}</>;
};

export default FormatDate;

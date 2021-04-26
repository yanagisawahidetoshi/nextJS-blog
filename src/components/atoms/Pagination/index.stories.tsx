import Pagination from "./";

export default {
  title: "components/atoms/Pagination",
  component: Pagination,
};

export const Basic = () => (
  <Pagination
    previousUrl="https://www.google.com/search?q=react&sxsrf=ALeKk003_l12_07NRKkmcRwYDyC96Npyqg:1619449639099&ei=J9eGYPDJBciJoASwy6zYAQ&start=10&sa=N&ved=2ahUKEwiw-eCDmJzwAhXIBIgKHbAlCxsQ8tMDegQIARA7&biw=1504&bih=929"
    nextUrl="https://www.google.com/search?q=react&sxsrf=ALeKk02pyUyTHQWSG4WoqjlCdiCOncd2yQ:1619449642812&ei=KteGYOb6MIKGoASprqKADg&start=20&sa=N&ved=2ahUKEwjmt8OFmJzwAhUCA4gKHSmXCOA4ChDw0wN6BAgBEE4&biw=1504&bih=929"
  />
);

export const IsFirst = () => (
  <Pagination
    previousUrl="https://www.google.com/search?q=react&sxsrf=ALeKk003_l12_07NRKkmcRwYDyC96Npyqg:1619449639099&ei=J9eGYPDJBciJoASwy6zYAQ&start=10&sa=N&ved=2ahUKEwiw-eCDmJzwAhXIBIgKHbAlCxsQ8tMDegQIARA7&biw=1504&bih=929"
    nextUrl="https://www.google.com/search?q=react&sxsrf=ALeKk02pyUyTHQWSG4WoqjlCdiCOncd2yQ:1619449642812&ei=KteGYOb6MIKGoASprqKADg&start=20&sa=N&ved=2ahUKEwjmt8OFmJzwAhUCA4gKHSmXCOA4ChDw0wN6BAgBEE4&biw=1504&bih=929"
    isFirst={true}
  />
);

export const IsLast = () => (
  <Pagination
    previousUrl="https://www.google.com/search?q=react&sxsrf=ALeKk003_l12_07NRKkmcRwYDyC96Npyqg:1619449639099&ei=J9eGYPDJBciJoASwy6zYAQ&start=10&sa=N&ved=2ahUKEwiw-eCDmJzwAhXIBIgKHbAlCxsQ8tMDegQIARA7&biw=1504&bih=929"
    nextUrl="https://www.google.com/search?q=react&sxsrf=ALeKk02pyUyTHQWSG4WoqjlCdiCOncd2yQ:1619449642812&ei=KteGYOb6MIKGoASprqKADg&start=20&sa=N&ved=2ahUKEwjmt8OFmJzwAhUCA4gKHSmXCOA4ChDw0wN6BAgBEE4&biw=1504&bih=929"
    isLast={true}
  />
);

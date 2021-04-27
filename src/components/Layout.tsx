import Header from "./atoms/Header";

const Layout: React.FC = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default Layout;

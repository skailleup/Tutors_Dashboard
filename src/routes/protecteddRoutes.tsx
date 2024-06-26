import { Outlet } from "react-router";
import Layout from "../components/layout";

const ProtectedRoutes = () => {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default ProtectedRoutes;

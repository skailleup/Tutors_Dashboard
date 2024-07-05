import { Outlet } from "react-router";
import Header from "./header";
import Sidebar from "./sidebar";
import { ReactNode } from "react";

const Layout: React.FC<{
  children: ReactNode;
}> = () => {
  return (
    <>
      <div className="flex h-screen overflow-hidden gap-5">
        <div className="hidden md:block">
        <Sidebar />
        </div>
        <main className="overflow-y-scroll flex-1">
          <Header />
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;

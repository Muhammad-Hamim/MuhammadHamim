import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <div className="flex bg-background">
        <div className="fixed top-0 left-0 lg:w-[15%] hidden lg:block">
          <Navbar />
        </div>
        <div className="flex-1 lg:ml-[15%] allContent">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Main;

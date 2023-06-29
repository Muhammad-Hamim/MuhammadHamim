import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <div className="flex bg-background">
        <div className="fixed top-0 left-0 w-[15%]">
          <Navbar />
        </div>
        <div className="flex-1 ml-[15%] allContent">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Main;

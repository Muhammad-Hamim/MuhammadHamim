import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { StateContext } from "../Components/Context";

const Main = () => {
  const { isOpen } = useContext(StateContext);

  return (
    <div className="flex bg-background relative">
      <div
        className={`fixed top-0 left-0 z-50 w-[65%] md:w-[35%] lg:w-[15%] ${
          isOpen
            ? "translate-x-0 origin-right duration-500"
            : "-translate-x-full lg:translate-x-0 origin-right duration-500"
        }`}>
        <Navbar />
      </div>
      <div className="flex-1 lg:ml-[15%] allContent">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;

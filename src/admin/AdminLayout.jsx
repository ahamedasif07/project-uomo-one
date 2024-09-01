import { Outlet } from "react-router";
import ANavbar from "./Dashboard/AdminLayoutC/ANavbar";
import ANavMenu from "./Dashboard/AdminLayoutC/ANavMenu";

const AdminLayout = () => {
  return (
    <div>
      <div className="">
        <ANavbar />

        {/* -----------left site------- */}
        <div className="w-full flex">
          <div className="w-[20%]">
            <ANavMenu />
          </div>
          <div className="w-[100%]">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;

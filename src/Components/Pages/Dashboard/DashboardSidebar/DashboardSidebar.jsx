import { Link } from "react-router-dom";
import UserSidebarLinks from "./UserSidebarLinks";
import { CiLogout } from "react-icons/ci";
import DeliveryMenSidebarLinks from "./DeliveryMenSidebarLinks";
import AdminSidebarLinks from "./AdminSidebarLinks";
import useGetUser from "../../../../Hooks/useGetUser";
const DashboardSidebar = () => {
  const [userDetails] = useGetUser();
  return (
    <div className="bg-[#1874C1] h-[50vh] rounded-lg text-white p-3 relative">
      {userDetails?.type === "user" && <UserSidebarLinks />}
      {userDetails?.type === "deliverymen" && <DeliveryMenSidebarLinks />}
      {userDetails?.type === "admin" && <AdminSidebarLinks />}
      <Link
        to={"/"}
        className="flex items-center flex-row-reverse absolute bottom-5 right-8 hover:cursor-pointer"
      >
        <CiLogout className="text-3xl " />
        <span>Home</span>
      </Link>
    </div>
  );
};

export default DashboardSidebar;

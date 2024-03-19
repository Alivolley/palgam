// Components
import AdminSideBar from '../admin-sideBar/admin-sideBar';

function AdminLayout({ children }) {
   return (
      <div className="relative flex min-h-screen">
         <AdminSideBar />

         <div className="grow border-l border-solid border-[#ffffff26] px-[49px] pt-8 font-poppinsRegular text-white">
            {children}
         </div>
      </div>
   );
}

export default AdminLayout;

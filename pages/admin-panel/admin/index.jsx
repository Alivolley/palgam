import { useState } from 'react';

// MUI
import { Button, CircularProgress } from '@mui/material';

// Icons
import { FiPlus } from 'react-icons/fi';

// Components
import AdminLayout from '@/components/layout/admin-layout/admin-layout';
import AdminUserRow from '@/components/pages/admin-panel/admin/admin-user-row/admin-user-row';
import AddAdminModal from '@/components/pages/admin-panel/admin/addAdminModal/addAdminModal';

// Apis
import useGetAdmins from '@/apis/adminPanel/admin/useGetAdmins';

function Admin() {
   const [showAddAdminModal, setShowAddAdminModal] = useState(false);
   const { data: adminsData, isLoading: adminsIsLoading, mutate: adminsMutate } = useGetAdmins();

   return (
      <AdminLayout>
         <div>
            <p className="font-poppinsMedium text-[28px] leading-10">Admin users</p>
            {adminsIsLoading ? (
               <div className="mt-14 flex items-center justify-center p-5">
                  <CircularProgress color="secondary" />
               </div>
            ) : (
               <>
                  <table className="mt-7 w-full">
                     <thead className="border-b border-solid border-[#ffffff26]">
                        <tr className="pb-4 font-poppinsExtraBold text-sm text-[#ffffff80]">
                           <th className="px-4 pb-4 align-middle">#</th>
                           <th className="px-4 pb-4 text-start align-middle">Admin</th>
                           <th className="px-4 pb-4 align-middle">Last update</th>
                           <th className="px-4 pb-4 align-middle">Last login</th>
                           <th className="px-4 pb-4 align-middle">Access</th>
                        </tr>
                     </thead>

                     <tbody>
                        {adminsData?.data?.map((item, index) => (
                           <AdminUserRow key={item?.id} detail={item} row={index + 1} adminsMutate={adminsMutate} />
                        ))}
                     </tbody>
                  </table>
                  <div className="fixed bottom-12 right-12">
                     <Button
                        variant="contained"
                        color="secondary"
                        sx={{
                           height: '72px',
                           width: '174px',
                           borderRadius: '120px',
                           fontFamily: 'poppinsSemibold',
                           fontSize: '16px',
                           boxShadow: '0px 12px 40px 0px rgba(255, 255, 255, 0.16)',
                        }}
                        endIcon={<FiPlus />}
                        onClick={() => setShowAddAdminModal(true)}
                     >
                        Add admin
                     </Button>
                  </div>
                  <AddAdminModal
                     open={showAddAdminModal}
                     onClose={() => setShowAddAdminModal(false)}
                     adminsDataMutate={adminsMutate}
                  />
               </>
            )}
         </div>
      </AdminLayout>
   );
}

export default Admin;

export async function getServerSideProps(context) {
   const { req } = context;
   const accessToken = req?.cookies?.palgam_accessToken;
   const refreshToken = req?.cookies?.palgam_refreshToken;

   if (!accessToken && !refreshToken) {
      return {
         redirect: {
            destination: '/login',
         },
      };
   }
   return {
      props: {},
   };
}

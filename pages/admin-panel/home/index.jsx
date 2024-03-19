import Image from 'next/image';

// MUI
import { Grid } from '@mui/material';

// Components
import AdminLayout from '@/components/layout/admin-layout/admin-layout';

// Assets
import clockIcon from '@/assets/icons/adminPanel/Clock.svg';
import calendarIcon from '@/assets/icons/adminPanel/Calendar.svg';
import taskSquareIcon from '@/assets/icons/adminPanel/task-square.svg';
import emojiHappyIcon from '@/assets/icons/adminPanel/Emoji-happy.svg';
import notificationIcon from '@/assets/icons/adminPanel/Notification.svg';

function AdminPanelHome() {
   return (
      <AdminLayout>
         <div>
            <Grid container spacing="16px">
               <Grid item lg={4}>
                  <div className="min-h-[220px] rounded-2xl bg-[#dd43f01f] p-4">
                     <div className="flex items-center justify-between rounded-xl bg-[#dd43f01f] p-3">
                        <p className="font-poppinsRegular text-sm leading-6">Daily Visitor</p>
                        <Image src={clockIcon} />
                     </div>
                     <p className="text-center font-poppinsExtraBold text-[56px] leading-[100px]">193</p>
                     <p className="mx-auto w-fit rounded-[57px] bg-[#ffffff0d] px-4 py-1 text-10 leading-5">
                        -16% than last day
                     </p>
                  </div>
               </Grid>
               <Grid item lg={4}>
                  <div className="min-h-[220px] rounded-2xl bg-[#19c2951f] p-4">
                     <div className="flex items-center justify-between rounded-xl bg-[#19c2951f] p-3">
                        <p className="font-poppinsRegular text-sm leading-6">Monthly Visitor</p>
                        <Image src={calendarIcon} />
                     </div>
                     <p className="text-center font-poppinsExtraBold text-[56px] leading-[100px]">4768</p>
                     <p className="mx-auto w-fit rounded-[57px] bg-[#ffffff0d] px-4 py-1 text-10 leading-5">
                        +23% than last month
                     </p>
                  </div>
               </Grid>
               <Grid item lg={4}>
                  <div className="min-h-[220px] rounded-2xl bg-[#8c72e21f] p-4">
                     <div className="flex items-center justify-between rounded-xl bg-[#8c72e21f] p-3">
                        <p className="font-poppinsRegular text-sm leading-6">Total Visitor</p>
                        <Image src={taskSquareIcon} />
                     </div>
                     <p className="text-center font-poppinsExtraBold text-[56px] leading-[100px]">51687</p>
                  </div>
               </Grid>

               <Grid item lg={8}>
                  <div className="h-[380px] rounded-2xl bg-[#ffffff0d] p-4">
                     <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                        <p className="font-poppinsRegular text-sm leading-6">Social Media Manager</p>
                        <Image src={emojiHappyIcon} />
                     </div>
                  </div>
               </Grid>

               <Grid item lg={4}>
                  <div className="h-[380px] rounded-2xl bg-[#ffffff0d] p-4">
                     <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                        <p className="font-poppinsRegular text-sm leading-6">Notification</p>
                        <Image src={notificationIcon} />
                     </div>
                  </div>
               </Grid>
            </Grid>
         </div>
      </AdminLayout>
   );
}

export default AdminPanelHome;

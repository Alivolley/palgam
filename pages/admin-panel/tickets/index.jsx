import Image from 'next/image';

// MUI
import { Button } from '@mui/material';

// Icons
import { FaUser } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { PiChecks } from 'react-icons/pi';

// Assets
import adminTicketsPic from '@/assets/images/adminPanel/adminTicketsPic.png';

// Components
import AdminLayout from '@/components/layout/admin-layout/admin-layout';

// Apis
import useGetTickets from '@/apis/tickets/useGetTickets';

function Tickets() {
   const { data: ticketsData, isLoading: ticketsIsLoading, mutate: ticketsMutate } = useGetTickets();

   console.log(ticketsData);

   return (
      <AdminLayout>
         <div>
            <div className="h-[160px] w-full">
               <Image src={adminTicketsPic} alt="security" className="size-full rounded-2xl object-cover" />
            </div>

            <div className="mt-8">
               <div className="rounded-2xl bg-[#ffffff0d] p-4">
                  <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] px-4 py-5">
                     <p className="font-poppinsRegular text-sm leading-6">New Tickets</p>
                     <div className="flex size-8 items-center justify-center rounded-full bg-[#ffffff66] text-sm">
                        2
                     </div>
                  </div>

                  <div className="mt-6 space-y-6">
                     <div className="rounded-xl border border-solid border-[#ffffff26] p-6">
                        <div className="flex items-center justify-between">
                           <div className="space-y-2">
                              <p className="flex items-center gap-2 font-poppinsExtraLight text-sm leading-6 text-[#ffffffb3]">
                                 <FaUser size="20px" /> Ahmad mohsen
                              </p>
                              <p className="flex items-center gap-2 font-poppinsExtraLight text-sm leading-6 text-[#ffffffb3]">
                                 <MdEmail size="20px" /> ali@gmail.com
                              </p>
                           </div>
                           <div className="flex items-center gap-2">
                              <Button
                                 sx={{
                                    width: '200px',
                                    height: '56px',
                                    borderRadius: '12px',
                                    backgroundColor: '#221C34',
                                    color: '#D9D0F5',
                                    fontSize: '12px',
                                    fontFamily: 'poppinsSemibold',
                                 }}
                              >
                                 Reply with email
                              </Button>
                              <Button
                                 sx={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '12px',
                                    backgroundColor: '#221C34',
                                    color: '#D9D0F5',
                                 }}
                              >
                                 <PiChecks size="26px" />
                              </Button>
                           </div>
                        </div>

                        <div className="mt-8">
                           <p className="font-poppinsExtraBold text-[18px] leading-6">Lorem ipsum dolor sit</p>
                           <p className="mt-2 font-poppinsExtraLight text-base">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nemo eaque delectus
                              ducimus ex, quae facere numquam sequi non ratione cupiditate nostrum mollitia consectetur
                           </p>
                        </div>

                        <div
                           className="mt-8 flex h-9 w-[200px] items-center justify-center rounded-xl
                         border border-solid border-[#ffffff26] font-poppinsLight text-xs leading-5 text-[#ffffffb3]"
                        >
                           05 March 2024 , 16:24
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </AdminLayout>
   );
}

export default Tickets;

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

import { useState } from 'react';
import Image from 'next/image';

// MUI
import { CircularProgress, Pagination } from '@mui/material';

// Assets
import adminTicketsPic from '@/assets/images/adminPanel/adminTicketsPic.png';

// Components
import AdminLayout from '@/components/layout/admin-layout/admin-layout';
import TicketCart from '@/components/pages/admin-panel/ticket-cart/ticket-cart';

// Apis
import useGetTickets from '@/apis/adminPanel/tickets/useGetTickets';

function Tickets() {
   const [pageStatus, setPageStatus] = useState(1);

   const { data: ticketsData, isLoading: ticketsIsLoading, mutate: ticketsMutate } = useGetTickets(pageStatus);

   return (
      <AdminLayout>
         <div>
            <div className="h-[160px] w-full">
               <Image src={adminTicketsPic} alt="security" className="size-full rounded-2xl object-cover" />
            </div>

            <div className="mt-8">
               <div className="min-h-[400px] rounded-2xl bg-[#ffffff0d] p-4">
                  <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] px-4 py-5">
                     <p className="font-poppinsRegular text-sm leading-6">New Tickets</p>
                     <div className="flex size-8 items-center justify-center rounded-full bg-[#ffffff66] text-sm">
                        {ticketsData?.total_objects}
                     </div>
                  </div>

                  {ticketsIsLoading ? (
                     <div className="flex items-center justify-center p-5">
                        <CircularProgress color="secondary" />
                     </div>
                  ) : (
                     <div className="mt-6 space-y-6">
                        {ticketsData?.data?.map(item => (
                           <TicketCart key={item?.id} detail={item} ticketsMutate={ticketsMutate} />
                        ))}

                        <div className="mt-10 flex items-center justify-center">
                           <Pagination
                              count={ticketsData?.total_pages}
                              onChange={(_, value) => setPageStatus(value)}
                              color="secondary"
                              page={ticketsData?.current_page}
                           />
                        </div>
                     </div>
                  )}
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

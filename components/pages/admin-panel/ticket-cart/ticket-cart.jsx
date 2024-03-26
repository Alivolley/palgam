import { useSWRConfig } from 'swr';

// MUI
import { Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import { FaUser } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { PiChecks } from 'react-icons/pi';

// Apis
import useSeenTicket from '@/apis/adminPanel/tickets/useSeenTicket';

function TicketCart({ detail, ticketsMutate }) {
   const { mutate } = useSWRConfig();

   const { trigger: seenTrigger, isMutating: seenIsMutating } = useSeenTicket();

   const seenHandler = () => {
      const newData = { id: detail?.id };
      seenTrigger(newData, {
         onSuccess: () => {
            ticketsMutate();
            mutate('ticket/new');
         },
      });
   };

   return (
      <div className="rounded-xl border border-solid border-[#ffffff26] p-6" key={detail?.id}>
         <div className="flex items-center justify-between">
            <div className="space-y-2">
               <p className="flex items-center gap-2 font-poppinsExtraLight text-sm leading-6 text-[#ffffffb3]">
                  <FaUser size="20px" /> {detail?.name}
               </p>
               <p className="flex items-center gap-2 font-poppinsExtraLight text-sm leading-6 text-[#ffffffb3]">
                  <MdEmail size="20px" /> {detail?.email}
               </p>
            </div>
            <div className="flex items-center gap-2">
               <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${detail?.email}`}
                  target="_blank"
                  rel="noreferrer"
               >
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
               </a>
               {!detail?.is_seen && (
                  <LoadingButton
                     sx={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '12px',
                        backgroundColor: '#221C34',
                        color: '#D9D0F5',
                     }}
                     loading={seenIsMutating}
                     onClick={seenHandler}
                  >
                     <PiChecks size="26px" />
                  </LoadingButton>
               )}
            </div>
         </div>

         <div className="mt-8">
            <p className="font-poppinsExtraBold text-[18px] leading-6">{detail?.title}</p>
            <p className="mt-2 font-poppinsExtraLight text-base">{detail?.text}</p>
         </div>

         <div
            className="mt-8 flex h-9 w-[200px] items-center justify-center rounded-xl border border-solid
        border-[#ffffff26] font-poppinsLight text-xs leading-5 text-[#ffffffb3]"
         >
            {detail?.created_at}
         </div>
      </div>
   );
}

export default TicketCart;

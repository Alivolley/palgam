import Image from 'next/image';
import { useForm } from 'react-hook-form';

// MUI
import { TextField, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import axiosInstance from '@/configs/axiosInstance';
import useSendTicket from '@/apis/contactUs/useSendTicket';

// Assets
const importAll = r => r.keys().map(r);
const images = importAll(require.context('@/assets/images/cards', false, /\.(png|jpe?g|svg)$/));

function ContactUs({ contactUsData }) {
   const firstArray = images.slice(0, 9);
   const secondArray = images.slice(10, 20);
   const thirdArray = images.slice(20);

   const { trigger: sentTicketTrigger, isMutating: sendTicketIsMutating } = useSendTicket();

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      defaultValues: {
         firstName: '',
         lastName: '',
         email: '',
         title: '',
         message: '',
      },
      mode: 'onSubmit',
   });

   const formSubmit = data => {
      const newTicket = {
         name: `${data?.firstName} ${data?.lastName}`,
         email: data?.email,
         text: data?.message,
         title: data?.title,
      };

      sentTicketTrigger(newTicket, {
         onSuccess: () => reset(),
      });
   };

   return (
      <div>
         <div className="flex flex-col customMd:flex-row-reverse">
            <div className="max-h-[1000px] customMd:-mb-12 customMd:flex customMd:w-[944px] customMd:items-center customMd:gap-4 customMd:overflow-hidden">
               <div className="flex shrink-0 items-center justify-center gap-2 overflow-hidden customMd:flex-col customMd:gap-4">
                  {firstArray?.map(item => (
                     <div
                        className="h-[200px] w-[128px] shrink-0 customMd:h-[344px] customMd:w-[204px]"
                        key={crypto.randomUUID()}
                     >
                        <Image src={item} alt="cart" className="size-full rounded-xl object-cover" />
                     </div>
                  ))}
               </div>

               <div className="mt-2 flex shrink-0 items-center justify-center gap-2 overflow-hidden customMd:mt-0 customMd:flex-col customMd:gap-4">
                  {secondArray?.map(item => (
                     <div
                        className="h-[200px] w-[128px] shrink-0 customMd:h-[344px] customMd:w-[204px]"
                        key={crypto.randomUUID()}
                     >
                        <Image src={item} alt="cart" className="size-full rounded-xl object-cover" />
                     </div>
                  ))}
               </div>

               <div className="mt-2 flex shrink-0 items-center justify-center gap-2 overflow-hidden customMd:mt-0 customMd:flex-col customMd:gap-4">
                  {thirdArray?.map(item => (
                     <div
                        className="h-[200px] w-[128px] shrink-0 customMd:h-[344px] customMd:w-[204px]"
                        key={crypto.randomUUID()}
                     >
                        <Image src={item} alt="cart" className="size-full rounded-xl object-cover" />
                     </div>
                  ))}
               </div>
            </div>
            <div className="relative mt-14 px-4 customMd:mt-[167px] customMd:grow customMd:px-20">
               <div
                  className="absolute inset-y-0 left-0 w-[200px] rounded-[1077] opacity-[0.15] blur-[200px] customMd:w-[528px]"
                  style={{ background: 'linear-gradient(180deg, #5922E9 0%, #DD43EF 100%)' }}
               />
               <p className="relative text-center font-arimaBold text-[50px] leading-[56px] text-white customMd:text-start customMd:text-[88px] customMd:leading-[112px]">
                  {contactUsData?.data?.contactUs?.title}
               </p>
               <p className="relative mt-2 text-center font-poppinsExtraLight text-xs leading-6 text-[#ffffffb3] customMd:text-start customMd:text-[18px] customMd:leading-8">
                  {contactUsData?.data?.contactUs?.description}
               </p>
               <form className="relative mt-16" onSubmit={handleSubmit(formSubmit)}>
                  <Grid container spacing="32px">
                     <Grid item xs={12} md={6}>
                        <TextField
                           fullWidth
                           placeholder="First name"
                           color="customPurple"
                           {...register('firstName', {
                              required: {
                                 value: true,
                                 message: 'This filed is required',
                              },
                           })}
                           sx={{
                              '& .MuiOutlinedInput-root': {
                                 backgroundColor: '#ffffff0d',
                                 fontSize: '18px',
                                 height: '72px',
                              },
                           }}
                           error={!!errors?.firstName}
                           helperText={errors?.firstName?.message}
                           disabled={sendTicketIsMutating}
                        />
                     </Grid>
                     <Grid item xs={12} md={6}>
                        <TextField
                           fullWidth
                           placeholder="Last name"
                           color="customPurple"
                           {...register('lastName', {
                              required: {
                                 value: true,
                                 message: 'This filed is required',
                              },
                           })}
                           sx={{
                              '& .MuiOutlinedInput-root': {
                                 backgroundColor: '#ffffff0d',
                                 fontSize: '18px',
                                 height: '72px',
                              },
                           }}
                           error={!!errors?.lastName}
                           helperText={errors?.lastName?.message}
                           disabled={sendTicketIsMutating}
                        />
                     </Grid>
                     <Grid item xs={12} md={6}>
                        <TextField
                           fullWidth
                           placeholder="Email"
                           color="customPurple"
                           {...register('email', {
                              required: {
                                 value: true,
                                 message: 'This filed is required',
                              },
                              pattern: {
                                 value: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/,
                                 message: 'Please enter a valid email',
                              },
                           })}
                           sx={{
                              '& .MuiOutlinedInput-root': {
                                 backgroundColor: '#ffffff0d',
                                 fontSize: '18px',
                                 height: '72px',
                              },
                           }}
                           error={!!errors?.email}
                           helperText={errors?.email?.message}
                           disabled={sendTicketIsMutating}
                        />
                     </Grid>
                     <Grid item xs={12} md={6}>
                        <TextField
                           fullWidth
                           placeholder="Title"
                           color="customPurple"
                           {...register('title', {
                              required: {
                                 value: true,
                                 message: 'This filed is required',
                              },
                           })}
                           sx={{
                              '& .MuiOutlinedInput-root': {
                                 backgroundColor: '#ffffff0d',
                                 fontSize: '18px',
                                 height: '72px',
                              },
                           }}
                           error={!!errors?.title}
                           helperText={errors?.title?.message}
                           disabled={sendTicketIsMutating}
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                           fullWidth
                           multiline
                           minRows={5}
                           placeholder="Message"
                           color="customPurple"
                           {...register('message', {
                              required: {
                                 value: true,
                                 message: 'This filed is required',
                              },
                           })}
                           sx={{
                              '& .MuiOutlinedInput-root': {
                                 backgroundColor: '#ffffff0d',
                                 fontSize: '18px',
                              },
                           }}
                           error={!!errors?.message}
                           helperText={errors?.message?.message}
                           disabled={sendTicketIsMutating}
                        />
                     </Grid>
                  </Grid>
                  <div className="mt-8 flex justify-end">
                     <LoadingButton
                        type="submit"
                        variant="contained"
                        color="secondary"
                        className="h-[48px] w-[200px] text-xs customMd:h-[56px] customMd:w-[252px] customMd:text-sm"
                        sx={{
                           borderRadius: '12px',
                           fontFamily: 'poppinsRegular',
                           ':hover': { backgroundColor: '#221C34' },
                        }}
                        loading={sendTicketIsMutating}
                     >
                        Submit
                     </LoadingButton>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}

export default ContactUs;

export async function getStaticProps(context) {
   const contactUsData = await axiosInstance(`page/?lang=${context.locale}&page=suppurt_pages`).then(res => res.data);

   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
         contactUsData,
      },
      revalidate: 5,
   };
}

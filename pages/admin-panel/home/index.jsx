import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Image from 'next/image';

// MUI
import {
   Button,
   CircularProgress,
   Divider,
   FormControl,
   Grid,
   InputAdornment,
   OutlinedInput,
   Switch,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material/styles';

// Icons
import { BiEditAlt } from 'react-icons/bi';
import { ImFilePicture } from 'react-icons/im';
import FooterInstagramIcon from '@/assets/icons/components/footerInstagramIcon';
import FooterDiscordIcon from '@/assets/icons/components/footerDiscordIcon';
import FooterTelegramIcon from '@/assets/icons/components/footerTelegramIcon';
import FooterEmailIcon from '@/assets/icons/components/footerEmailIcon';

// Components
import AdminLayout from '@/components/layout/admin-layout/admin-layout';

// Assets
import clockIcon from '@/assets/icons/adminPanel/Clock.svg';
import calendarIcon from '@/assets/icons/adminPanel/Calendar.svg';
import taskSquareIcon from '@/assets/icons/adminPanel/task-square.svg';
import emojiHappyIcon from '@/assets/icons/adminPanel/Emoji-happy.svg';
import notificationIcon from '@/assets/icons/adminPanel/Notification.svg';
import attachSquareIcon from '@/assets/icons/adminPanel/attach-square.svg';
import HeartCircleIcon from '@/assets/icons/adminPanel/Heart-circle.svg';

// Apis
import useGetAllLinks from '@/apis/adminPanel/home/useGetAllLinks';
import useGetStoreLink from '@/apis/adminPanel/home/useGetStoreLink';
import useEditLinks from '@/apis/adminPanel/home/useEditLinks';
import useEditStoreLinks from '@/apis/adminPanel/home/useEditStoreLinks';
import useGetNotifs from '@/apis/adminPanel/home/useGetNotifs';
import useSeenNotifs from '@/apis/adminPanel/home/useSeenNotifs';
import useChangeLogo from '@/apis/adminPanel/home/useChangeLogo';
import useGetLogo from '@/apis/adminPanel/home/useGetLogo';

const VisuallyHiddenInput = styled('input')({
   clip: 'rect(0 0 0 0)',
   clipPath: 'inset(50%)',
   height: 1,
   overflow: 'hidden',
   position: 'absolute',
   bottom: 0,
   left: 0,
   whiteSpace: 'nowrap',
   width: 1,
});

const InputStyle = {
   '& .MuiOutlinedInput-root': {
      backgroundColor: '#ffffff0d',
      fontSize: '16px',
      height: '64px',
   },
};

function AdminPanelHome() {
   const [logoPic, setLogoPic] = useState();
   const [logoPicUrl, setLogoPicUrl] = useState();

   const { data: notifsData, isLoading: notifsIsLoading, mutate: notifsMutate } = useGetNotifs();
   const { data: linksData, isLoading: linksIsLoading } = useGetAllLinks();
   const { data: storeLinkData, isLoading: storeLinkIsLoading } = useGetStoreLink();
   const { data: logoData, isLoading: logoIsLoading } = useGetLogo();
   const { trigger: editLinksTrigger, isMutating: editLinksIsMutating } = useEditLinks();
   const { trigger: editStoreLinksTrigger, isMutating: editStoreLinksIsMutating } = useEditStoreLinks();
   const { trigger: seenNotifsTrigger, isMutating: seenNotifsIsMutating } = useSeenNotifs();
   const { trigger: changeLogoTrigger, isMutating: changeLogoIsMutating } = useChangeLogo();

   const { register, control, handleSubmit, setValue } = useForm({
      defaultValues: {
         instagram: '',
         instagramFloatingStatus: false,
         instagramFooterStatus: false,
         discord: '',
         discordFloatingStatus: false,
         discordFooterStatus: false,
         telegram: '',
         telegramFloatingStatus: false,
         telegramFooterStatus: false,
         email: '',
         emailFloatingStatus: false,
         emailFooterStatus: false,
      },
   });

   const {
      register: storeLinkRegister,
      handleSubmit: storeLinkHandleSubmit,
      setValue: storeLinkSetValue,
   } = useForm({
      defaultValues: {
         appStore: '',
         googlePlay: '',
      },
   });

   useEffect(() => {
      if (linksData) {
         if (linksData?.data?.instagram) {
            setValue('instagram', linksData?.data?.instagram?.link);
            setValue('instagramFloatingStatus', linksData?.data?.instagram?.popup_active);
            setValue('instagramFooterStatus', linksData?.data?.instagram?.link_active);
         }
         if (linksData?.data?.discord) {
            setValue('discord', linksData?.data?.discord?.link);
            setValue('discordFloatingStatus', linksData?.data?.discord?.popup_active);
            setValue('discordFooterStatus', linksData?.data?.discord?.link_active);
         }
         if (linksData?.data?.telegram) {
            setValue('telegram', linksData?.data?.telegram?.link);
            setValue('telegramFloatingStatus', linksData?.data?.telegram?.popup_active);
            setValue('telegramFooterStatus', linksData?.data?.telegram?.link_active);
         }
         if (linksData?.data?.email) {
            setValue('email', linksData?.data?.email?.link);
            setValue('emailFloatingStatus', linksData?.data?.email?.popup_active);
            setValue('emailFooterStatus', linksData?.data?.email?.link_active);
         }
      }
   }, [linksData]);

   useEffect(() => {
      if (storeLinkData) {
         storeLinkSetValue('appStore', storeLinkData?.app_store_link);
         storeLinkSetValue('googlePlay', storeLinkData?.google_play_link);
      }
   }, [storeLinkData]);

   useEffect(() => {
      if (logoData && logoData?.logo) {
         setLogoPicUrl(logoData?.logo);
      }
   }, [logoData]);

   const changeLogoHandler = e => {
      if (e?.target?.files?.[0]) {
         const file = e?.target?.files?.[0];
         setLogoPic(file);
         const fileURL = URL.createObjectURL(file);
         setLogoPicUrl(fileURL);
      }
   };

   const LinkFormSubmit = data => {
      const newData = {
         data: {
            instagram: {
               link: data?.instagram,
               link_active: data?.instagramFooterStatus,
               popup_active: data?.instagramFloatingStatus,
            },
            discord: {
               link: data?.discord,
               link_active: data?.discordFooterStatus,
               popup_active: data?.discordFloatingStatus,
            },
            telegram: {
               link: data?.telegram,
               link_active: data?.telegramFooterStatus,
               popup_active: data?.telegramFloatingStatus,
            },
            email: {
               link: data?.email,
               link_active: data?.emailFooterStatus,
               popup_active: data?.emailFloatingStatus,
            },
         },
      };

      editLinksTrigger(newData);
   };

   const storeLinkFormSubmit = data => {
      const newData = {
         app_store_link: data?.appStore,
         google_play_link: data?.googlePlay,
      };

      editStoreLinksTrigger(newData);
   };

   const seenNotifs = () => {
      seenNotifsTrigger(undefined, {
         onSuccess: () => notifsMutate(),
      });
   };

   const changeLogoApiHandler = () => {
      const formData = new FormData();
      formData?.append('logo', logoPic);
      changeLogoTrigger(formData);
   };

   return (
      <AdminLayout>
         <div>
            <Grid container spacing="16px">
               <Grid item lg={4}>
                  <div className="min-h-[220px] rounded-2xl bg-[#dd43f01f] p-4">
                     <div className="flex items-center justify-between rounded-xl bg-[#dd43f01f] p-3">
                        <p className="font-poppinsRegular text-sm leading-6">Daily Visitor</p>
                        <Image src={clockIcon} alt="icon" />
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
                        <Image src={calendarIcon} alt="icon" />
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
                        <Image src={taskSquareIcon} alt="icon" />
                     </div>
                     <p className="text-center font-poppinsExtraBold text-[56px] leading-[100px]">51687</p>
                  </div>
               </Grid>

               <Grid item lg={8}>
                  <div className="flex h-[380px] flex-col rounded-2xl bg-[#ffffff0d] p-4">
                     <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                        <p className="font-poppinsRegular text-sm leading-6">Social Media Manager</p>
                        <Image src={emojiHappyIcon} alt="icon" />
                     </div>
                     <form className="mt-4 space-y-4 overflow-auto pr-2" onSubmit={handleSubmit(LinkFormSubmit)}>
                        {linksIsLoading ? (
                           <div className="flex items-center justify-center p-5">
                              <CircularProgress color="secondary" />
                           </div>
                        ) : (
                           <>
                              <div className="flex gap-3 rounded-xl border border-solid border-[#ffffff26] px-4 py-6">
                                 <div className="flex-[1.5] shrink-0">
                                    <div>
                                       <p className="font-poppinsExtraBold text-2xl leading-8">Instagram</p>
                                       <p className="my-3 text-10 leading-4 text-[#ffffffb3]">
                                          Instagram is an photo and video sharing social networking service owned by
                                          Meta Platforms.
                                       </p>
                                    </div>
                                    <div>
                                       <FormControl variant="outlined" fullWidth color="customPurple" sx={InputStyle}>
                                          <OutlinedInput
                                             placeholder="Link"
                                             {...register('instagram')}
                                             endAdornment={
                                                <InputAdornment position="end">
                                                   <BiEditAlt size="24px" />
                                                </InputAdornment>
                                             }
                                             disabled={editLinksIsMutating}
                                          />
                                       </FormControl>
                                    </div>
                                 </div>
                                 <Divider orientation="vertical" flexItem />
                                 <div className="flex-1 shrink-0 grow">
                                    <div className="flex size-14 items-center justify-center rounded-xl bg-[#d73f9033]">
                                       <FooterInstagramIcon />
                                    </div>

                                    <div className="mt-5 flex flex-col gap-0">
                                       <div className="flex items-center justify-between">
                                          <p className="text-sm">Show in Footer</p>
                                          <Controller
                                             control={control}
                                             name="instagramFooterStatus"
                                             render={({ field: { onChange, value } }) => (
                                                <Switch
                                                   color="secondary"
                                                   value={value}
                                                   checked={value}
                                                   onChange={(e, newValue) => onChange(newValue)}
                                                   disabled={editLinksIsMutating}
                                                />
                                             )}
                                          />
                                       </div>
                                       <Divider flexItem />
                                       <div className="flex items-center justify-between">
                                          <p className="text-sm">Show floating Button</p>
                                          <Controller
                                             control={control}
                                             name="instagramFloatingStatus"
                                             render={({ field: { onChange, value } }) => (
                                                <Switch
                                                   color="secondary"
                                                   value={value}
                                                   checked={value}
                                                   onChange={(e, newValue) => onChange(newValue)}
                                                   disabled={editLinksIsMutating}
                                                />
                                             )}
                                          />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="flex gap-3 rounded-xl border border-solid border-[#ffffff26] px-4 py-6">
                                 <div className="flex-[1.5] shrink-0">
                                    <div>
                                       <p className="font-poppinsExtraBold text-2xl leading-8">Discord</p>
                                       <p className="my-3 text-10 leading-4 text-[#ffffffb3]">
                                          Discord is an instant messaging and VoIP social platform which allows
                                          communication through voice calls, video calls, text messaging, and media and
                                          files.
                                       </p>
                                    </div>
                                    <div>
                                       <FormControl variant="outlined" fullWidth color="customPurple" sx={InputStyle}>
                                          <OutlinedInput
                                             placeholder="Link"
                                             {...register('discord')}
                                             endAdornment={
                                                <InputAdornment position="end">
                                                   <BiEditAlt size="24px" />
                                                </InputAdornment>
                                             }
                                             disabled={editLinksIsMutating}
                                          />
                                       </FormControl>
                                    </div>
                                 </div>
                                 <Divider orientation="vertical" flexItem />
                                 <div className="flex-1 shrink-0 grow">
                                    <div className="flex size-14 items-center justify-center rounded-xl bg-[#5865f233]">
                                       <FooterDiscordIcon />
                                    </div>

                                    <div className="mt-5 flex flex-col gap-0">
                                       <div className="flex items-center justify-between">
                                          <p className="text-sm">Show in Footer</p>
                                          <Controller
                                             control={control}
                                             name="discordFooterStatus"
                                             render={({ field: { onChange, value } }) => (
                                                <Switch
                                                   color="secondary"
                                                   value={value}
                                                   checked={value}
                                                   onChange={(e, newValue) => onChange(newValue)}
                                                   disabled={editLinksIsMutating}
                                                />
                                             )}
                                          />
                                       </div>
                                       <Divider flexItem />
                                       <div className="flex items-center justify-between">
                                          <p className="text-sm">Show floating Button</p>
                                          <Controller
                                             control={control}
                                             name="discordFloatingStatus"
                                             render={({ field: { onChange, value } }) => (
                                                <Switch
                                                   color="secondary"
                                                   value={value}
                                                   checked={value}
                                                   onChange={(e, newValue) => onChange(newValue)}
                                                   disabled={editLinksIsMutating}
                                                />
                                             )}
                                          />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="flex gap-3 rounded-xl border border-solid border-[#ffffff26] px-4 py-6">
                                 <div className="flex-[1.5] shrink-0">
                                    <div>
                                       <p className="font-poppinsExtraBold text-2xl leading-8">Telegram</p>
                                       <p className="my-3 text-10 leading-4 text-[#ffffffb3]">
                                          Telegram Messenger, commonly known as Telegram, is a cloud-based,
                                          cross-platform, encrypted instant messaging service.
                                       </p>
                                    </div>
                                    <div>
                                       <FormControl variant="outlined" fullWidth color="customPurple" sx={InputStyle}>
                                          <OutlinedInput
                                             placeholder="Link"
                                             {...register('telegram')}
                                             endAdornment={
                                                <InputAdornment position="end">
                                                   <BiEditAlt size="24px" />
                                                </InputAdornment>
                                             }
                                             disabled={editLinksIsMutating}
                                          />
                                       </FormControl>
                                    </div>
                                 </div>
                                 <Divider orientation="vertical" flexItem />
                                 <div className="flex-1 shrink-0 grow">
                                    <div className="flex size-14 items-center justify-center rounded-xl bg-[#039be526]">
                                       <FooterTelegramIcon />
                                    </div>

                                    <div className="mt-5 flex flex-col gap-0">
                                       <div className="flex items-center justify-between">
                                          <p className="text-sm">Show in Footer</p>
                                          <Controller
                                             control={control}
                                             name="telegramFooterStatus"
                                             render={({ field: { onChange, value } }) => (
                                                <Switch
                                                   color="secondary"
                                                   value={value}
                                                   checked={value}
                                                   onChange={(e, newValue) => onChange(newValue)}
                                                   disabled={editLinksIsMutating}
                                                />
                                             )}
                                          />
                                       </div>
                                       <Divider flexItem />
                                       <div className="flex items-center justify-between">
                                          <p className="text-sm">Show floating Button</p>
                                          <Controller
                                             control={control}
                                             name="telegramFloatingStatus"
                                             render={({ field: { onChange, value } }) => (
                                                <Switch
                                                   color="secondary"
                                                   value={value}
                                                   checked={value}
                                                   onChange={(e, newValue) => onChange(newValue)}
                                                   disabled={editLinksIsMutating}
                                                />
                                             )}
                                          />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="flex gap-3 rounded-xl border border-solid border-[#ffffff26] px-4 py-6">
                                 <div className="flex-[1.5] shrink-0">
                                    <div>
                                       <p className="font-poppinsExtraBold text-2xl leading-8">Email</p>
                                       <p className="my-3 text-10 leading-4 text-[#ffffffb3]">
                                          Gmail is an email service provided by Google. As of 2019, it had 1.5 billion
                                          active users worldwide, making it the largest email service in the world.
                                       </p>
                                    </div>
                                    <div>
                                       <FormControl variant="outlined" fullWidth color="customPurple" sx={InputStyle}>
                                          <OutlinedInput
                                             placeholder="Link"
                                             {...register('email')}
                                             endAdornment={
                                                <InputAdornment position="end">
                                                   <BiEditAlt size="24px" />
                                                </InputAdornment>
                                             }
                                             disabled={editLinksIsMutating}
                                          />
                                       </FormControl>
                                    </div>
                                 </div>
                                 <Divider orientation="vertical" flexItem />
                                 <div className="flex-1 shrink-0 grow">
                                    <div className="flex size-14 items-center justify-center rounded-xl bg-[#8c72e226]">
                                       <FooterEmailIcon />
                                    </div>

                                    <div className="mt-5 flex flex-col gap-0">
                                       <div className="flex items-center justify-between">
                                          <p className="text-sm">Show in Footer</p>
                                          <Controller
                                             control={control}
                                             name="emailFooterStatus"
                                             render={({ field: { onChange, value } }) => (
                                                <Switch
                                                   color="secondary"
                                                   value={value}
                                                   checked={value}
                                                   onChange={(e, newValue) => onChange(newValue)}
                                                   disabled={editLinksIsMutating}
                                                />
                                             )}
                                          />
                                       </div>
                                       <Divider flexItem />
                                       <div className="flex items-center justify-between">
                                          <p className="text-sm">Show floating Button</p>
                                          <Controller
                                             control={control}
                                             name="emailFloatingStatus"
                                             render={({ field: { onChange, value } }) => (
                                                <Switch
                                                   color="secondary"
                                                   value={value}
                                                   checked={value}
                                                   onChange={(e, newValue) => onChange(newValue)}
                                                   disabled={editLinksIsMutating}
                                                />
                                             )}
                                          />
                                       </div>
                                    </div>
                                 </div>
                              </div>

                              <LoadingButton
                                 type="submit"
                                 fullWidth
                                 sx={{ fontFamily: 'poppinsRegular', height: '56px', borderRadius: '16px' }}
                                 variant="contained"
                                 color="secondary"
                                 loading={editLinksIsMutating}
                              >
                                 Submit
                              </LoadingButton>
                           </>
                        )}
                     </form>
                  </div>
               </Grid>

               <Grid item lg={4}>
                  <div className="flex h-[380px] flex-col rounded-2xl bg-[#ffffff0d] p-4">
                     <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                        <p className="font-poppinsRegular text-sm leading-6">Notification</p>
                        <Image src={notificationIcon} alt="icon" />
                     </div>
                     {notifsIsLoading ? (
                        <div className="mt-10 flex items-center justify-center p-5">
                           <CircularProgress color="secondary" />
                        </div>
                     ) : (
                        <div className="mt-4 space-y-6 overflow-auto rounded-xl border border-solid border-[#ffffff26] px-4 py-6">
                           {notifsData?.data?.some(item => !item?.is_seen) && (
                              <LoadingButton
                                 sx={{
                                    fontFamily: 'poppinsExtraLight',
                                    color: '#ffffff88',
                                    fontSize: '12px',
                                    letterSpacing: '1px',
                                    borderRadius: '5px',
                                    ':hover': { backgroundColor: 'transparent', color: 'white' },
                                 }}
                                 fullWidth
                                 onClick={seenNotifs}
                                 loading={seenNotifsIsMutating}
                              >
                                 seen all
                              </LoadingButton>
                           )}
                           {notifsData?.data?.map(item => (
                              <div key={item?.id}>
                                 <div className="mb-0.5 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                       <span
                                          className={`size-[6px] rounded-full ${
                                             item?.is_seen ? 'bg-[#ffffff4d]' : 'bg-[#F23645]'
                                          }`}
                                       />
                                       <p className="font-poppinsLight text-xs leading-5 text-[#ffffff80]">
                                          {item?.time}
                                       </p>
                                    </div>
                                 </div>
                                 <p className="ms-[18px] font-poppinsLight text-xs leading-5">{item?.text}</p>
                              </div>
                           ))}
                        </div>
                     )}
                  </div>
               </Grid>

               <Grid item lg={8}>
                  <div className="min-h-[276px] rounded-2xl bg-[#ffffff0d] p-4">
                     <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                        <p className="font-poppinsRegular text-sm leading-6">Store Link</p>
                        <Image src={attachSquareIcon} alt="icon" />
                     </div>

                     {storeLinkIsLoading ? (
                        <div className="flex items-center justify-center p-5">
                           <CircularProgress color="secondary" />
                        </div>
                     ) : (
                        <form onSubmit={storeLinkHandleSubmit(storeLinkFormSubmit)}>
                           <div className="my-4 flex items-center gap-4">
                              <div className="flex-1">
                                 <p className="mb-2 text-sm leading-6">App Store</p>
                                 <FormControl variant="outlined" fullWidth color="customPurple" sx={InputStyle}>
                                    <OutlinedInput
                                       placeholder="Link"
                                       {...storeLinkRegister('appStore')}
                                       endAdornment={
                                          <InputAdornment position="end">
                                             <BiEditAlt size="24px" />
                                          </InputAdornment>
                                       }
                                       disabled={editStoreLinksIsMutating}
                                    />
                                 </FormControl>
                              </div>
                              <div className="flex-1">
                                 <p className="mb-2 text-sm leading-6">Google Play</p>
                                 <FormControl variant="outlined" fullWidth color="customPurple" sx={InputStyle}>
                                    <OutlinedInput
                                       placeholder="Link"
                                       {...storeLinkRegister('googlePlay')}
                                       endAdornment={
                                          <InputAdornment position="end">
                                             <BiEditAlt size="24px" />
                                          </InputAdornment>
                                       }
                                       disabled={editStoreLinksIsMutating}
                                    />
                                 </FormControl>
                              </div>
                           </div>
                           <LoadingButton
                              type="submit"
                              sx={{ fontFamily: 'poppinsRegular', height: '56px', borderRadius: '16px' }}
                              variant="contained"
                              fullWidth
                              color="secondary"
                              loading={editStoreLinksIsMutating}
                           >
                              Submit
                           </LoadingButton>
                        </form>
                     )}
                  </div>
               </Grid>

               <Grid item lg={4}>
                  <div className="min-h-[276px] rounded-2xl bg-[#87f2fc1f] p-4">
                     <div className="flex items-center justify-between rounded-xl bg-[#87f2fc1f] p-3">
                        <p className="font-poppinsRegular text-sm leading-6">Logo</p>
                        <Image src={HeartCircleIcon} alt="icon" />
                     </div>

                     {logoIsLoading ? (
                        <div className="flex items-center justify-center p-5">
                           <CircularProgress color="primary" />
                        </div>
                     ) : (
                        <>
                           <div className="mb-2 mt-4 flex items-center gap-4 rounded-xl border border-solid border-[#ffffff26] px-4 py-[10px]">
                              <div className="flex w-20 items-center justify-center">
                                 {logoPicUrl ? (
                                    <div className="relative h-[75px] w-full">
                                       <Image src={logoPicUrl} alt="logo" className="object-cover" fill />
                                    </div>
                                 ) : (
                                    <ImFilePicture size="30px" />
                                 )}
                              </div>
                              <Divider orientation="vertical" flexItem />
                              <div>
                                 <p className="font-poppinsLight text-10 leading-4 text-[#ffffffb3]">
                                    You can change the logo on all pages of the site
                                 </p>

                                 <div className="mt-2">
                                    <Button
                                       sx={{
                                          backgroundColor: '#ffffff0d',
                                          fontFamily: 'poppinsSemibold',
                                          color: 'white',
                                          borderRadius: '12px',
                                          fontSize: '12px',
                                          cursor: 'pointer',
                                          height: '40px',
                                       }}
                                       fullWidth
                                       component="label"
                                       role={undefined}
                                       tabIndex={-1}
                                    >
                                       Choose File
                                       <VisuallyHiddenInput type="file" onChange={changeLogoHandler} accept="image/*" />
                                    </Button>
                                 </div>
                              </div>
                           </div>

                           <LoadingButton
                              sx={{ fontFamily: 'poppinsRegular', height: '56px', borderRadius: '16px' }}
                              variant="contained"
                              fullWidth
                              color="primary"
                              loading={changeLogoIsMutating}
                              onClick={changeLogoApiHandler}
                              disabled={!logoPic}
                           >
                              change
                           </LoadingButton>
                        </>
                     )}
                  </div>
               </Grid>
            </Grid>
         </div>
      </AdminLayout>
   );
}

export default AdminPanelHome;

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

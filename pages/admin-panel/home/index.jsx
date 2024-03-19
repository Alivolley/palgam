import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

// MUI
import { Button, Divider, FormControl, Grid, IconButton, InputAdornment, OutlinedInput, Switch } from '@mui/material';
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

function AdminPanelHome() {
   const [logoPic, setLogoPic] = useState();
   const [logoPicUrl, setLogoPicUrl] = useState();

   const { register, getValues } = useForm({
      defaultValues: {
         instagram: '',
         discord: '',
         telegram: '',
         email: '',
         appStore: '',
         googlePlay: '',
      },
   });

   const sendInstagramLink = () => {
      console.log(getValues('instagram'));
   };

   const changeLogoHandler = e => {
      if (e?.target?.files?.[0]) {
         const file = e?.target?.files?.[0];
         setLogoPic(file);
         const fileURL = URL.createObjectURL(file);
         setLogoPicUrl(fileURL);
      }
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
                     <div className="mt-4 space-y-4 overflow-auto pr-2">
                        <div className="flex gap-3 rounded-xl border border-solid border-[#ffffff26] px-4 py-6">
                           <div className="flex-[1.5] shrink-0">
                              <div>
                                 <p className="font-poppinsExtraBold text-2xl leading-8">Instagram</p>
                                 <p className="my-3 text-10 leading-4 text-[#ffffffb3]">
                                    Instagram is an photo and video sharing social networking service owned by Meta
                                    Platforms.
                                 </p>
                              </div>
                              <div>
                                 <FormControl variant="outlined" fullWidth color="customPurple">
                                    <OutlinedInput
                                       placeholder="Link"
                                       sx={{
                                          '& .MuiOutlinedInput-root': {
                                             backgroundColor: '#ffffff0d',
                                             fontSize: '16px',
                                             height: '64px',
                                          },
                                       }}
                                       {...register('instagram')}
                                       onKeyDown={e => {
                                          if (e.key === 'Enter') {
                                             sendInstagramLink();
                                          }
                                       }}
                                       endAdornment={
                                          <InputAdornment position="end">
                                             <IconButton edge="end" onClick={sendInstagramLink}>
                                                <BiEditAlt />
                                             </IconButton>
                                          </InputAdornment>
                                       }
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
                                    <Switch color="secondary" />
                                 </div>
                                 <Divider flexItem />
                                 <div className="flex items-center justify-between">
                                    <p className="text-sm">Show floating Button</p>
                                    <Switch color="secondary" />
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="flex gap-3 rounded-xl border border-solid border-[#ffffff26] px-4 py-6">
                           <div className="flex-[1.5] shrink-0">
                              <div>
                                 <p className="font-poppinsExtraBold text-2xl leading-8">Discord</p>
                                 <p className="my-3 text-10 leading-4 text-[#ffffffb3]">
                                    Discord is an instant messaging and VoIP social platform which allows communication
                                    through voice calls, video calls, text messaging, and media and files.
                                 </p>
                              </div>
                              <div>
                                 <FormControl variant="outlined" fullWidth color="customPurple">
                                    <OutlinedInput
                                       placeholder="Link"
                                       sx={{
                                          '& .MuiOutlinedInput-root': {
                                             backgroundColor: '#ffffff0d',
                                             fontSize: '16px',
                                             height: '64px',
                                          },
                                       }}
                                       {...register('discord')}
                                       onKeyDown={e => {
                                          if (e.key === 'Enter') {
                                             sendInstagramLink();
                                          }
                                       }}
                                       endAdornment={
                                          <InputAdornment position="end">
                                             <IconButton edge="end" onClick={sendInstagramLink}>
                                                <BiEditAlt />
                                             </IconButton>
                                          </InputAdornment>
                                       }
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
                                    <Switch color="secondary" />
                                 </div>
                                 <Divider flexItem />
                                 <div className="flex items-center justify-between">
                                    <p className="text-sm">Show floating Button</p>
                                    <Switch color="secondary" />
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="flex gap-3 rounded-xl border border-solid border-[#ffffff26] px-4 py-6">
                           <div className="flex-[1.5] shrink-0">
                              <div>
                                 <p className="font-poppinsExtraBold text-2xl leading-8">Telegram</p>
                                 <p className="my-3 text-10 leading-4 text-[#ffffffb3]">
                                    Telegram Messenger, commonly known as Telegram, is a cloud-based, cross-platform,
                                    encrypted instant messaging service.
                                 </p>
                              </div>
                              <div>
                                 <FormControl variant="outlined" fullWidth color="customPurple">
                                    <OutlinedInput
                                       placeholder="Link"
                                       sx={{
                                          '& .MuiOutlinedInput-root': {
                                             backgroundColor: '#ffffff0d',
                                             fontSize: '16px',
                                             height: '64px',
                                          },
                                       }}
                                       {...register('telegram')}
                                       onKeyDown={e => {
                                          if (e.key === 'Enter') {
                                             sendInstagramLink();
                                          }
                                       }}
                                       endAdornment={
                                          <InputAdornment position="end">
                                             <IconButton edge="end" onClick={sendInstagramLink}>
                                                <BiEditAlt />
                                             </IconButton>
                                          </InputAdornment>
                                       }
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
                                    <Switch color="secondary" />
                                 </div>
                                 <Divider flexItem />
                                 <div className="flex items-center justify-between">
                                    <p className="text-sm">Show floating Button</p>
                                    <Switch color="secondary" />
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="flex gap-3 rounded-xl border border-solid border-[#ffffff26] px-4 py-6">
                           <div className="flex-[1.5] shrink-0">
                              <div>
                                 <p className="font-poppinsExtraBold text-2xl leading-8">Email</p>
                                 <p className="my-3 text-10 leading-4 text-[#ffffffb3]">
                                    Gmail is an email service provided by Google. As of 2019, it had 1.5 billion active
                                    users worldwide, making it the largest email service in the world.
                                 </p>
                              </div>
                              <div>
                                 <FormControl variant="outlined" fullWidth color="customPurple">
                                    <OutlinedInput
                                       placeholder="Link"
                                       sx={{
                                          '& .MuiOutlinedInput-root': {
                                             backgroundColor: '#ffffff0d',
                                             fontSize: '16px',
                                             height: '64px',
                                          },
                                       }}
                                       {...register('email')}
                                       onKeyDown={e => {
                                          if (e.key === 'Enter') {
                                             sendInstagramLink();
                                          }
                                       }}
                                       endAdornment={
                                          <InputAdornment position="end">
                                             <IconButton edge="end" onClick={sendInstagramLink}>
                                                <BiEditAlt />
                                             </IconButton>
                                          </InputAdornment>
                                       }
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
                                    <Switch color="secondary" />
                                 </div>
                                 <Divider flexItem />
                                 <div className="flex items-center justify-between">
                                    <p className="text-sm">Show floating Button</p>
                                    <Switch color="secondary" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </Grid>

               <Grid item lg={4}>
                  <div className="flex h-[380px] flex-col rounded-2xl bg-[#ffffff0d] p-4">
                     <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                        <p className="font-poppinsRegular text-sm leading-6">Notification</p>
                        <Image src={notificationIcon} alt="icon" />
                     </div>
                     <div className="mt-4 space-y-6 overflow-auto rounded-xl border border-solid border-[#ffffff26] px-4 py-6">
                        <div>
                           <div className="mb-0.5 flex items-center gap-3">
                              <span className="size-[6px] rounded-full bg-[#ffffff4d]" />
                              <p className="font-poppinsLight text-xs leading-5 text-[#ffffff80]">Today</p>
                           </div>
                           <p className="ms-[18px] font-poppinsLight text-xs leading-5">You have two ticket.</p>
                        </div>
                        <div>
                           <div className="mb-0.5 flex items-center gap-3">
                              <span className="size-[6px] rounded-full bg-[#ffffff4d]" />
                              <p className="font-poppinsLight text-xs leading-5 text-[#ffffff80]">Yesterday</p>
                           </div>
                           <p className="ms-[18px] font-poppinsLight text-xs leading-5">One admin added.</p>
                        </div>
                        <div>
                           <div className="mb-0.5 flex items-center gap-3">
                              <span className="size-[6px] rounded-full bg-[#ffffff4d]" />
                              <p className="font-poppinsLight text-xs leading-5 text-[#ffffff80]">2 days ago</p>
                           </div>
                           <p className="ms-[18px] font-poppinsLight text-xs leading-5">Three blog added. </p>
                        </div>
                        <div>
                           <div className="mb-0.5 flex items-center gap-3">
                              <span className="size-[6px] rounded-full bg-[#ffffff4d]" />
                              <p className="font-poppinsLight text-xs leading-5 text-[#ffffff80]">Today</p>
                           </div>
                           <p className="ms-[18px] font-poppinsLight text-xs leading-5">You have two ticket.</p>
                        </div>
                        <div>
                           <div className="mb-0.5 flex items-center gap-3">
                              <span className="size-[6px] rounded-full bg-[#ffffff4d]" />
                              <p className="font-poppinsLight text-xs leading-5 text-[#ffffff80]">Today</p>
                           </div>
                           <p className="ms-[18px] font-poppinsLight text-xs leading-5">You have two ticket.</p>
                        </div>
                        <div>
                           <div className="mb-0.5 flex items-center gap-3">
                              <span className="size-[6px] rounded-full bg-[#ffffff4d]" />
                              <p className="font-poppinsLight text-xs leading-5 text-[#ffffff80]">Today</p>
                           </div>
                           <p className="ms-[18px] font-poppinsLight text-xs leading-5">You have two ticket.</p>
                        </div>
                        <div>
                           <div className="mb-0.5 flex items-center gap-3">
                              <span className="size-[6px] rounded-full bg-[#ffffff4d]" />
                              <p className="font-poppinsLight text-xs leading-5 text-[#ffffff80]">Today</p>
                           </div>
                           <p className="ms-[18px] font-poppinsLight text-xs leading-5">You have two ticket.</p>
                        </div>
                     </div>
                  </div>
               </Grid>

               <Grid item lg={8}>
                  <div className="min-h-[210px] rounded-2xl bg-[#ffffff0d] p-4">
                     <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                        <p className="font-poppinsRegular text-sm leading-6">Store Link</p>
                        <Image src={attachSquareIcon} alt="icon" />
                     </div>

                     <div className="mt-4 flex items-center gap-4">
                        <div className="flex-1">
                           <p className="mb-2 text-sm leading-6">App Store</p>
                           <FormControl variant="outlined" fullWidth color="customPurple">
                              <OutlinedInput
                                 placeholder="Link"
                                 sx={{
                                    '& .MuiOutlinedInput-root': {
                                       backgroundColor: '#ffffff0d',
                                       fontSize: '16px',
                                       height: '64px',
                                    },
                                 }}
                                 {...register('appStore')}
                                 onKeyDown={e => {
                                    if (e.key === 'Enter') {
                                       sendInstagramLink();
                                    }
                                 }}
                                 endAdornment={
                                    <InputAdornment position="end">
                                       <IconButton edge="end" onClick={sendInstagramLink}>
                                          <BiEditAlt />
                                       </IconButton>
                                    </InputAdornment>
                                 }
                              />
                           </FormControl>
                        </div>
                        <div className="flex-1">
                           <p className="mb-2 text-sm leading-6">Google Play</p>
                           <FormControl variant="outlined" fullWidth color="customPurple">
                              <OutlinedInput
                                 placeholder="Link"
                                 sx={{
                                    '& .MuiOutlinedInput-root': {
                                       backgroundColor: '#ffffff0d',
                                       fontSize: '16px',
                                       height: '64px',
                                    },
                                 }}
                                 {...register('googlePlay')}
                                 onKeyDown={e => {
                                    if (e.key === 'Enter') {
                                       sendInstagramLink();
                                    }
                                 }}
                                 endAdornment={
                                    <InputAdornment position="end">
                                       <IconButton edge="end" onClick={sendInstagramLink}>
                                          <BiEditAlt />
                                       </IconButton>
                                    </InputAdornment>
                                 }
                              />
                           </FormControl>
                        </div>
                     </div>
                  </div>
               </Grid>

               <Grid item lg={4}>
                  <div className="min-h-[210px] rounded-2xl bg-[#87f2fc1f] p-4">
                     <div className="flex items-center justify-between rounded-xl bg-[#87f2fc1f] p-3">
                        <p className="font-poppinsRegular text-sm leading-6">Logo</p>
                        <Image src={HeartCircleIcon} alt="icon" />
                     </div>

                     <div className="mt-4 flex items-center gap-4 rounded-xl border border-solid border-[#ffffff26] px-4 py-[10px]">
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
                  </div>
               </Grid>
            </Grid>
         </div>
      </AdminLayout>
   );
}

export default AdminPanelHome;

import { Controller, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { QRCodeSVG } from 'qrcode.react';

// MUI
import styled from '@emotion/styled';
import {
   Button,
   Checkbox,
   Dialog,
   FormControl,
   FormControlLabel,
   FormHelperText,
   IconButton,
   InputAdornment,
   OutlinedInput,
   TextField,
} from '@mui/material';

// Icons
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { BiCopy } from 'react-icons/bi';
import { MdQrCodeScanner } from 'react-icons/md';

// Assets
import { useSWRConfig } from 'swr';
import toast from 'react-hot-toast';
import { LoadingButton } from '@mui/lab';
import userProfile from '@/assets/images/adminPanel/userProfile.png';

// Apis
import useGenerateTOTP from '@/apis/adminPanel/admin/useGenerateTOTP';
import useAddAdmin from '@/apis/adminPanel/admin/useAddAdmin';
import useGetInfo from '@/apis/adminPanel/home/useGetInfo';
import useEditAdmin from '@/apis/adminPanel/admin/useEditAdmin';

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

const inputStyle = {
   '& .MuiOutlinedInput-root': {
      backgroundColor: '#ffffff0d',
      height: '64px',
   },
};

function AddAdminModal({ onClose, open, adminsDataMutate, isEdit = false, chosenAdminForEdit }) {
   const [showPassword, setShowPassword] = useState(false);
   const [showGeneratedCode, setShowGeneratedCode] = useState(false);
   const [showQrCode, setShowQrCode] = useState(false);
   const [coverPic, setCoverPic] = useState();
   const [coverPicUrl, setCoverPicUrl] = useState();

   const { cache } = useSWRConfig();
   const { data: totpData, isLoading: totpIsLoading } = useGenerateTOTP(open);
   const { data: userInfoData } = useGetInfo();
   const { trigger: addAdminTrigger, isMutating: addAdminIsMutating } = useAddAdmin();
   const { trigger: editAdminTrigger, isMutating: editAdminIsMutating } = useEditAdmin();

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
      control,
      setValue,
   } = useForm({
      defaultValues: {
         email: '',
         phoneNumber: '',
         username: '',
         password: '',
         home: false,
         blog: false,
         pageEdit: false,
         tickets: false,
         adminPage: false,
         others: false,
      },
      mode: 'onSubmit',
   });

   useEffect(() => {
      if (chosenAdminForEdit) {
         setValue('email', chosenAdminForEdit?.email);
         setValue('phoneNumber', chosenAdminForEdit?.phone_number);
         setValue('username', chosenAdminForEdit?.username);
         setValue('home', chosenAdminForEdit?.access?.home);
         setValue('blog', chosenAdminForEdit?.access?.blog);
         setValue('pageEdit', chosenAdminForEdit?.access?.page);
         setValue('tickets', chosenAdminForEdit?.access?.ticket);
         setValue('adminPage', chosenAdminForEdit?.access?.admin);
         setValue('others', chosenAdminForEdit?.access?.others);
         setCoverPicUrl(chosenAdminForEdit?.profile);
      }
   }, [chosenAdminForEdit]);

   const closeModalHandler = () => {
      cache.delete('account/generateTOTP');
      setCoverPic();
      setCoverPicUrl();
      reset();
      onClose();
   };

   const changeCoverHandler = e => {
      if (e?.target?.files?.[0]) {
         const file = e?.target?.files?.[0];
         setCoverPic(file);
         const fileURL = URL.createObjectURL(file);
         setCoverPicUrl(fileURL);
      }
   };

   const formSubmit = data => {
      if (isEdit) {
         const fromData = new FormData();
         fromData?.append('id', chosenAdminForEdit?.id);
         fromData?.append('phone_number', data?.phoneNumber);
         fromData?.append('email', data?.email);
         fromData?.append('home', data?.home);
         fromData?.append('blog', data?.blog);
         fromData?.append('page', data?.pageEdit);
         fromData?.append('ticket', data?.tickets);
         fromData?.append('admin', data?.adminPage);
         fromData?.append('others', data?.others);
         if (userInfoData?.is_superuser) {
            if (data?.username) {
               fromData?.append('username', data?.username);
            }
            if (data?.password) {
               fromData?.append('password', data?.password);
            }
            if (showGeneratedCode) {
               fromData?.append('totp_secret', totpData?.data);
            }
         }
         if (coverPic) {
            fromData?.append('profile', coverPic);
         }

         editAdminTrigger(fromData, {
            onSuccess: () => {
               adminsDataMutate();
               closeModalHandler();
            },
         });
      } else {
         const fromData = new FormData();
         fromData?.append('phone_number', data?.phoneNumber);
         fromData?.append('username', data?.username);
         fromData?.append('email', data?.email);
         fromData?.append('password', data?.password);
         fromData?.append('home', data?.home);
         fromData?.append('blog', data?.blog);
         fromData?.append('page', data?.pageEdit);
         fromData?.append('ticket', data?.tickets);
         fromData?.append('admin', data?.adminPage);
         fromData?.append('others', data?.others);
         fromData?.append('totp_secret', totpData?.data);
         if (coverPic) {
            fromData?.append('profile', coverPic);
         }

         addAdminTrigger(fromData, {
            onSuccess: () => {
               adminsDataMutate();
               closeModalHandler();
            },
         });
      }
   };

   const copyToClipBoardHandler = () => {
      if (totpData) {
         navigator.clipboard.writeText(totpData?.data).then(() => {
            toast.success('Copied');
         });
      }
   };

   return (
      <Dialog open={open} onClose={closeModalHandler} fullWidth sx={{ backdropFilter: 'blur(12px)' }} maxWidth="md">
         <div
            className="bg-[#080609] p-7 font-poppinsRegular"
            style={{ boxShadow: '0px 12px 64px 0px rgba(0, 0, 0, 0.20)' }}
         >
            <div className="flex items-center justify-between">
               <p className="font-poppinsMedium text-[28px] leading-10">Identity information</p>
               <Button className="rounded-full" onClick={closeModalHandler}>
                  <IoIosCloseCircleOutline fontSize="30px" color="white" />
               </Button>
            </div>
            <div className="mt-4 flex flex-col items-center justify-center">
               {coverPicUrl ? (
                  <div className="relative size-[160px]">
                     <Image src={coverPicUrl} alt="profile" fill className="rounded-full object-cover" />
                  </div>
               ) : (
                  <div className="relative size-[160px]">
                     <Image src={userProfile} alt="profile" fill className="rounded-full object-cover" />
                  </div>
               )}

               <div className="mt-6">
                  <Button
                     sx={{
                        backgroundColor: '#ffffff0d',
                        fontFamily: 'poppinsSemibold',
                        color: 'white',
                        borderRadius: '12px',
                        fontSize: '12px',
                        height: '40px',
                        paddingX: '40px',
                     }}
                     component="label"
                     role={undefined}
                     tabIndex={-1}
                  >
                     Choose File
                     <VisuallyHiddenInput type="file" onChange={changeCoverHandler} accept="image/*" />
                  </Button>
               </div>
            </div>

            <form onSubmit={handleSubmit(formSubmit)} className="mt-6">
               <div className="border-b border-solid border-[#ffffff26] pb-8">
                  <div className="flex gap-6">
                     <div className="flex-1">
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
                           sx={inputStyle}
                           error={!!errors?.email}
                           helperText={errors?.email?.message}
                        />
                     </div>
                     <div className="flex-1">
                        <TextField
                           fullWidth
                           placeholder="Phone number"
                           color="customPurple"
                           type="number"
                           {...register('phoneNumber', {
                              required: {
                                 value: true,
                                 message: 'This filed is required',
                              },
                           })}
                           sx={{
                              ...inputStyle,
                              input: {
                                 MozAppearance: 'textfield',
                                 appearance: 'textfield',
                                 '&::-webkit-inner-spin-button': {
                                    WebkitAppearance: 'none',
                                    appearance: 'none',
                                 },
                              },
                           }}
                           error={!!errors?.phoneNumber}
                           helperText={errors?.phoneNumber?.message}
                        />
                     </div>
                  </div>
                  {!isEdit ? (
                     <div className="mt-6 flex gap-6">
                        <div className="flex-1">
                           <TextField
                              fullWidth
                              placeholder="Username"
                              color="customPurple"
                              {...register('username', {
                                 required: {
                                    value: true,
                                    message: 'This filed is required',
                                 },
                              })}
                              sx={inputStyle}
                              error={!!errors?.username}
                              helperText={errors?.username?.message}
                           />
                        </div>
                        <div className="flex-1">
                           <FormControl variant="outlined" fullWidth color="customPurple" sx={inputStyle}>
                              <OutlinedInput
                                 placeholder="New password"
                                 type={showPassword ? 'text' : 'password'}
                                 {...register('password')}
                                 endAdornment={
                                    <InputAdornment position="end">
                                       <IconButton edge="end" onClick={() => setShowPassword(prev => !prev)}>
                                          {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                                       </IconButton>
                                    </InputAdornment>
                                 }
                                 error={!!errors?.password}
                              />
                              {errors?.password?.message && (
                                 <FormHelperText error>{errors?.password?.message}</FormHelperText>
                              )}
                           </FormControl>
                        </div>
                     </div>
                  ) : isEdit && userInfoData?.is_superuser ? (
                     <div className="mt-6 flex gap-6">
                        <div className="flex-1">
                           <TextField
                              fullWidth
                              placeholder="Username"
                              color="customPurple"
                              {...register('username', {
                                 required: {
                                    value: true,
                                    message: 'This filed is required',
                                 },
                              })}
                              sx={inputStyle}
                              error={!!errors?.username}
                              helperText={errors?.username?.message}
                           />
                        </div>
                        <div className="flex-1">
                           <FormControl variant="outlined" fullWidth color="customPurple" sx={inputStyle}>
                              <OutlinedInput
                                 placeholder="New password"
                                 type={showPassword ? 'text' : 'password'}
                                 {...register('password', {
                                    minLength: {
                                       value: 8,
                                       message: 'Password must be greater than 8 characters',
                                    },
                                 })}
                                 endAdornment={
                                    <InputAdornment position="end">
                                       <IconButton edge="end" onClick={() => setShowPassword(prev => !prev)}>
                                          {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                                       </IconButton>
                                    </InputAdornment>
                                 }
                                 error={!!errors?.password}
                              />
                              {errors?.password?.message && (
                                 <FormHelperText error>{errors?.password?.message}</FormHelperText>
                              )}
                           </FormControl>
                        </div>
                     </div>
                  ) : null}
               </div>

               <div className="border-b border-solid border-[#ffffff26] py-8">
                  <p className="font-poppinsLight text-2xl">Dashboard Access</p>
                  <div className="mt-5 flex">
                     <div className="flex-1">
                        <Controller
                           control={control}
                           name="home"
                           render={({ field: { onChange, value } }) => (
                              <FormControlLabel
                                 control={<Checkbox checked={value} color="secondary" />}
                                 label={<p className="font-poppinsRegular">Home</p>}
                                 value={value}
                                 onChange={onChange}
                              />
                           )}
                        />
                     </div>
                     <div className="flex-1">
                        <Controller
                           control={control}
                           name="blog"
                           render={({ field: { onChange, value } }) => (
                              <FormControlLabel
                                 control={<Checkbox checked={value} color="secondary" />}
                                 label={<p className="font-poppinsRegular">Blog</p>}
                                 value={value}
                                 onChange={onChange}
                              />
                           )}
                        />
                     </div>
                  </div>
                  <div className="mt-5 flex">
                     <div className="flex-1">
                        <Controller
                           control={control}
                           name="pageEdit"
                           render={({ field: { onChange, value } }) => (
                              <FormControlLabel
                                 control={<Checkbox checked={value} color="secondary" />}
                                 label={<p className="font-poppinsRegular">Page edit</p>}
                                 value={value}
                                 onChange={onChange}
                              />
                           )}
                        />
                     </div>
                     <div className="flex-1">
                        <Controller
                           control={control}
                           name="tickets"
                           render={({ field: { onChange, value } }) => (
                              <FormControlLabel
                                 control={<Checkbox checked={value} color="secondary" />}
                                 label={<p className="font-poppinsRegular">Tickets</p>}
                                 value={value}
                                 onChange={onChange}
                              />
                           )}
                        />
                     </div>
                  </div>
                  <div className="mt-5 flex">
                     <div className="flex-1">
                        <Controller
                           control={control}
                           name="adminPage"
                           render={({ field: { onChange, value } }) => (
                              <FormControlLabel
                                 control={<Checkbox checked={value} color="secondary" />}
                                 label={<p className="font-poppinsRegular">Admin page</p>}
                                 value={value}
                                 onChange={onChange}
                              />
                           )}
                        />
                     </div>
                     <div className="flex-1">
                        <Controller
                           control={control}
                           name="others"
                           render={({ field: { onChange, value } }) => (
                              <FormControlLabel
                                 control={<Checkbox checked={value} color="secondary" />}
                                 label={<p className="font-poppinsRegular">Others</p>}
                                 value={value}
                                 onChange={onChange}
                              />
                           )}
                        />
                     </div>
                  </div>
               </div>
               {!isEdit ? (
                  <div className="mt-8 flex items-center gap-1 border-b border-solid border-[#ffffff26] pb-8">
                     <p className="font-poppinsExtraBold text-[18px] leading-6">Google Authenticator :</p>
                     <p {...(totpIsLoading && { className: 'w-[300px] rounded-md h-5 bg-[#ffffff26] animate-pulse' })}>
                        {totpData?.data}
                     </p>
                     <IconButton onClick={copyToClipBoardHandler}>
                        <BiCopy />
                     </IconButton>
                     <IconButton onClick={() => setShowQrCode(true)}>
                        <MdQrCodeScanner />
                     </IconButton>
                  </div>
               ) : isEdit && userInfoData?.is_superuser ? (
                  <div className="mt-8 flex items-center gap-1 border-b border-solid border-[#ffffff26] pb-8">
                     {showGeneratedCode ? (
                        <>
                           <p className="font-poppinsExtraBold text-[18px] leading-6">Google Authenticator :</p>
                           <p
                              {...(totpIsLoading && {
                                 className: 'w-[300px] rounded-md h-5 bg-[#ffffff26] animate-pulse',
                              })}
                           >
                              {totpData?.data}
                           </p>
                           <IconButton onClick={copyToClipBoardHandler}>
                              <BiCopy />
                           </IconButton>
                           <IconButton onClick={() => setShowQrCode(true)}>
                              <MdQrCodeScanner />
                           </IconButton>
                        </>
                     ) : (
                        <Button
                           sx={{ fontFamily: 'poppinsRegular', height: '56px', borderRadius: '16px', paddingX: '20px' }}
                           variant="outlined"
                           color="secondary"
                           onClick={() => setShowGeneratedCode(true)}
                        >
                           Generate new auth code
                        </Button>
                     )}
                  </div>
               ) : null}

               <div className="mt-8">
                  <LoadingButton
                     type="submit"
                     fullWidth
                     sx={{ fontFamily: 'poppinsRegular', height: '56px', borderRadius: '16px' }}
                     variant="contained"
                     color="secondary"
                     loading={addAdminIsMutating || editAdminIsMutating}
                  >
                     {isEdit ? 'Edit' : 'Add'}
                  </LoadingButton>
               </div>
            </form>

            {showQrCode && (
               <Dialog open={showQrCode} onClose={() => setShowQrCode(false)} sx={{ backdropFilter: 'blur(12px)' }}>
                  <div
                     className="bg-[#080609] p-7 font-poppinsRegular"
                     style={{ boxShadow: '0px 12px 64px 0px rgba(0, 0, 0, 0.20)' }}
                  >
                     <div className="flex items-center justify-between gap-20 pb-10">
                        <p className="font-poppinsMedium leading-10">Scan this</p>
                        <Button className="rounded-full" onClick={() => setShowQrCode(false)}>
                           <IoIosCloseCircleOutline fontSize="30px" color="white" />
                        </Button>
                     </div>

                     <div className="flex items-center justify-center">
                        <QRCodeSVG value={`otpauth://totp/palgam?secret=${totpData?.data}&issuer=Palgam`} />
                     </div>
                  </div>
               </Dialog>
            )}
         </div>
      </Dialog>
   );
}

export default AddAdminModal;

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

// MUI
import { FormControl, FormHelperText, Grid, IconButton, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

// Assets
import adminSecurityPic from '@/assets/images/adminPanel/adminSecurityPic.png';
import emailIcon from '@/assets/icons/adminPanel/Email.svg';
import keyIcon from '@/assets/icons/adminPanel/Key.svg';

// Components
import AdminLayout from '@/components/layout/admin-layout/admin-layout';
import CountdownTimer from '@/components/templates/countdown-timer/countdown-timer';

function Security() {
   const [showPassword, setShowPassword] = useState(false);
   const [changeEmailStep, setChangeEmailStep] = useState(1);

   const {
      register: passwordRegister,
      handleSubmit: passwordHandleSubmit,
      formState: { errors: passwordErrors },
      watch,
   } = useForm({
      defaultValues: {
         currentPassword: '',
         newPassword: '',
         confirmPassword: '',
      },
      mode: 'onSubmit',
   });

   const passwordFormSubmit = data => {
      console.log(data);
   };

   const {
      register: emailRegister,
      handleSubmit: emailHandleSubmit,
      formState: { errors: emailErrors },
   } = useForm({
      defaultValues: {
         email: '',
         code: '',
      },
      mode: 'onSubmit',
   });

   const emailFormSubmit = data => {
      console.log(data);
   };

   const resendCode = () => {
      //
   };

   const passwordValue = watch('newPassword');

   return (
      <AdminLayout>
         <div>
            <div className="h-[160px] w-full">
               <Image src={adminSecurityPic} alt="security" className="size-full rounded-2xl object-cover" />
            </div>

            <div className="mt-8">
               <Grid container spacing="16px">
                  <Grid item md={6}>
                     <div className="flex flex-col rounded-2xl bg-[#8c72e214] p-4">
                        <div className="flex items-center justify-between rounded-xl bg-[#8c72e214] p-3">
                           <p className="font-poppinsRegular text-sm leading-6">Change Password</p>
                           <Image src={keyIcon} alt="icon" />
                        </div>

                        <form onSubmit={passwordHandleSubmit(passwordFormSubmit)} className="mt-6 space-y-6">
                           <FormControl
                              variant="outlined"
                              fullWidth
                              color="customPurple"
                              sx={{
                                 '& .MuiOutlinedInput-root': {
                                    backgroundColor: '#ffffff0a',
                                    height: '64px',
                                 },
                              }}
                           >
                              <OutlinedInput
                                 placeholder="Current password"
                                 type={showPassword ? 'text' : 'password'}
                                 {...passwordRegister('currentPassword', {
                                    required: {
                                       value: true,
                                       message: 'This filed is required',
                                    },
                                 })}
                                 endAdornment={
                                    <InputAdornment position="end">
                                       <IconButton edge="end" onClick={() => setShowPassword(prev => !prev)}>
                                          {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                                       </IconButton>
                                    </InputAdornment>
                                 }
                                 error={!!passwordErrors?.currentPassword}
                                 //    disabled={loginIsMutating}
                              />
                              {passwordErrors?.currentPassword?.message && (
                                 <FormHelperText error>{passwordErrors?.currentPassword?.message}</FormHelperText>
                              )}
                           </FormControl>

                           <FormControl
                              variant="outlined"
                              fullWidth
                              color="customPurple"
                              sx={{
                                 '& .MuiOutlinedInput-root': {
                                    backgroundColor: '#ffffff0a',
                                    height: '64px',
                                 },
                              }}
                           >
                              <OutlinedInput
                                 placeholder="New password"
                                 type={showPassword ? 'text' : 'password'}
                                 {...passwordRegister('newPassword', {
                                    required: {
                                       value: true,
                                       message: 'This filed is required',
                                    },
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
                                 error={!!passwordErrors?.newPassword}
                                 //    disabled={loginIsMutating}
                              />
                              {passwordErrors?.newPassword?.message && (
                                 <FormHelperText error>{passwordErrors?.newPassword?.message}</FormHelperText>
                              )}
                           </FormControl>

                           <FormControl
                              variant="outlined"
                              fullWidth
                              color="customPurple"
                              sx={{
                                 '& .MuiOutlinedInput-root': {
                                    backgroundColor: '#ffffff0a',
                                    height: '64px',
                                 },
                              }}
                           >
                              <OutlinedInput
                                 placeholder="Confirm password"
                                 type={showPassword ? 'text' : 'password'}
                                 {...passwordRegister('confirmPassword', {
                                    required: {
                                       value: true,
                                       message: 'This filed is required',
                                    },
                                    validate: value => value === passwordValue || 'Passwords are not match',
                                 })}
                                 endAdornment={
                                    <InputAdornment position="end">
                                       <IconButton edge="end" onClick={() => setShowPassword(prev => !prev)}>
                                          {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                                       </IconButton>
                                    </InputAdornment>
                                 }
                                 error={!!passwordErrors?.confirmPassword}
                                 //    disabled={loginIsMutating}
                              />
                              {passwordErrors?.confirmPassword?.message && (
                                 <FormHelperText error>{passwordErrors?.confirmPassword?.message}</FormHelperText>
                              )}
                           </FormControl>

                           <LoadingButton
                              type="submit"
                              fullWidth
                              sx={{ fontFamily: 'poppinsRegular', height: '56px', borderRadius: '16px' }}
                              variant="contained"
                              color="secondary"
                              // loading={editLinksIsMutating}
                           >
                              Change
                           </LoadingButton>
                        </form>
                     </div>
                  </Grid>
                  <Grid item md={6}>
                     <div className="flex flex-col rounded-2xl bg-[#8c72e214] p-4">
                        <div className="flex items-center justify-between rounded-xl bg-[#8c72e214] p-3">
                           <p className="font-poppinsRegular text-sm leading-6">Change Email Address</p>
                           <Image src={emailIcon} alt="icon" />
                        </div>

                        <form onSubmit={emailHandleSubmit(emailFormSubmit)} className="mt-6 space-y-6">
                           <TextField
                              fullWidth
                              placeholder="New email"
                              color="customPurple"
                              {...emailRegister('email', {
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
                                    backgroundColor: '#ffffff0a',
                                    height: '64px',
                                 },
                              }}
                              error={!!emailErrors?.email}
                              helperText={emailErrors?.email?.message}
                              //    disabled={loginIsMutating}
                           />

                           {changeEmailStep === 2 && (
                              <>
                                 <TextField
                                    fullWidth
                                    placeholder="Code"
                                    color="customPurple"
                                    type="number"
                                    {...emailRegister('code', {
                                       required: {
                                          value: true,
                                          message: 'This filed is required',
                                       },
                                       minLength: {
                                          value: 6,
                                          message: 'Code must be 6 digits',
                                       },
                                       maxLength: {
                                          value: 6,
                                          message: 'Code must be 6 digits',
                                       },
                                    })}
                                    sx={{
                                       '& .MuiOutlinedInput-root': {
                                          backgroundColor: '#ffffff0a',
                                          height: '64px',
                                       },
                                       input: {
                                          MozAppearance: 'textfield',
                                          appearance: 'textfield',
                                          '&::-webkit-inner-spin-button': {
                                             WebkitAppearance: 'none',
                                             appearance: 'none',
                                          },
                                       },
                                    }}
                                    error={!!emailErrors?.code}
                                    helperText={emailErrors?.code?.message}
                                    //    disabled={loginIsMutating}
                                 />

                                 <CountdownTimer initialCount={130} onResetClick={resendCode} />
                              </>
                           )}

                           <LoadingButton
                              type="submit"
                              fullWidth
                              sx={{ fontFamily: 'poppinsRegular', height: '56px', borderRadius: '16px' }}
                              variant="contained"
                              color="secondary"
                              // loading={editLinksIsMutating}
                           >
                              {changeEmailStep === 1 ? 'Send code' : changeEmailStep === 2 ? 'Change' : null}
                           </LoadingButton>
                        </form>
                     </div>
                  </Grid>
               </Grid>
            </div>
         </div>
      </AdminLayout>
   );
}

export default Security;

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

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

// MUI
import { FormControl, FormHelperText, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

// Assets
import adminSecurityPic from '@/assets/images/adminPanel/adminSecurityPic.png';
import keyIcon from '@/assets/icons/adminPanel/Key.svg';

// Components
import AdminLayout from '@/components/layout/admin-layout/admin-layout';

// Apis
import useChangePassword from '@/apis/adminPanel/security/useChangePassword';

function Security() {
   const [showPassword, setShowPassword] = useState(false);

   const { trigger: changePasswordTrigger, isMutating: changePasswordIsMutating } = useChangePassword();

   const {
      register: passwordRegister,
      handleSubmit: passwordHandleSubmit,
      formState: { errors: passwordErrors },
      watch,
   } = useForm({
      defaultValues: {
         newPassword: '',
         confirmPassword: '',
      },
      mode: 'onSubmit',
   });

   const passwordFormSubmit = data => {
      const newData = {
         password: data.newPassword,
      };

      changePasswordTrigger(newData);
   };

   const passwordValue = watch('newPassword');

   return (
      <AdminLayout>
         <div>
            <div className="h-[160px] w-full">
               <Image src={adminSecurityPic} alt="security" className="size-full rounded-2xl object-cover" />
            </div>

            <div className="mt-8 customLg:max-w-[50%]">
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
                           disabled={changePasswordIsMutating}
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
                           disabled={changePasswordIsMutating}
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
                        loading={changePasswordIsMutating}
                     >
                        Change
                     </LoadingButton>
                  </form>
               </div>
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

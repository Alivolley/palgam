import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

// MUI
import {
   Button,
   FormControl,
   FormHelperText,
   IconButton,
   InputAdornment,
   OutlinedInput,
   TextField,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

// Assets
import loginPic from '@/assets/images/adminPanel/loginPic.png';
import loginLogo from '@/assets/images/loginLogo.png';

// Apis
import useLogin from '@/apis/login/useLogin';

function Login() {
   const [showPassword, setShowPassword] = useState(false);
   const [loginStep, setLoginStep] = useState(1);
   const { push } = useRouter();

   const { trigger: loginTrigger, isMutating: loginIsMutating } = useLogin();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      defaultValues: {
         emailOrUsername: '',
         password: '',
         authenticator: '',
      },
      mode: 'onSubmit',
   });

   const formSubmit = data => {
      if (loginStep === 1) {
         setLoginStep(2);
      } else if (loginStep === 2) {
         const newData = {
            email: data?.emailOrUsername,
            password: data?.password,
            totp: data?.authenticator,
         };

         loginTrigger(newData, {
            onSuccess: () => {
               push('/admin-panel/home');
            },
         });
      }
   };

   return (
      <div className="flex text-white">
         <div className="flex-1">
            <div className="relative ml-[96px] mt-11 w-[460px]">
               <div
                  className="absolute left-[-60%] top-[-80%] h-[600px] w-[500px] rounded-[600px] opacity-[0.4] blur-[200px]"
                  style={{ background: 'linear-gradient(180deg, #5922E9 0%, #DD43EF 100%)' }}
               />
               <Link href="/" className="relative block w-fit">
                  <div className="w-[110px]">
                     <Image src={loginLogo} alt="logo" className="size-full" />
                  </div>
               </Link>

               <div className="relative mt-[26px]">
                  <p className="font-poppinsExtraBold text-[40px] leading-[64px]">
                     {loginStep === 1 ? 'Hello, Welcome Back!' : loginStep === 2 ? 'Google Authenticator' : null}
                  </p>
                  <p className="mt-2 font-poppinsExtraLight text-base text-[#ffffffb3]">
                     {loginStep === 1
                        ? 'We’re happy to see you again . let’s Stay ahead of the game.'
                        : loginStep === 2
                          ? 'Please enter the Google Authenticator which sent to you.'
                          : null}
                  </p>
               </div>

               <form className="relative mt-8 space-y-6" onSubmit={handleSubmit(formSubmit)}>
                  {loginStep === 1 ? (
                     <>
                        <TextField
                           fullWidth
                           placeholder="Email or Username"
                           color="customPurple"
                           {...register('emailOrUsername', {
                              required: {
                                 value: true,
                                 message: 'This filed is required',
                              },
                           })}
                           sx={{
                              '& .MuiOutlinedInput-root': {
                                 backgroundColor: '#ffffff0d',
                                 fontSize: '16px',
                                 height: '64px',
                              },
                           }}
                           error={!!errors?.emailOrUsername}
                           helperText={errors?.emailOrUsername?.message}
                        />

                        <FormControl
                           variant="outlined"
                           fullWidth
                           color="customPurple"
                           sx={{
                              '& .MuiOutlinedInput-root': {
                                 backgroundColor: '#ffffff0d',
                                 fontSize: '16px',
                                 height: '64px',
                              },
                           }}
                        >
                           <OutlinedInput
                              placeholder="Password"
                              type={showPassword ? 'text' : 'password'}
                              {...register('password', {
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
                              error={!!errors?.password}
                           />
                           {errors?.password?.message && (
                              <FormHelperText error>{errors?.password?.message}</FormHelperText>
                           )}
                        </FormControl>
                     </>
                  ) : loginStep === 2 ? (
                     <TextField
                        fullWidth
                        placeholder="Google Authenticator"
                        color="customPurple"
                        type="number"
                        {...register('authenticator', {
                           required: {
                              value: true,
                              message: 'This filed is required',
                           },
                        })}
                        sx={{
                           '& .MuiOutlinedInput-root': {
                              backgroundColor: '#ffffff0d',
                              fontSize: '16px',
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
                        error={!!errors?.authenticator}
                        helperText={errors?.authenticator?.message}
                        disabled={loginIsMutating}
                     />
                  ) : null}
                  <LoadingButton
                     loading={loginIsMutating}
                     fullWidth
                     variant="contained"
                     color="secondary"
                     sx={{
                        color: 'white',
                        height: '72px',
                        borderRadius: '16px',
                        fontFamily: 'poppinsSemibold',
                     }}
                     type="submit"
                  >
                     {loginStep === 1 ? 'Next' : loginStep === 2 ? 'Log in' : null}
                  </LoadingButton>
               </form>
               {loginStep === 2 && (
                  <div className="mt-4 flex justify-center">
                     <Button
                        onClick={() => setLoginStep(1)}
                        sx={{
                           color: '#8C72E2',
                           fontSize: '16px',
                           fontFamily: 'poppinsSemibold',
                           ':hover': {
                              backgroundColor: 'transparent',
                              color: '#8c72e266',
                           },
                        }}
                     >
                        Back to main
                     </Button>
                  </div>
               )}
            </div>
         </div>
         <div className="sticky top-0 h-screen flex-1 select-none pb-1">
            <Image src={loginPic} alt="login" className="size-full select-none object-cover" />
         </div>
      </div>
   );
}

export default Login;

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Image from 'next/image';

// MUI
import {
   Button,
   CircularProgress,
   Divider,
   FormControl,
   Grid,
   IconButton,
   InputAdornment,
   OutlinedInput,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material/styles';

// Icons
import { BiEditAlt } from 'react-icons/bi';
import { ImFilePicture } from 'react-icons/im';
import attachSquareIcon from '@/assets/icons/adminPanel/attach-square.svg';
import securitySafeIcon from '@/assets/icons/adminPanel/security-safe.svg';

// Assets
import appleIcon from '@/assets/icons/adminPanel/apple.svg';
import heartCircleGrayIcon from '@/assets/icons/adminPanel/Heart-circleGray.svg';
import othersTabPic from '@/assets/images/adminPanel/othersTabPic.png';

// Components
import AdminLayout from '@/components/layout/admin-layout/admin-layout';
import IosInputs from '@/components/pages/admin-panel/others/ios-inputs/ios-inputs';

// Apis
import useGetOthers from '@/apis/adminPanel/others/useGetOthers';
import useChangeSiteName from '@/apis/adminPanel/others/useChangeSiteName';

const InputStyle = {
   '& .MuiOutlinedInput-root': {
      backgroundColor: '#ffffff0d',
      fontSize: '16px',
      height: '64px',
   },
};

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

function Others() {
   const [faviconPic, setFaviconPic] = useState();
   const [faviconPicUrl, setFaviconPicUrl] = useState();

   const { data: othersData, isLoading: othersIsLoading, mutate: othersMutate } = useGetOthers();
   const { trigger: changeOthersTrigger, isMutating: changeOthersIsMutating } = useChangeSiteName();

   const { register, setValue, getValues } = useForm({
      defaultValues: {
         siteName: '',
         googleSearch: '',
         googleAnalytics: '',
         copyright: '',
      },
   });

   useEffect(() => {
      if (othersData) {
         setValue('siteName', othersData?.site_name);
         setValue('googleSearch', othersData?.google_console);
         setValue('googleAnalytics', othersData?.google_analytics);
         setValue('copyright', othersData?.copyright);
      }
      if (othersData && othersData?.fav_icon) {
         setFaviconPicUrl(othersData?.fav_icon);
      }
   }, [othersData]);

   const changeNameHandler = () => {
      const siteNameValue = getValues('siteName');
      changeOthersTrigger(
         { site_name: siteNameValue },
         {
            onSuccess: () => othersMutate(),
         }
      );
   };

   const changeCopyrightHandler = () => {
      const copyright = getValues('copyright');
      changeOthersTrigger(
         { copyright },
         {
            onSuccess: () => othersMutate(),
         }
      );
   };

   const changeGoogleLinksHandler = () => {
      const newData = {
         google_console: getValues('googleSearch'),
         google_analytics: getValues('googleAnalytics'),
      };

      changeOthersTrigger(newData, {
         onSuccess: () => othersMutate(),
      });
   };

   const changeFaviconHandler = e => {
      if (e?.target?.files?.[0]) {
         const file = e?.target?.files?.[0];
         setFaviconPic(file);
         const fileURL = URL.createObjectURL(file);
         setFaviconPicUrl(fileURL);
      }
   };

   const changeFaviconApiHandler = () => {
      const formData = new FormData();
      formData?.append('fav_icon', faviconPic);
      changeOthersTrigger(formData);
   };

   return (
      <AdminLayout>
         <div>
            <Grid container spacing="16px">
               <Grid item lg={8}>
                  <div className="flex h-[445px] flex-col rounded-2xl bg-[#ffffff0d] p-4">
                     <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                        <p className="font-poppinsRegular text-sm leading-6">iOS Download Popup</p>
                        <Image src={appleIcon} alt="icon" />
                     </div>
                     <IosInputs />
                  </div>
               </Grid>
               <Grid item lg={4}>
                  <div className="flex h-[445px] flex-col rounded-2xl bg-[#ffffff0d] p-4">
                     <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                        <p className="font-poppinsRegular text-sm leading-6">Site Name Fav Icon</p>
                        <Image src={heartCircleGrayIcon} alt="icon" />
                     </div>
                     <div>
                        <div className="mt-4 rounded-xl border border-solid border-[#ffffff26] px-4 py-2">
                           <Image src={othersTabPic} alt="tab" className="size-full" />
                        </div>

                        {othersIsLoading ? (
                           <div className="flex items-center justify-center p-5">
                              <CircularProgress color="secondary" />
                           </div>
                        ) : (
                           <div className="mt-2">
                              <p className="mb-2 text-sm leading-6">Site name</p>
                              <FormControl variant="outlined" fullWidth color="customPurple" sx={InputStyle}>
                                 <OutlinedInput
                                    placeholder="Name"
                                    {...register('siteName')}
                                    endAdornment={
                                       <InputAdornment position="end">
                                          <IconButton onClick={changeNameHandler} disabled={changeOthersIsMutating}>
                                             <BiEditAlt size="24px" />
                                          </IconButton>
                                       </InputAdornment>
                                    }
                                    disabled={changeOthersIsMutating}
                                 />
                              </FormControl>

                              <div className="mb-2 mt-4 flex items-center gap-4 rounded-xl border border-solid border-[#ffffff26] px-4 py-[10px]">
                                 <div className="flex w-20 items-center justify-center">
                                    {faviconPicUrl ? (
                                       <div className="relative h-[75px] w-full">
                                          <Image src={faviconPicUrl} alt="logo" className="object-cover" fill />
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
                                          disabled={changeOthersIsMutating}
                                       >
                                          Choose File
                                          <VisuallyHiddenInput
                                             type="file"
                                             onChange={changeFaviconHandler}
                                             accept="image/*"
                                          />
                                       </Button>
                                    </div>
                                 </div>
                              </div>

                              <LoadingButton
                                 sx={{ fontFamily: 'poppinsRegular', height: '56px', borderRadius: '16px' }}
                                 variant="contained"
                                 fullWidth
                                 color="primary"
                                 loading={changeOthersIsMutating}
                                 onClick={changeFaviconApiHandler}
                                 disabled={!faviconPic}
                              >
                                 change
                              </LoadingButton>
                           </div>
                        )}
                     </div>
                  </div>
               </Grid>

               <Grid item lg={8}>
                  <div className="min-h-[276px] rounded-2xl bg-[#ffffff0d] p-4">
                     <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                        <p className="font-poppinsRegular text-sm leading-6">Others Links</p>
                        <Image src={attachSquareIcon} alt="icon" />
                     </div>

                     {othersIsLoading ? (
                        <div className="flex items-center justify-center p-5">
                           <CircularProgress color="secondary" />
                        </div>
                     ) : (
                        <>
                           <div className="my-4 flex items-center gap-4">
                              <div className="flex-1">
                                 <p className="mb-2 text-sm leading-6">Link For Google Search Console</p>
                                 <FormControl variant="outlined" fullWidth color="customPurple" sx={InputStyle}>
                                    <OutlinedInput
                                       placeholder="Link"
                                       {...register('googleSearch')}
                                       endAdornment={
                                          <InputAdornment position="end">
                                             <BiEditAlt size="24px" />
                                          </InputAdornment>
                                       }
                                       disabled={changeOthersIsMutating}
                                    />
                                 </FormControl>
                              </div>
                              <div className="flex-1">
                                 <p className="mb-2 text-sm leading-6">Link Google Analytics</p>
                                 <FormControl variant="outlined" fullWidth color="customPurple" sx={InputStyle}>
                                    <OutlinedInput
                                       placeholder="Link"
                                       {...register('googleAnalytics')}
                                       endAdornment={
                                          <InputAdornment position="end">
                                             <BiEditAlt size="24px" />
                                          </InputAdornment>
                                       }
                                       disabled={changeOthersIsMutating}
                                    />
                                 </FormControl>
                              </div>
                           </div>
                           <LoadingButton
                              sx={{ fontFamily: 'poppinsRegular', height: '56px', borderRadius: '16px' }}
                              variant="contained"
                              fullWidth
                              color="secondary"
                              loading={changeOthersIsMutating}
                              onClick={changeGoogleLinksHandler}
                           >
                              Submit
                           </LoadingButton>
                        </>
                     )}
                  </div>
               </Grid>

               <Grid item lg={4}>
                  <div className="min-h-[276px] rounded-2xl bg-[#ffffff0d] p-4">
                     <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                        <p className="font-poppinsRegular text-sm leading-6">Copyright</p>
                        <Image src={securitySafeIcon} alt="icon" />
                     </div>

                     {othersIsLoading ? (
                        <div className="flex items-center justify-center p-5">
                           <CircularProgress color="secondary" />
                        </div>
                     ) : (
                        <>
                           <div className="my-4">
                              <div className="flex-1">
                                 <p className="mb-2 text-sm leading-6">Text</p>
                                 <FormControl variant="outlined" fullWidth color="customPurple" sx={InputStyle}>
                                    <OutlinedInput
                                       placeholder="Link"
                                       {...register('copyright')}
                                       endAdornment={
                                          <InputAdornment position="end">
                                             <BiEditAlt size="24px" />
                                          </InputAdornment>
                                       }
                                       disabled={changeOthersIsMutating}
                                    />
                                 </FormControl>
                              </div>
                           </div>

                           <LoadingButton
                              sx={{ fontFamily: 'poppinsRegular', height: '56px', borderRadius: '16px' }}
                              variant="contained"
                              fullWidth
                              color="secondary"
                              loading={changeOthersIsMutating}
                              onClick={changeCopyrightHandler}
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

export default Others;

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

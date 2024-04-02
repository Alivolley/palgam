// MUI
import styled from '@emotion/styled';
import { LoadingButton } from '@mui/lab';
import { Button, Dialog, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { ImFilePicture } from 'react-icons/im';

// Icons
import { IoIosCloseCircleOutline } from 'react-icons/io';

// Apis
import useAddStep from '@/apis/adminPanel/others/useAddStep';

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

function AddStepModal({ open, onClose, stepsMutate }) {
   const [englishPic, setEnglishPic] = useState();
   const [englishPicUrl, setEnglishPicUrl] = useState();
   const [spanishPic, setSpanishPic] = useState();
   const [spanishPicUrl, setSpanishPicUrl] = useState();
   const [russianPic, setRussianPic] = useState();
   const [russianPicUrl, setRussianPicUrl] = useState();
   const [inputsValue, setInputsValue] = useState({
      englishInput: '',
      spanishInput: '',
      russianInput: '',
   });

   const { trigger: addStepTrigger, isMutating: addStepIsMutating } = useAddStep();

   const changeEnglishPicHandler = e => {
      if (e?.target?.files?.[0]) {
         const file = e?.target?.files?.[0];
         setEnglishPic(file);
         const fileURL = URL.createObjectURL(file);
         setEnglishPicUrl(fileURL);
      }
   };

   const changeSpanishPicHandler = e => {
      if (e?.target?.files?.[0]) {
         const file = e?.target?.files?.[0];
         setSpanishPic(file);
         const fileURL = URL.createObjectURL(file);
         setSpanishPicUrl(fileURL);
      }
   };

   const changeRussianPicHandler = e => {
      if (e?.target?.files?.[0]) {
         const file = e?.target?.files?.[0];
         setRussianPic(file);
         const fileURL = URL.createObjectURL(file);
         setRussianPicUrl(fileURL);
      }
   };

   const closeHandler = () => {
      onClose();
      setEnglishPic();
      setEnglishPicUrl();
      setSpanishPic();
      setSpanishPicUrl();
      setRussianPic();
      setRussianPicUrl();
      setInputsValue({
         englishInput: '',
         spanishInput: '',
         russianInput: '',
      });
   };

   const addStepHandler = () => {
      const formData = new FormData();
      formData?.append('english_description', inputsValue?.englishInput);
      formData?.append('spanish_description', inputsValue?.spanishInput);
      formData?.append('russian_description', inputsValue?.russianInput);
      formData?.append('english_image', englishPic);
      formData?.append('spanish_image', spanishPic);
      formData?.append('russian_image', russianPic);

      addStepTrigger(formData, {
         onSuccess: () => {
            stepsMutate();
            closeHandler();
         },
      });
   };

   return (
      <Dialog open={open} onClose={closeHandler} fullWidth sx={{ backdropFilter: 'blur(15px)' }}>
         <div className="bg-[#080609] p-7" style={{ boxShadow: '0px 12px 64px 0px rgba(0, 0, 0, 0.20)' }}>
            <div className="flex items-center justify-end">
               <Button className="rounded-full" onClick={closeHandler} disabled={addStepIsMutating}>
                  <IoIosCloseCircleOutline fontSize="30px" color="white" />
               </Button>
            </div>
            <div className="mt-6 space-y-12">
               <div className="flex items-center gap-4">
                  <div className="flex-1 space-y-1">
                     <p className="font-poppinsLight text-base">English text</p>
                     <FormControl
                        variant="outlined"
                        fullWidth
                        color="customPurple"
                        sx={{ '& .MuiOutlinedInput-root': { backgroundColor: '#ffffff0d' } }}
                     >
                        <OutlinedInput
                           multiline
                           value={inputsValue?.englishInput}
                           onChange={e => setInputsValue(prev => ({ ...prev, englishInput: e.target.value }))}
                           endAdornment={
                              <InputAdornment position="end">
                                 <BiEditAlt size="24px" />
                              </InputAdornment>
                           }
                        />
                     </FormControl>
                  </div>
                  <div className="flex-1 space-y-1">
                     <p className="font-poppinsLight text-base">English Image</p>
                     <div className="flex h-14 flex-1 items-center rounded-2xl border border-solid border-[#ffffff2a] bg-[#ffffff0d] px-4">
                        {englishPicUrl ? (
                           <div className="flex flex-1 items-center justify-center">
                              <Image src={englishPicUrl} alt="pic" className="object-cover" width={45} height={45} />
                           </div>
                        ) : (
                           <div className="flex flex-1 items-center justify-center">
                              <ImFilePicture size="25px" />
                           </div>
                        )}
                        <div className="flex-1">
                           <Button
                              sx={{
                                 backgroundColor: '#ffffff0d',
                                 fontFamily: 'poppinsSemibold',
                                 color: 'white',
                                 borderRadius: '12px',
                                 fontSize: '12px',
                                 height: '40px',
                              }}
                              fullWidth
                              component="label"
                              role={undefined}
                              tabIndex={-1}
                           >
                              Choose File
                              <VisuallyHiddenInput type="file" onChange={changeEnglishPicHandler} accept="image/*" />
                           </Button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="flex-1 space-y-1">
                     <p className="font-poppinsLight text-base">Spanish text</p>
                     <FormControl
                        variant="outlined"
                        fullWidth
                        color="customPurple"
                        sx={{ '& .MuiOutlinedInput-root': { backgroundColor: '#ffffff0d' } }}
                     >
                        <OutlinedInput
                           multiline
                           value={inputsValue?.spanishInput}
                           onChange={e => setInputsValue(prev => ({ ...prev, spanishInput: e.target.value }))}
                           endAdornment={
                              <InputAdornment position="end">
                                 <BiEditAlt size="24px" />
                              </InputAdornment>
                           }
                        />
                     </FormControl>
                  </div>
                  <div className="flex-1 space-y-1">
                     <p className="font-poppinsLight text-base">Spanish Image</p>
                     <div className="flex h-14 flex-1 items-center rounded-2xl border border-solid border-[#ffffff2a] bg-[#ffffff0d] px-4">
                        {spanishPicUrl ? (
                           <div className="flex flex-1 items-center justify-center">
                              <Image src={spanishPicUrl} alt="pic" className="object-cover" width={45} height={45} />
                           </div>
                        ) : (
                           <div className="flex flex-1 items-center justify-center">
                              <ImFilePicture size="25px" />
                           </div>
                        )}
                        <div className="flex-1">
                           <Button
                              sx={{
                                 backgroundColor: '#ffffff0d',
                                 fontFamily: 'poppinsSemibold',
                                 color: 'white',
                                 borderRadius: '12px',
                                 fontSize: '12px',
                                 height: '40px',
                              }}
                              fullWidth
                              component="label"
                              role={undefined}
                              tabIndex={-1}
                           >
                              Choose File
                              <VisuallyHiddenInput type="file" onChange={changeSpanishPicHandler} accept="image/*" />
                           </Button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="flex-1 space-y-1">
                     <p className="font-poppinsLight text-base">Russian text</p>
                     <FormControl
                        variant="outlined"
                        fullWidth
                        color="customPurple"
                        sx={{ '& .MuiOutlinedInput-root': { backgroundColor: '#ffffff0d' } }}
                     >
                        <OutlinedInput
                           multiline
                           value={inputsValue?.russianInput}
                           onChange={e => setInputsValue(prev => ({ ...prev, russianInput: e.target.value }))}
                           endAdornment={
                              <InputAdornment position="end">
                                 <BiEditAlt size="24px" />
                              </InputAdornment>
                           }
                        />
                     </FormControl>
                  </div>
                  <div className="flex-1 space-y-1">
                     <p className="font-poppinsLight text-base">Russian Image</p>
                     <div className="flex h-14 flex-1 items-center rounded-2xl border border-solid border-[#ffffff2a] bg-[#ffffff0d] px-4">
                        {russianPicUrl ? (
                           <div className="flex flex-1 items-center justify-center">
                              <Image src={russianPicUrl} alt="pic" className="object-cover" width={45} height={45} />
                           </div>
                        ) : (
                           <div className="flex flex-1 items-center justify-center">
                              <ImFilePicture size="25px" />
                           </div>
                        )}
                        <div className="flex-1">
                           <Button
                              sx={{
                                 backgroundColor: '#ffffff0d',
                                 fontFamily: 'poppinsSemibold',
                                 color: 'white',
                                 borderRadius: '12px',
                                 fontSize: '12px',
                                 height: '40px',
                              }}
                              fullWidth
                              component="label"
                              role={undefined}
                              tabIndex={-1}
                           >
                              Choose File
                              <VisuallyHiddenInput type="file" onChange={changeRussianPicHandler} accept="image/*" />
                           </Button>
                        </div>
                     </div>
                  </div>
               </div>
               <LoadingButton
                  sx={{ fontFamily: 'poppinsRegular', height: '56px', borderRadius: '16px' }}
                  variant="contained"
                  color="secondary"
                  fullWidth
                  onClick={addStepHandler}
                  loading={addStepIsMutating}
               >
                  Add
               </LoadingButton>
            </div>
         </div>
      </Dialog>
   );
}

export default AddStepModal;

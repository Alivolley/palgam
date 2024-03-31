import Image from 'next/image';
import { useEffect, useState } from 'react';

// MUI
import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Button,
   FormControl,
   InputAdornment,
   OutlinedInput,
} from '@mui/material';
import styled from '@emotion/styled';
import { LoadingButton } from '@mui/lab';

// Icons
import { IoIosArrowDown } from 'react-icons/io';
import { BiEditAlt, BiSolidTrash } from 'react-icons/bi';
import { ImFilePicture } from 'react-icons/im';

// Components
import ConfirmModal from '@/components/templates/confirm-modal/confirm-modal';

// Apis
import useDeleteStep from '@/apis/adminPanel/others/useDeleteStep';
import useEditStep from '@/apis/adminPanel/others/useEditStep';

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

function IosAccordion({ mainTitle, detail, stepsMutate, chosenLang }) {
   const [textValue, setTextValue] = useState('');
   const [coverPic, setCoverPic] = useState();
   const [coverPicUrl, setCoverPicUrl] = useState();
   const [showConfirmModal, setShowConfirmModal] = useState(false);
   const [isAccordionOpen, setIsAccordionOpen] = useState(false);

   const { trigger: deleteStepTrigger, isMutating: deleteStepIsMutating } = useDeleteStep();
   const { trigger: editStepTrigger, isMutating: editStepIsMutating } = useEditStep();

   const changeCoverHandler = e => {
      if (e?.target?.files?.[0]) {
         const file = e?.target?.files?.[0];
         setCoverPic(file);
         const fileURL = URL.createObjectURL(file);
         setCoverPicUrl(fileURL);
      }
   };

   useEffect(() => {
      setTextValue(detail?.description || '');
      setCoverPicUrl(detail?.image);
   }, [detail]);

   const deleteStepHandler = () => {
      deleteStepTrigger(detail?.step, {
         onSuccess: () => {
            stepsMutate();
            setIsAccordionOpen(false);
            setShowConfirmModal(false);
         },
      });
   };

   const editStepHandler = () => {
      const formData = new FormData();
      formData?.append('lang', chosenLang);
      formData?.append('description', textValue);
      formData?.append('step', detail?.step);
      if (coverPic) {
         formData?.append('image', coverPic);
      }

      editStepTrigger(formData, {
         onSuccess: () => stepsMutate(),
      });
   };

   return (
      <div>
         <Accordion sx={{ background: 'none', boxShadow: 'none' }} expanded={isAccordionOpen}>
            <AccordionSummary
               expandIcon={<IoIosArrowDown />}
               sx={{ padding: '0px' }}
               onClick={() => setIsAccordionOpen(prev => !prev)}
            >
               <p className="font-poppinsLight text-xl">{mainTitle}</p>
            </AccordionSummary>
            <AccordionDetails>
               <div className="flex items-center gap-4">
                  <div className="flex-1 space-y-1">
                     <p className="font-poppinsLight text-base">Text</p>
                     <FormControl
                        variant="outlined"
                        fullWidth
                        color="customPurple"
                        sx={{ '& .MuiOutlinedInput-root': { backgroundColor: '#ffffff0d' } }}
                     >
                        <OutlinedInput
                           multiline
                           value={textValue}
                           onChange={e => setTextValue(e.target.value)}
                           endAdornment={
                              <InputAdornment position="end">
                                 <BiEditAlt size="24px" />
                              </InputAdornment>
                           }
                        />
                     </FormControl>
                  </div>
                  <div className="flex-1 space-y-1">
                     <p className="font-poppinsLight text-base">Image</p>
                     <div className="flex h-14 flex-1 items-center rounded-2xl border border-solid border-[#ffffff2a] bg-[#ffffff0d] px-4">
                        {coverPicUrl ? (
                           <div className="flex flex-1 items-center justify-center">
                              <Image src={coverPicUrl} alt="pic" className="object-cover" width={45} height={45} />
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
                              <VisuallyHiddenInput type="file" onChange={changeCoverHandler} accept="image/*" />
                           </Button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="mt-5 flex items-center gap-4">
                  <div className="flex-1">
                     <LoadingButton
                        variant="outlined"
                        color="error"
                        sx={{
                           height: '56px',
                           borderRadius: '12px',
                           fontFamily: 'poppinsSemibold',
                        }}
                        fullWidth
                        onClick={() => setShowConfirmModal(true)}
                        loading={deleteStepIsMutating}
                     >
                        <BiSolidTrash size="28px" />
                     </LoadingButton>
                  </div>
                  <div className="flex-[5]">
                     <LoadingButton
                        variant="contained"
                        color="secondary"
                        sx={{
                           height: '56px',
                           borderRadius: '12px',
                           fontFamily: 'poppinsSemibold',
                        }}
                        fullWidth
                        onClick={editStepHandler}
                        loading={editStepIsMutating}
                     >
                        Edit
                     </LoadingButton>
                  </div>
               </div>
            </AccordionDetails>
         </Accordion>

         <ConfirmModal
            closeModal={() => setShowConfirmModal(false)}
            title="Are you sure about deleting this step ?"
            confirmHandler={deleteStepHandler}
            open={showConfirmModal}
            confirmLoading={deleteStepIsMutating}
         />
      </div>
   );
}

export default IosAccordion;

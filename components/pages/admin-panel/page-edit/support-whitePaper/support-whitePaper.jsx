import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Image from 'next/image';

// MUI
import { CircularProgress, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import { BiEditAlt } from 'react-icons/bi';

// Assets
import supportWhitePaperPic from '@/assets/images/adminPanel/support-whitePaperPic.png';

// Components
import LanguageBar from '../language-bar/language-bar';

// Apis
import useGetPagesData from '@/apis/adminPanel/page-edit/useGetPagesData';
import useAddEditPageData from '@/apis/adminPanel/page-edit/useAddEditPageData';

function SupportWhitePaper() {
   const [chosenLang, setChosenLang] = useState('en');
   const [changeLangLoading, setChangeLangLoading] = useState(false);

   const { data: pagesData, isLoading: pagesDataIsLoading, mutate: pagesDataMutate } = useGetPagesData();
   const { trigger: addEditTrigger, isMutating: addEditIsMutating } = useAddEditPageData();

   const { register, handleSubmit, setValue } = useForm({
      defaultValues: {
         descriptionEn: '',
         descriptionEs: '',
         descriptionRu: '',
      },
   });

   const formSubmit = data => {
      const newData = {
         page_name: 'suppurt_pages',
         key_name: 'whitePaper',
         english_data: {
            description: data?.descriptionEn,
         },
         spanish_data: {
            description: data?.descriptionEs,
         },
         russian_data: {
            description: data?.descriptionRu,
         },
      };

      addEditTrigger(newData, {
         onSuccess: () => pagesDataMutate(),
      });
   };

   useEffect(() => {
      if (pagesData) {
         setValue('descriptionEn', pagesData?.suppurt_pages?.english_data?.whitePaper?.description);
         setValue('descriptionEs', pagesData?.suppurt_pages?.spanish_data?.whitePaper?.description);
         setValue('descriptionRu', pagesData?.suppurt_pages?.russian_data?.whitePaper?.description);
      }
   }, [pagesData]);

   useEffect(() => {
      setChangeLangLoading(true);
      setTimeout(() => {
         setChangeLangLoading(false);
      }, 100);
   }, [chosenLang]);

   return (
      <div className="mt-6">
         <div className="h-[300px] w-full">
            <Image src={supportWhitePaperPic} alt="sample" className="size-full rounded-2xl object-cover" />
         </div>
         <div className="my-6">
            <LanguageBar chosenLang={chosenLang} setChosenLang={setChosenLang} />
         </div>
         <form className="space-y-6" onSubmit={handleSubmit(formSubmit)}>
            {changeLangLoading || pagesDataIsLoading ? (
               <div className="mt-5 flex items-center justify-center p-5">
                  <CircularProgress color="secondary" />
               </div>
            ) : chosenLang === 'en' ? (
               <div className="space-y-2">
                  <p className="font-poppinsLight text-xl leading-6">Description</p>
                  <FormControl
                     variant="outlined"
                     fullWidth
                     color="customPurple"
                     sx={{ '& .MuiOutlinedInput-root': { backgroundColor: '#ffffff0d' } }}
                  >
                     <OutlinedInput
                        multiline
                        minRows={10}
                        {...register('descriptionEn')}
                        endAdornment={
                           <InputAdornment position="end" sx={{ marginTop: '-200px' }}>
                              <BiEditAlt size="24px" />
                           </InputAdornment>
                        }
                     />
                  </FormControl>
               </div>
            ) : chosenLang === 'es' ? (
               <div className="space-y-2">
                  <p className="font-poppinsLight text-xl leading-6">Description</p>
                  <FormControl
                     variant="outlined"
                     fullWidth
                     color="customPurple"
                     sx={{ '& .MuiOutlinedInput-root': { backgroundColor: '#ffffff0d' } }}
                  >
                     <OutlinedInput
                        multiline
                        minRows={10}
                        {...register('descriptionEs')}
                        endAdornment={
                           <InputAdornment position="end" sx={{ marginTop: '-200px' }}>
                              <BiEditAlt size="24px" />
                           </InputAdornment>
                        }
                     />
                  </FormControl>
               </div>
            ) : chosenLang === 'ru' ? (
               <div className="space-y-2">
                  <p className="font-poppinsLight text-xl leading-6">Description</p>
                  <FormControl
                     variant="outlined"
                     fullWidth
                     color="customPurple"
                     sx={{ '& .MuiOutlinedInput-root': { backgroundColor: '#ffffff0d' } }}
                  >
                     <OutlinedInput
                        multiline
                        minRows={10}
                        {...register('descriptionRu')}
                        endAdornment={
                           <InputAdornment position="end" sx={{ marginTop: '-200px' }}>
                              <BiEditAlt size="24px" />
                           </InputAdornment>
                        }
                     />
                  </FormControl>
               </div>
            ) : null}

            <LoadingButton
               type="submit"
               fullWidth
               sx={{ fontFamily: 'poppinsRegular', height: '56px', borderRadius: '16px' }}
               variant="contained"
               color="secondary"
               loading={addEditIsMutating}
            >
               Submit
            </LoadingButton>
         </form>
      </div>
   );
}

export default SupportWhitePaper;

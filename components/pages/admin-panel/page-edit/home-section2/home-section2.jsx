import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Image from 'next/image';

// MUI
import { CircularProgress, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import { BiEditAlt } from 'react-icons/bi';

// Assets
import homeSection2Pic from '@/assets/images/adminPanel/home-section2.png';

// Components
import LanguageBar from '../language-bar/language-bar';

// Apis
import useGetPagesData from '@/apis/adminPanel/page-edit/useGetPagesData';
import useAddEditPageData from '@/apis/adminPanel/page-edit/useAddEditPageData';

const InputStyle = {
   '& .MuiOutlinedInput-root': {
      backgroundColor: '#ffffff0d',
      height: '64px',
   },
};

function HomeSection2() {
   const [chosenLang, setChosenLang] = useState('en');
   const [changeLangLoading, setChangeLangLoading] = useState(false);

   const { data: pagesData, isLoading: pagesDataIsLoading, mutate: pagesDataMutate } = useGetPagesData();
   const { trigger: addEditTrigger, isMutating: addEditIsMutating } = useAddEditPageData();

   const { register, handleSubmit, setValue } = useForm({
      defaultValues: {
         labelEn: '',
         labelEs: '',
         labelRu: '',
         titleEn: '',
         titleEs: '',
         titleRu: '',
         descriptionEn: '',
         descriptionEs: '',
         descriptionRu: '',
      },
   });

   const formSubmit = data => {
      const newData = {
         page_name: 'home_page',
         key_name: 'section2',
         english_data: {
            label: data?.labelEn,
            title: data?.titleEn,
            description: data?.descriptionEn,
         },
         spanish_data: {
            label: data?.labelEs,
            title: data?.titleEs,
            description: data?.descriptionEs,
         },
         russian_data: {
            label: data?.labelRu,
            title: data?.titleRu,
            description: data?.descriptionRu,
         },
      };
      addEditTrigger(newData, {
         onSuccess: () => pagesDataMutate(),
      });
   };

   useEffect(() => {
      if (pagesData) {
         setValue('labelEn', pagesData?.home_page?.english_data?.section2?.label);
         setValue('labelEs', pagesData?.home_page?.spanish_data?.section2?.label);
         setValue('labelRu', pagesData?.home_page?.russian_data?.section2?.label);
         setValue('titleEn', pagesData?.home_page?.english_data?.section2?.title);
         setValue('titleEs', pagesData?.home_page?.spanish_data?.section2?.title);
         setValue('titleRu', pagesData?.home_page?.russian_data?.section2?.title);
         setValue('descriptionEn', pagesData?.home_page?.english_data?.section2?.description);
         setValue('descriptionEs', pagesData?.home_page?.spanish_data?.section2?.description);
         setValue('descriptionRu', pagesData?.home_page?.russian_data?.section2?.description);
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
            <Image src={homeSection2Pic} alt="sample" className="size-full rounded-2xl object-cover" />
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
               <>
                  <div className="space-y-2">
                     <p className="font-poppinsLight text-xl leading-6">Label</p>
                     <FormControl variant="outlined" fullWidth color="customPurple" sx={InputStyle}>
                        <OutlinedInput
                           {...register('labelEn')}
                           endAdornment={
                              <InputAdornment position="end">
                                 <BiEditAlt size="24px" />
                              </InputAdornment>
                           }
                        />
                     </FormControl>
                  </div>
                  <div className="space-y-2">
                     <p className="font-poppinsLight text-xl leading-6">Title</p>
                     <FormControl variant="outlined" fullWidth color="customPurple" sx={InputStyle}>
                        <OutlinedInput
                           {...register('titleEn')}
                           endAdornment={
                              <InputAdornment position="end">
                                 <BiEditAlt size="24px" />
                              </InputAdornment>
                           }
                        />
                     </FormControl>
                  </div>
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
                           minRows={6}
                           {...register('descriptionEn')}
                           endAdornment={
                              <InputAdornment position="end" sx={{ marginTop: '-100px' }}>
                                 <BiEditAlt size="24px" />
                              </InputAdornment>
                           }
                        />
                     </FormControl>
                  </div>
               </>
            ) : chosenLang === 'es' ? (
               <>
                  <div className="space-y-2">
                     <p className="font-poppinsLight text-xl leading-6">Label</p>
                     <FormControl variant="outlined" fullWidth color="customPurple" sx={InputStyle}>
                        <OutlinedInput
                           {...register('labelEs')}
                           endAdornment={
                              <InputAdornment position="end">
                                 <BiEditAlt size="24px" />
                              </InputAdornment>
                           }
                        />
                     </FormControl>
                  </div>
                  <div className="space-y-2">
                     <p className="font-poppinsLight text-xl leading-6">Title</p>
                     <FormControl variant="outlined" fullWidth color="customPurple" sx={InputStyle}>
                        <OutlinedInput
                           {...register('titleEs')}
                           endAdornment={
                              <InputAdornment position="end">
                                 <BiEditAlt size="24px" />
                              </InputAdornment>
                           }
                        />
                     </FormControl>
                  </div>
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
                           minRows={6}
                           {...register('descriptionEs')}
                           endAdornment={
                              <InputAdornment position="end" sx={{ marginTop: '-100px' }}>
                                 <BiEditAlt size="24px" />
                              </InputAdornment>
                           }
                        />
                     </FormControl>
                  </div>
               </>
            ) : chosenLang === 'ru' ? (
               <>
                  <div className="space-y-2">
                     <p className="font-poppinsLight text-xl leading-6">Label</p>
                     <FormControl variant="outlined" fullWidth color="customPurple" sx={InputStyle}>
                        <OutlinedInput
                           {...register('labelRu')}
                           endAdornment={
                              <InputAdornment position="end">
                                 <BiEditAlt size="24px" />
                              </InputAdornment>
                           }
                        />
                     </FormControl>
                  </div>
                  <div className="space-y-2">
                     <p className="font-poppinsLight text-xl leading-6">Title</p>
                     <FormControl variant="outlined" fullWidth color="customPurple" sx={InputStyle}>
                        <OutlinedInput
                           {...register('titleRu')}
                           endAdornment={
                              <InputAdornment position="end">
                                 <BiEditAlt size="24px" />
                              </InputAdornment>
                           }
                        />
                     </FormControl>
                  </div>
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
                           minRows={6}
                           {...register('descriptionRu')}
                           endAdornment={
                              <InputAdornment position="end" sx={{ marginTop: '-100px' }}>
                                 <BiEditAlt size="24px" />
                              </InputAdornment>
                           }
                        />
                     </FormControl>
                  </div>
               </>
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

export default HomeSection2;

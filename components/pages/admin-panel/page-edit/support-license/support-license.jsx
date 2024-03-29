import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Image from 'next/image';

// MUI
import { CircularProgress, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import { BiEditAlt } from 'react-icons/bi';

// Assets
import supportLicensePicPic from '@/assets/images/adminPanel/support-licensePic.png';

// Components
import LanguageBar from '../language-bar/language-bar';
import SectionBlock from '../section-block/section-block';

// Apis
import useGetPagesData from '@/apis/adminPanel/page-edit/useGetPagesData';
import useAddEditPageData from '@/apis/adminPanel/page-edit/useAddEditPageData';

function SupportLicense() {
   const [chosenLang, setChosenLang] = useState('en');
   const [changeLangLoading, setChangeLangLoading] = useState(false);

   const { data: pagesData, isLoading: pagesDataIsLoading, mutate: pagesDataMutate } = useGetPagesData();
   const { trigger: addEditTrigger, isMutating: addEditIsMutating } = useAddEditPageData();

   const { register, handleSubmit, setValue } = useForm({
      defaultValues: {
         titleEn: '',
         titleEs: '',
         titleRu: '',
         descriptionEn: '',
         descriptionEs: '',
         descriptionRu: '',

         block1TitleEn: '',
         block1DescriptionEn: '',
         block2TitleEn: '',
         block2DescriptionEn: '',
         block3TitleEn: '',
         block3DescriptionEn: '',
         block4TitleEn: '',
         block4DescriptionEn: '',

         block1TitleEs: '',
         block1DescriptionEs: '',
         block2TitleEs: '',
         block2DescriptionEs: '',
         block3TitleEs: '',
         block3DescriptionEs: '',
         block4TitleEs: '',
         block4DescriptionEs: '',

         block1TitleRu: '',
         block1DescriptionRu: '',
         block2TitleRu: '',
         block2DescriptionRu: '',
         block3TitleRu: '',
         block3DescriptionRu: '',
         block4TitleRu: '',
         block4DescriptionRu: '',
      },
   });

   const formSubmit = data => {
      const newData = {
         page_name: 'suppurt_pages',
         key_name: 'license',
         english_data: {
            description: data?.descriptionEn,
            block1: {
               title: data?.block1TitleEn,
               description: data?.block1DescriptionEn,
            },
            block2: {
               title: data?.block2TitleEn,
               description: data?.block2DescriptionEn,
            },
            block3: {
               title: data?.block3TitleEn,
               description: data?.block3DescriptionEn,
            },
            block4: {
               title: data?.block4TitleEn,
               description: data?.block4DescriptionEn,
            },
         },
         spanish_data: {
            description: data?.descriptionEs,
            block1: {
               title: data?.block1TitleEs,
               description: data?.block1DescriptionEs,
            },
            block2: {
               title: data?.block2TitleEs,
               description: data?.block2DescriptionEs,
            },
            block3: {
               title: data?.block3TitleEs,
               description: data?.block3DescriptionEs,
            },
            block4: {
               title: data?.block4TitleEs,
               description: data?.block4DescriptionEs,
            },
         },
         russian_data: {
            description: data?.descriptionRu,
            block1: {
               title: data?.block1TitleRu,
               description: data?.block1DescriptionRu,
            },
            block2: {
               title: data?.block2TitleRu,
               description: data?.block2DescriptionRu,
            },
            block3: {
               title: data?.block3TitleRu,
               description: data?.block3DescriptionRu,
            },
            block4: {
               title: data?.block4TitleRu,
               description: data?.block4DescriptionRu,
            },
         },
      };
      addEditTrigger(newData, {
         onSuccess: () => pagesDataMutate(),
      });
   };

   useEffect(() => {
      if (pagesData) {
         setValue('descriptionEn', pagesData?.suppurt_pages?.english_data?.license?.description);
         setValue('descriptionEs', pagesData?.suppurt_pages?.spanish_data?.license?.description);
         setValue('descriptionRu', pagesData?.suppurt_pages?.russian_data?.license?.description);

         setValue('block1TitleEn', pagesData?.suppurt_pages?.english_data?.license?.block1?.title);
         setValue('block2TitleEn', pagesData?.suppurt_pages?.english_data?.license?.block2?.title);
         setValue('block3TitleEn', pagesData?.suppurt_pages?.english_data?.license?.block3?.title);
         setValue('block4TitleEn', pagesData?.suppurt_pages?.english_data?.license?.block4?.title);

         setValue('block1TitleEs', pagesData?.suppurt_pages?.spanish_data?.license?.block1?.title);
         setValue('block2TitleEs', pagesData?.suppurt_pages?.spanish_data?.license?.block2?.title);
         setValue('block3TitleEs', pagesData?.suppurt_pages?.spanish_data?.license?.block3?.title);
         setValue('block4TitleEs', pagesData?.suppurt_pages?.spanish_data?.license?.block4?.title);

         setValue('block1TitleRu', pagesData?.suppurt_pages?.russian_data?.license?.block1?.title);
         setValue('block2TitleRu', pagesData?.suppurt_pages?.russian_data?.license?.block2?.title);
         setValue('block3TitleRu', pagesData?.suppurt_pages?.russian_data?.license?.block3?.title);
         setValue('block4TitleRu', pagesData?.suppurt_pages?.russian_data?.license?.block4?.title);

         setValue('block1DescriptionEn', pagesData?.suppurt_pages?.english_data?.license?.block1?.description);
         setValue('block2DescriptionEn', pagesData?.suppurt_pages?.english_data?.license?.block2?.description);
         setValue('block3DescriptionEn', pagesData?.suppurt_pages?.english_data?.license?.block3?.description);
         setValue('block4DescriptionEn', pagesData?.suppurt_pages?.english_data?.license?.block4?.description);

         setValue('block1DescriptionEs', pagesData?.suppurt_pages?.spanish_data?.license?.block1?.description);
         setValue('block2DescriptionEs', pagesData?.suppurt_pages?.spanish_data?.license?.block2?.description);
         setValue('block3DescriptionEs', pagesData?.suppurt_pages?.spanish_data?.license?.block3?.description);
         setValue('block4DescriptionEs', pagesData?.suppurt_pages?.spanish_data?.license?.block4?.description);

         setValue('block1DescriptionRu', pagesData?.suppurt_pages?.russian_data?.license?.block1?.description);
         setValue('block2DescriptionRu', pagesData?.suppurt_pages?.russian_data?.license?.block2?.description);
         setValue('block3DescriptionRu', pagesData?.suppurt_pages?.russian_data?.license?.block3?.description);
         setValue('block4DescriptionRu', pagesData?.suppurt_pages?.russian_data?.license?.block4?.description);
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
         <div className="w-full">
            <Image src={supportLicensePicPic} alt="sample" className="size-full rounded-2xl object-cover" />
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
                  <div className="space-y-1">
                     <SectionBlock
                        mainTitle="Block 1"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block1TitleEn') }}
                        secondInputRegister={{ ...register('block1DescriptionEn') }}
                     />
                     <SectionBlock
                        mainTitle="Block 2"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block2TitleEn') }}
                        secondInputRegister={{ ...register('block2DescriptionEn') }}
                     />
                     <SectionBlock
                        mainTitle="Block 3"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block3TitleEn') }}
                        secondInputRegister={{ ...register('block3DescriptionEn') }}
                     />
                     <SectionBlock
                        mainTitle="Block 4"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block4TitleEn') }}
                        secondInputRegister={{ ...register('block4DescriptionEn') }}
                     />
                  </div>
               </>
            ) : chosenLang === 'es' ? (
               <>
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
                  <div className="space-y-1">
                     <SectionBlock
                        mainTitle="Block 1"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block1TitleEs') }}
                        secondInputRegister={{ ...register('block1DescriptionEs') }}
                     />
                     <SectionBlock
                        mainTitle="Block 2"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block2TitleEs') }}
                        secondInputRegister={{ ...register('block2DescriptionEs') }}
                     />
                     <SectionBlock
                        mainTitle="Block 3"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block3TitleEs') }}
                        secondInputRegister={{ ...register('block3DescriptionEs') }}
                     />
                     <SectionBlock
                        mainTitle="Block 4"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block4TitleEs') }}
                        secondInputRegister={{ ...register('block4DescriptionEs') }}
                     />
                  </div>
               </>
            ) : chosenLang === 'ru' ? (
               <>
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

                  <div className="space-y-1">
                     <SectionBlock
                        mainTitle="Block 1"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block1TitleRu') }}
                        secondInputRegister={{ ...register('block1DescriptionRu') }}
                     />
                     <SectionBlock
                        mainTitle="Block 2"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block2TitleRu') }}
                        secondInputRegister={{ ...register('block2DescriptionRu') }}
                     />
                     <SectionBlock
                        mainTitle="Block 3"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block3TitleRu') }}
                        secondInputRegister={{ ...register('block3DescriptionRu') }}
                     />
                     <SectionBlock
                        mainTitle="Block 4"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block4TitleRu') }}
                        secondInputRegister={{ ...register('block4DescriptionRu') }}
                     />
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

export default SupportLicense;

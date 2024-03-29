import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Image from 'next/image';

// MUI
import { CircularProgress, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import { BiEditAlt } from 'react-icons/bi';

// Assets
import affiliateSection3Pic from '@/assets/images/adminPanel/affiliate-section3Pic.png';

// Components
import LanguageBar from '../language-bar/language-bar';
import SectionBlock from '../section-block/section-block';

// Apis
import useGetPagesData from '@/apis/adminPanel/page-edit/useGetPagesData';
import useAddEditPageData from '@/apis/adminPanel/page-edit/useAddEditPageData';

const InputStyle = {
   '& .MuiOutlinedInput-root': {
      backgroundColor: '#ffffff0d',
      height: '64px',
   },
};

function AffiliateSection3() {
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
         block5TitleEn: '',
         block5DescriptionEn: '',

         block1TitleEs: '',
         block1DescriptionEs: '',
         block2TitleEs: '',
         block2DescriptionEs: '',
         block3TitleEs: '',
         block3DescriptionEs: '',
         block4TitleEs: '',
         block4DescriptionEs: '',
         block5TitleEs: '',
         block5DescriptionEs: '',

         block1TitleRu: '',
         block1DescriptionRu: '',
         block2TitleRu: '',
         block2DescriptionRu: '',
         block3TitleRu: '',
         block3DescriptionRu: '',
         block4TitleRu: '',
         block4DescriptionRu: '',
         block5TitleRu: '',
         block5DescriptionRu: '',
      },
   });

   const formSubmit = data => {
      const newData = {
         page_name: 'affiliate_page',
         key_name: 'section3',
         english_data: {
            title: data?.titleEn,
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
            block5: {
               title: data?.block5TitleEn,
               description: data?.block5DescriptionEn,
            },
         },
         spanish_data: {
            title: data?.titleEs,
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
            block5: {
               title: data?.block5TitleEs,
               description: data?.block5DescriptionEs,
            },
         },
         russian_data: {
            title: data?.titleRu,
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
            block5: {
               title: data?.block5TitleRu,
               description: data?.block5DescriptionRu,
            },
         },
      };
      addEditTrigger(newData, {
         onSuccess: () => pagesDataMutate(),
      });
   };

   useEffect(() => {
      if (pagesData) {
         setValue('titleEn', pagesData?.affiliate_page?.english_data?.section3?.title);
         setValue('titleEs', pagesData?.affiliate_page?.spanish_data?.section3?.title);
         setValue('titleRu', pagesData?.affiliate_page?.russian_data?.section3?.title);
         setValue('descriptionEn', pagesData?.affiliate_page?.english_data?.section3?.description);
         setValue('descriptionEs', pagesData?.affiliate_page?.spanish_data?.section3?.description);
         setValue('descriptionRu', pagesData?.affiliate_page?.russian_data?.section3?.description);

         setValue('block1TitleEn', pagesData?.affiliate_page?.english_data?.section3?.block1?.title);
         setValue('block2TitleEn', pagesData?.affiliate_page?.english_data?.section3?.block2?.title);
         setValue('block3TitleEn', pagesData?.affiliate_page?.english_data?.section3?.block3?.title);
         setValue('block4TitleEn', pagesData?.affiliate_page?.english_data?.section3?.block4?.title);
         setValue('block5TitleEn', pagesData?.affiliate_page?.english_data?.section3?.block5?.title);

         setValue('block1TitleEs', pagesData?.affiliate_page?.spanish_data?.section3?.block1?.title);
         setValue('block2TitleEs', pagesData?.affiliate_page?.spanish_data?.section3?.block2?.title);
         setValue('block3TitleEs', pagesData?.affiliate_page?.spanish_data?.section3?.block3?.title);
         setValue('block4TitleEs', pagesData?.affiliate_page?.spanish_data?.section3?.block4?.title);
         setValue('block5TitleEs', pagesData?.affiliate_page?.spanish_data?.section3?.block5?.title);

         setValue('block1TitleRu', pagesData?.affiliate_page?.russian_data?.section3?.block1?.title);
         setValue('block2TitleRu', pagesData?.affiliate_page?.russian_data?.section3?.block2?.title);
         setValue('block3TitleRu', pagesData?.affiliate_page?.russian_data?.section3?.block3?.title);
         setValue('block4TitleRu', pagesData?.affiliate_page?.russian_data?.section3?.block4?.title);
         setValue('block5TitleRu', pagesData?.affiliate_page?.russian_data?.section3?.block5?.title);

         setValue('block1DescriptionEn', pagesData?.affiliate_page?.english_data?.section3?.block1?.description);
         setValue('block2DescriptionEn', pagesData?.affiliate_page?.english_data?.section3?.block2?.description);
         setValue('block3DescriptionEn', pagesData?.affiliate_page?.english_data?.section3?.block3?.description);
         setValue('block4DescriptionEn', pagesData?.affiliate_page?.english_data?.section3?.block4?.description);
         setValue('block5DescriptionEn', pagesData?.affiliate_page?.english_data?.section3?.block5?.description);

         setValue('block1DescriptionEs', pagesData?.affiliate_page?.spanish_data?.section3?.block1?.description);
         setValue('block2DescriptionEs', pagesData?.affiliate_page?.spanish_data?.section3?.block2?.description);
         setValue('block3DescriptionEs', pagesData?.affiliate_page?.spanish_data?.section3?.block3?.description);
         setValue('block4DescriptionEs', pagesData?.affiliate_page?.spanish_data?.section3?.block4?.description);
         setValue('block5DescriptionEs', pagesData?.affiliate_page?.spanish_data?.section3?.block5?.description);

         setValue('block1DescriptionRu', pagesData?.affiliate_page?.russian_data?.section3?.block1?.description);
         setValue('block2DescriptionRu', pagesData?.affiliate_page?.russian_data?.section3?.block2?.description);
         setValue('block3DescriptionRu', pagesData?.affiliate_page?.russian_data?.section3?.block3?.description);
         setValue('block4DescriptionRu', pagesData?.affiliate_page?.russian_data?.section3?.block4?.description);
         setValue('block5DescriptionRu', pagesData?.affiliate_page?.russian_data?.section3?.block5?.description);
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
            <Image src={affiliateSection3Pic} alt="sample" className="size-full rounded-2xl object-cover" />
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
                     <SectionBlock
                        mainTitle="Block 5"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block5TitleEn') }}
                        secondInputRegister={{ ...register('block5DescriptionEn') }}
                     />
                  </div>
               </>
            ) : chosenLang === 'es' ? (
               <>
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
                     <SectionBlock
                        mainTitle="Block 5"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block5TitleEs') }}
                        secondInputRegister={{ ...register('block5DescriptionEs') }}
                     />
                  </div>
               </>
            ) : chosenLang === 'ru' ? (
               <>
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
                     <SectionBlock
                        mainTitle="Block 5"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block5TitleRu') }}
                        secondInputRegister={{ ...register('block5DescriptionRu') }}
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

export default AffiliateSection3;

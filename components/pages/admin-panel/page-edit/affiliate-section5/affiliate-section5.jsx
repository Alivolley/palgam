import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Image from 'next/image';

// MUI
import { CircularProgress, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import { BiEditAlt } from 'react-icons/bi';

// Assets
import affiliateSection5Pic from '@/assets/images/adminPanel/affiliate-section5Pic.png';

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

function AffiliateSection5() {
   const [chosenLang, setChosenLang] = useState('en');
   const [changeLangLoading, setChangeLangLoading] = useState(false);

   const { data: pagesData, isLoading: pagesDataIsLoading, mutate: pagesDataMutate } = useGetPagesData();
   const { trigger: addEditTrigger, isMutating: addEditIsMutating } = useAddEditPageData();

   const { register, handleSubmit, setValue } = useForm({
      defaultValues: {
         titleEn: '',
         titleEs: '',
         titleRu: '',

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
         block6TitleEn: '',
         block6DescriptionEn: '',

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
         block6TitleEs: '',
         block6DescriptionEs: '',

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
         block6TitleRu: '',
         block6DescriptionRu: '',
      },
   });

   const formSubmit = data => {
      const newData = {
         page_name: 'affiliate_page',
         key_name: 'section5',
         english_data: {
            title: data?.titleEn,

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
            block6: {
               title: data?.block6TitleEn,
               description: data?.block6DescriptionEn,
            },
         },
         spanish_data: {
            title: data?.titleEs,

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
            block6: {
               title: data?.block6TitleEs,
               description: data?.block6DescriptionEs,
            },
         },
         russian_data: {
            title: data?.titleRu,

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
            block6: {
               title: data?.block6TitleRu,
               description: data?.block6DescriptionRu,
            },
         },
      };
      addEditTrigger(newData, {
         onSuccess: () => pagesDataMutate(),
      });
   };

   useEffect(() => {
      if (pagesData) {
         setValue('titleEn', pagesData?.affiliate_page?.english_data?.section5?.title);
         setValue('titleEs', pagesData?.affiliate_page?.spanish_data?.section5?.title);
         setValue('titleRu', pagesData?.affiliate_page?.russian_data?.section5?.title);

         setValue('block1TitleEn', pagesData?.affiliate_page?.english_data?.section5?.block1?.title);
         setValue('block2TitleEn', pagesData?.affiliate_page?.english_data?.section5?.block2?.title);
         setValue('block3TitleEn', pagesData?.affiliate_page?.english_data?.section5?.block3?.title);
         setValue('block4TitleEn', pagesData?.affiliate_page?.english_data?.section5?.block4?.title);
         setValue('block5TitleEn', pagesData?.affiliate_page?.english_data?.section5?.block5?.title);
         setValue('block6TitleEn', pagesData?.affiliate_page?.english_data?.section5?.block6?.title);

         setValue('block1TitleEs', pagesData?.affiliate_page?.spanish_data?.section5?.block1?.title);
         setValue('block2TitleEs', pagesData?.affiliate_page?.spanish_data?.section5?.block2?.title);
         setValue('block3TitleEs', pagesData?.affiliate_page?.spanish_data?.section5?.block3?.title);
         setValue('block4TitleEs', pagesData?.affiliate_page?.spanish_data?.section5?.block4?.title);
         setValue('block5TitleEs', pagesData?.affiliate_page?.spanish_data?.section5?.block5?.title);
         setValue('block6TitleEs', pagesData?.affiliate_page?.spanish_data?.section5?.block6?.title);

         setValue('block1TitleRu', pagesData?.affiliate_page?.russian_data?.section5?.block1?.title);
         setValue('block2TitleRu', pagesData?.affiliate_page?.russian_data?.section5?.block2?.title);
         setValue('block3TitleRu', pagesData?.affiliate_page?.russian_data?.section5?.block3?.title);
         setValue('block4TitleRu', pagesData?.affiliate_page?.russian_data?.section5?.block4?.title);
         setValue('block5TitleRu', pagesData?.affiliate_page?.russian_data?.section5?.block5?.title);
         setValue('block6TitleRu', pagesData?.affiliate_page?.russian_data?.section5?.block6?.title);

         setValue('block1DescriptionEn', pagesData?.affiliate_page?.english_data?.section5?.block1?.description);
         setValue('block2DescriptionEn', pagesData?.affiliate_page?.english_data?.section5?.block2?.description);
         setValue('block3DescriptionEn', pagesData?.affiliate_page?.english_data?.section5?.block3?.description);
         setValue('block4DescriptionEn', pagesData?.affiliate_page?.english_data?.section5?.block4?.description);
         setValue('block5DescriptionEn', pagesData?.affiliate_page?.english_data?.section5?.block5?.description);
         setValue('block6DescriptionEn', pagesData?.affiliate_page?.english_data?.section5?.block6?.description);

         setValue('block1DescriptionEs', pagesData?.affiliate_page?.spanish_data?.section5?.block1?.description);
         setValue('block2DescriptionEs', pagesData?.affiliate_page?.spanish_data?.section5?.block2?.description);
         setValue('block3DescriptionEs', pagesData?.affiliate_page?.spanish_data?.section5?.block3?.description);
         setValue('block4DescriptionEs', pagesData?.affiliate_page?.spanish_data?.section5?.block4?.description);
         setValue('block5DescriptionEs', pagesData?.affiliate_page?.spanish_data?.section5?.block5?.description);
         setValue('block6DescriptionEs', pagesData?.affiliate_page?.spanish_data?.section5?.block6?.description);

         setValue('block1DescriptionRu', pagesData?.affiliate_page?.russian_data?.section5?.block1?.description);
         setValue('block2DescriptionRu', pagesData?.affiliate_page?.russian_data?.section5?.block2?.description);
         setValue('block3DescriptionRu', pagesData?.affiliate_page?.russian_data?.section5?.block3?.description);
         setValue('block4DescriptionRu', pagesData?.affiliate_page?.russian_data?.section5?.block4?.description);
         setValue('block5DescriptionRu', pagesData?.affiliate_page?.russian_data?.section5?.block5?.description);
         setValue('block6DescriptionRu', pagesData?.affiliate_page?.russian_data?.section5?.block6?.description);
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
            <Image src={affiliateSection5Pic} alt="sample" className="size-full rounded-2xl object-cover" />
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
                     <SectionBlock
                        mainTitle="Block 6"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block6TitleEn') }}
                        secondInputRegister={{ ...register('block6DescriptionEn') }}
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
                     <SectionBlock
                        mainTitle="Block 6"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block6TitleEs') }}
                        secondInputRegister={{ ...register('block6DescriptionEs') }}
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
                     <SectionBlock
                        mainTitle="Block 6"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block6TitleRu') }}
                        secondInputRegister={{ ...register('block6DescriptionRu') }}
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

export default AffiliateSection5;

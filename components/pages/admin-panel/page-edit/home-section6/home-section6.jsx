import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Image from 'next/image';

// MUI
import { CircularProgress, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import { BiEditAlt } from 'react-icons/bi';

// Assets
import homeSection6Pic from '@/assets/images/adminPanel/home-section6.png';

// Components
import LanguageBar from '../language-bar/language-bar';
import SectionStory from '../section-story/section-story';

// Apis
import useGetPagesData from '@/apis/adminPanel/page-edit/useGetPagesData';
import useAddEditPageData from '@/apis/adminPanel/page-edit/useAddEditPageData';

const InputStyle = {
   '& .MuiOutlinedInput-root': {
      backgroundColor: '#ffffff0d',
      height: '64px',
   },
};

function HomeSection6() {
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

         story1BoxTitleEn: '',
         story1BoxTextEn: '',
         story1TitleEn: '',
         story1DescriptionEn: '',
         story2BoxTitleEn: '',
         story2BoxTextEn: '',
         story2TitleEn: '',
         story2DescriptionEn: '',
         story3BoxTitleEn: '',
         story3BoxTextEn: '',
         story3TitleEn: '',
         story3DescriptionEn: '',

         story1BoxTitleEs: '',
         story1BoxTextEs: '',
         story1TitleEs: '',
         story1DescriptionEs: '',
         story2BoxTitleEs: '',
         story2BoxTextEs: '',
         story2TitleEs: '',
         story2DescriptionEs: '',
         story3BoxTitleEs: '',
         story3BoxTextEs: '',
         story3TitleEs: '',
         story3DescriptionEs: '',

         story1BoxTitleRu: '',
         story1BoxTextRu: '',
         story1TitleRu: '',
         story1DescriptionRu: '',
         story2BoxTitleRu: '',
         story2BoxTextRu: '',
         story2TitleRu: '',
         story2DescriptionRu: '',
         story3BoxTitleRu: '',
         story3BoxTextRu: '',
         story3TitleRu: '',
         story3DescriptionRu: '',
      },
   });

   const formSubmit = data => {
      const newData = {
         page_name: 'home_page',
         key_name: 'section6',
         english_data: {
            title: data?.titleEn,
            description: data?.descriptionEn,
            story1: {
               boxTitle: data?.story1BoxTitleEn,
               boxText: data?.story1BoxTextEn,
               title: data?.story1TitleEn,
               description: data?.story1DescriptionEn,
            },
            story2: {
               boxTitle: data?.story2BoxTitleEn,
               boxText: data?.story2BoxTextEn,
               title: data?.story2TitleEn,
               description: data?.story2DescriptionEn,
            },
            story3: {
               boxTitle: data?.story3BoxTitleEn,
               boxText: data?.story3BoxTextEn,
               title: data?.story3TitleEn,
               description: data?.story3DescriptionEn,
            },
         },
         spanish_data: {
            title: data?.titleEs,
            description: data?.descriptionEs,
            story1: {
               boxTitle: data?.story1BoxTitleEs,
               boxText: data?.story1BoxTextEs,
               title: data?.story1TitleEs,
               description: data?.story1DescriptionEs,
            },
            story2: {
               boxTitle: data?.story2BoxTitleEs,
               boxText: data?.story2BoxTextEs,
               title: data?.story2TitleEs,
               description: data?.story2DescriptionEs,
            },
            story3: {
               boxTitle: data?.story3BoxTitleEs,
               boxText: data?.story3BoxTextEs,
               title: data?.story3TitleEs,
               description: data?.story3DescriptionEs,
            },
         },
         russian_data: {
            title: data?.titleRu,
            description: data?.descriptionRu,
            story1: {
               boxTitle: data?.story1BoxTitleRu,
               boxText: data?.story1BoxTextRu,
               title: data?.story1TitleRu,
               description: data?.story1DescriptionRu,
            },
            story2: {
               boxTitle: data?.story2BoxTitleRu,
               boxText: data?.story2BoxTextRu,
               title: data?.story2TitleRu,
               description: data?.story2DescriptionRu,
            },
            story3: {
               boxTitle: data?.story3BoxTitleRu,
               boxText: data?.story3BoxTextRu,
               title: data?.story3TitleRu,
               description: data?.story3DescriptionRu,
            },
         },
      };
      addEditTrigger(newData, {
         onSuccess: () => pagesDataMutate(),
      });
   };

   useEffect(() => {
      if (pagesData) {
         setValue('titleEn', pagesData?.home_page?.english_data?.section6?.title);
         setValue('titleEs', pagesData?.home_page?.spanish_data?.section6?.title);
         setValue('titleRu', pagesData?.home_page?.russian_data?.section6?.title);
         setValue('descriptionEn', pagesData?.home_page?.english_data?.section6?.description);
         setValue('descriptionEs', pagesData?.home_page?.spanish_data?.section6?.description);
         setValue('descriptionRu', pagesData?.home_page?.russian_data?.section6?.description);

         setValue('story1BoxTitleEn', pagesData?.home_page?.english_data?.section6?.story1?.boxTitle);
         setValue('story2BoxTitleEn', pagesData?.home_page?.english_data?.section6?.story2?.boxTitle);
         setValue('story3BoxTitleEn', pagesData?.home_page?.english_data?.section6?.story3?.boxTitle);
         setValue('story1BoxTitleEs', pagesData?.home_page?.spanish_data?.section6?.story1?.boxTitle);
         setValue('story2BoxTitleEs', pagesData?.home_page?.spanish_data?.section6?.story2?.boxTitle);
         setValue('story3BoxTitleEs', pagesData?.home_page?.spanish_data?.section6?.story3?.boxTitle);
         setValue('story1BoxTitleRu', pagesData?.home_page?.russian_data?.section6?.story1?.boxTitle);
         setValue('story2BoxTitleRu', pagesData?.home_page?.russian_data?.section6?.story2?.boxTitle);
         setValue('story3BoxTitleRu', pagesData?.home_page?.russian_data?.section6?.story3?.boxTitle);

         setValue('story1BoxTextEn', pagesData?.home_page?.english_data?.section6?.story1?.boxText);
         setValue('story2BoxTextEn', pagesData?.home_page?.english_data?.section6?.story2?.boxText);
         setValue('story3BoxTextEn', pagesData?.home_page?.english_data?.section6?.story3?.boxText);
         setValue('story1BoxTextEs', pagesData?.home_page?.spanish_data?.section6?.story1?.boxText);
         setValue('story2BoxTextEs', pagesData?.home_page?.spanish_data?.section6?.story2?.boxText);
         setValue('story3BoxTextEs', pagesData?.home_page?.spanish_data?.section6?.story3?.boxText);
         setValue('story1BoxTextRu', pagesData?.home_page?.russian_data?.section6?.story1?.boxText);
         setValue('story2BoxTextRu', pagesData?.home_page?.russian_data?.section6?.story2?.boxText);
         setValue('story3BoxTextRu', pagesData?.home_page?.russian_data?.section6?.story3?.boxText);

         setValue('story1TitleEn', pagesData?.home_page?.english_data?.section6?.story1?.title);
         setValue('story2TitleEn', pagesData?.home_page?.english_data?.section6?.story2?.title);
         setValue('story3TitleEn', pagesData?.home_page?.english_data?.section6?.story3?.title);
         setValue('story1TitleEs', pagesData?.home_page?.spanish_data?.section6?.story1?.title);
         setValue('story2TitleEs', pagesData?.home_page?.spanish_data?.section6?.story2?.title);
         setValue('story3TitleEs', pagesData?.home_page?.spanish_data?.section6?.story3?.title);
         setValue('story1TitleRu', pagesData?.home_page?.russian_data?.section6?.story1?.title);
         setValue('story2TitleRu', pagesData?.home_page?.russian_data?.section6?.story2?.title);
         setValue('story3TitleRu', pagesData?.home_page?.russian_data?.section6?.story3?.title);

         setValue('story1DescriptionEn', pagesData?.home_page?.english_data?.section6?.story1?.description);
         setValue('story2DescriptionEn', pagesData?.home_page?.english_data?.section6?.story2?.description);
         setValue('story3DescriptionEn', pagesData?.home_page?.english_data?.section6?.story3?.description);
         setValue('story1DescriptionEs', pagesData?.home_page?.spanish_data?.section6?.story1?.description);
         setValue('story2DescriptionEs', pagesData?.home_page?.spanish_data?.section6?.story2?.description);
         setValue('story3DescriptionEs', pagesData?.home_page?.spanish_data?.section6?.story3?.description);
         setValue('story1DescriptionRu', pagesData?.home_page?.russian_data?.section6?.story1?.description);
         setValue('story2DescriptionRu', pagesData?.home_page?.russian_data?.section6?.story2?.description);
         setValue('story3DescriptionRu', pagesData?.home_page?.russian_data?.section6?.story3?.description);
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
            <Image src={homeSection6Pic} alt="sample" className="size-full rounded-2xl object-cover" />
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
                     <SectionStory
                        mainTitle="Story 1"
                        firstInputRegister={{ ...register('story1BoxTitleEn') }}
                        secondInputRegister={{ ...register('story1BoxTextEn') }}
                        thirdInputRegister={{ ...register('story1TitleEn') }}
                        areaInputRegister={{ ...register('story1DescriptionEn') }}
                     />
                     <SectionStory
                        mainTitle="Story 2"
                        firstInputRegister={{ ...register('story2BoxTitleEn') }}
                        secondInputRegister={{ ...register('story2BoxTextEn') }}
                        thirdInputRegister={{ ...register('story2TitleEn') }}
                        areaInputRegister={{ ...register('story2DescriptionEn') }}
                     />
                     <SectionStory
                        mainTitle="Story 3"
                        firstInputRegister={{ ...register('story3BoxTitleEn') }}
                        secondInputRegister={{ ...register('story3BoxTextEn') }}
                        thirdInputRegister={{ ...register('story3TitleEn') }}
                        areaInputRegister={{ ...register('story3DescriptionEn') }}
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
                     <SectionStory
                        mainTitle="Story 1"
                        firstInputRegister={{ ...register('story1BoxTitleEs') }}
                        secondInputRegister={{ ...register('story1BoxTextEs') }}
                        thirdInputRegister={{ ...register('story1TitleEs') }}
                        areaInputRegister={{ ...register('story1DescriptionEs') }}
                     />
                     <SectionStory
                        mainTitle="Story 2"
                        firstInputRegister={{ ...register('story2BoxTitleEs') }}
                        secondInputRegister={{ ...register('story2BoxTextEs') }}
                        thirdInputRegister={{ ...register('story2TitleEs') }}
                        areaInputRegister={{ ...register('story2DescriptionEs') }}
                     />
                     <SectionStory
                        mainTitle="Story 3"
                        firstInputRegister={{ ...register('story3BoxTitleEs') }}
                        secondInputRegister={{ ...register('story3BoxTextEs') }}
                        thirdInputRegister={{ ...register('story3TitleEs') }}
                        areaInputRegister={{ ...register('story3DescriptionEs') }}
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
                     <SectionStory
                        mainTitle="Story 1"
                        firstInputRegister={{ ...register('story1BoxTitleRu') }}
                        secondInputRegister={{ ...register('story1BoxTextRu') }}
                        thirdInputRegister={{ ...register('story1TitleRu') }}
                        areaInputRegister={{ ...register('story1DescriptionRu') }}
                     />
                     <SectionStory
                        mainTitle="Story 2"
                        firstInputRegister={{ ...register('story2BoxTitleRu') }}
                        secondInputRegister={{ ...register('story2BoxTextRu') }}
                        thirdInputRegister={{ ...register('story2TitleRu') }}
                        areaInputRegister={{ ...register('story2DescriptionRu') }}
                     />
                     <SectionStory
                        mainTitle="Story 3"
                        firstInputRegister={{ ...register('story3BoxTitleRu') }}
                        secondInputRegister={{ ...register('story3BoxTextRu') }}
                        thirdInputRegister={{ ...register('story3TitleRu') }}
                        areaInputRegister={{ ...register('story3DescriptionRu') }}
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

export default HomeSection6;

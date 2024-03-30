import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Image from 'next/image';

// MUI
import { CircularProgress, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import { BiEditAlt } from 'react-icons/bi';

// Assets
import affiliateSection2Pic from '@/assets/images/adminPanel/affiliate-section2Pic.png';

// Components
import LanguageBar from '../language-bar/language-bar';
import AffiliateFeatures from '../affiliate-features/affiliate-features';

// Apis
import useGetPagesData from '@/apis/adminPanel/page-edit/useGetPagesData';
import useAddEditPageData from '@/apis/adminPanel/page-edit/useAddEditPageData';

const InputStyle = {
   '& .MuiOutlinedInput-root': {
      backgroundColor: '#ffffff0d',
      height: '64px',
   },
};

function AffiliateSection2() {
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

         features1TitleEn: '',
         features1text1En: '',
         features1description1En: '',
         features1text2En: '',
         features1description2En: '',
         features1text3En: '',
         features1description3En: '',
         features1text4En: '',
         features1description4En: '',
         features1text5En: '',
         features1description5En: '',
         features2TitleEn: '',
         features2text1En: '',
         features2description1En: '',
         features2text2En: '',
         features2description2En: '',
         features3TitleEn: '',
         features3text1En: '',
         features3description1En: '',
         features3text2En: '',
         features3description2En: '',
         features3text3En: '',
         features3description3En: '',
         features3text4En: '',
         features3description4En: '',
         features3text5En: '',
         features3description5En: '',
         features4TitleEn: '',
         features4text1En: '',
         features4description1En: '',
         features4text2En: '',
         features4description2En: '',
         features5TitleEn: '',
         features5text1En: '',
         features5description1En: '',
         features5text2En: '',
         features5description2En: '',
         features5text3En: '',
         features5description3En: '',

         features1TitleEs: '',
         features1text1Es: '',
         features1description1Es: '',
         features1text2Es: '',
         features1description2Es: '',
         features1text3Es: '',
         features1description3Es: '',
         features1text4Es: '',
         features1description4Es: '',
         features1text5Es: '',
         features1description5Es: '',
         features2TitleEs: '',
         features2text1Es: '',
         features2description1Es: '',
         features2text2Es: '',
         features2description2Es: '',
         features3TitleEs: '',
         features3text1Es: '',
         features3description1Es: '',
         features3text2Es: '',
         features3description2Es: '',
         features3text3Es: '',
         features3description3Es: '',
         features3text4Es: '',
         features3description4Es: '',
         features3text5Es: '',
         features3description5Es: '',
         features4TitleEs: '',
         features4text1Es: '',
         features4description1Es: '',
         features4text2Es: '',
         features4description2Es: '',
         features5TitleEs: '',
         features5text1Es: '',
         features5description1Es: '',
         features5text2Es: '',
         features5description2Es: '',
         features5text3Es: '',
         features5description3Es: '',

         features1TitleRu: '',
         features1text1Ru: '',
         features1description1Ru: '',
         features1text2Ru: '',
         features1description2Ru: '',
         features1text3Ru: '',
         features1description3Ru: '',
         features1text4Ru: '',
         features1description4Ru: '',
         features1text5Ru: '',
         features1description5Ru: '',
         features2TitleRu: '',
         features2text1Ru: '',
         features2description1Ru: '',
         features2text2Ru: '',
         features2description2Ru: '',
         features3TitleRu: '',
         features3text1Ru: '',
         features3description1Ru: '',
         features3text2Ru: '',
         features3description2Ru: '',
         features3text3Ru: '',
         features3description3Ru: '',
         features3text4Ru: '',
         features3description4Ru: '',
         features3text5Ru: '',
         features3description5Ru: '',
         features4TitleRu: '',
         features4text1Ru: '',
         features4description1Ru: '',
         features4text2Ru: '',
         features4description2Ru: '',
         features5TitleRu: '',
         features5text1Ru: '',
         features5description1Ru: '',
         features5text2Ru: '',
         features5description2Ru: '',
         features5text3Ru: '',
         features5description3Ru: '',
      },
   });

   const formSubmit = data => {
      const newData = {
         page_name: 'affiliate_page',
         key_name: 'section2',
         english_data: {
            title: data?.titleEn,
            description: data?.descriptionEn,
            features1: {
               title: data?.features1TitleEn,
               text1: data?.features1text1En,
               description1: data?.features1description1En,
               text2: data?.features1text2En,
               description2: data?.features1description2En,
               text3: data?.features1text3En,
               description3: data?.features1description3En,
               text4: data?.features1text4En,
               description4: data?.features1description4En,
               text5: data?.features1text5En,
               description5: data?.features1description5En,
            },
            features2: {
               title: data?.features2TitleEn,
               text1: data?.features2text1En,
               description1: data?.features2description1En,
               text2: data?.features2text2En,
               description2: data?.features2description2En,
            },

            features3: {
               title: data?.features3TitleEn,
               text1: data?.features3text1En,
               description1: data?.features3description1En,
               text2: data?.features3text2En,
               description2: data?.features3description2En,
               text3: data?.features3text3En,
               description3: data?.features3description3En,
               text4: data?.features3text4En,
               description4: data?.features3description4En,
               text5: data?.features3text5En,
               description5: data?.features3description5En,
            },
            features4: {
               title: data?.features4TitleEn,
               text1: data?.features4text1En,
               description1: data?.features4description1En,
               text2: data?.features4text2En,
               description2: data?.features4description2En,
            },
            features5: {
               title: data?.features5TitleEn,
               text1: data?.features5text1En,
               description1: data?.features5description1En,
               text2: data?.features5text2En,
               description2: data?.features5description2En,
               text3: data?.features5text3En,
               description3: data?.features5description3En,
            },
         },
         spanish_data: {
            title: data?.titleEs,
            description: data?.descriptionEs,
            features1: {
               title: data?.features1TitleEs,
               text1: data?.features1text1Es,
               description1: data?.features1description1Es,
               text2: data?.features1text2Es,
               description2: data?.features1description2Es,
               text3: data?.features1text3Es,
               description3: data?.features1description3Es,
               text4: data?.features1text4Es,
               description4: data?.features1description4Es,
               text5: data?.features1text5Es,
               description5: data?.features1description5Es,
            },
            features2: {
               title: data?.features2TitleEs,
               text1: data?.features2text1Es,
               description1: data?.features2description1Es,
               text2: data?.features2text2Es,
               description2: data?.features2description2Es,
            },

            features3: {
               title: data?.features3TitleEs,
               text1: data?.features3text1Es,
               description1: data?.features3description1Es,
               text2: data?.features3text2Es,
               description2: data?.features3description2Es,
               text3: data?.features3text3Es,
               description3: data?.features3description3Es,
               text4: data?.features3text4Es,
               description4: data?.features3description4Es,
               text5: data?.features3text5Es,
               description5: data?.features3description5Es,
            },
            features4: {
               title: data?.features4TitleEs,
               text1: data?.features4text1Es,
               description1: data?.features4description1Es,
               text2: data?.features4text2Es,
               description2: data?.features4description2Es,
            },
            features5: {
               title: data?.features5TitleEs,
               text1: data?.features5text1Es,
               description1: data?.features5description1Es,
               text2: data?.features5text2Es,
               description2: data?.features5description2Es,
               text3: data?.features5text3Es,
               description3: data?.features5description3Es,
            },
         },
         russian_data: {
            title: data?.titleRu,
            description: data?.descriptionRu,
            features1: {
               title: data?.features1TitleRu,
               text1: data?.features1text1Ru,
               description1: data?.features1description1Ru,
               text2: data?.features1text2Ru,
               description2: data?.features1description2Ru,
               text3: data?.features1text3Ru,
               description3: data?.features1description3Ru,
               text4: data?.features1text4Ru,
               description4: data?.features1description4Ru,
               text5: data?.features1text5Ru,
               description5: data?.features1description5Ru,
            },
            features2: {
               title: data?.features2TitleRu,
               text1: data?.features2text1Ru,
               description1: data?.features2description1Ru,
               text2: data?.features2text2Ru,
               description2: data?.features2description2Ru,
            },

            features3: {
               title: data?.features3TitleRu,
               text1: data?.features3text1Ru,
               description1: data?.features3description1Ru,
               text2: data?.features3text2Ru,
               description2: data?.features3description2Ru,
               text3: data?.features3text3Ru,
               description3: data?.features3description3Ru,
               text4: data?.features3text4Ru,
               description4: data?.features3description4Ru,
               text5: data?.features3text5Ru,
               description5: data?.features3description5Ru,
            },
            features4: {
               title: data?.features4TitleRu,
               text1: data?.features4text1Ru,
               description1: data?.features4description1Ru,
               text2: data?.features4text2Ru,
               description2: data?.features4description2Ru,
            },
            features5: {
               title: data?.features5TitleRu,
               text1: data?.features5text1Ru,
               description1: data?.features5description1Ru,
               text2: data?.features5text2Ru,
               description2: data?.features5description2Ru,
               text3: data?.features5text3Ru,
               description3: data?.features5description3Ru,
            },
         },
      };

      addEditTrigger(newData, {
         onSuccess: () => pagesDataMutate(),
      });
   };

   useEffect(() => {
      if (pagesData) {
         setValue('titleEn', pagesData?.affiliate_page?.english_data?.section2?.title);
         setValue('titleEs', pagesData?.affiliate_page?.spanish_data?.section2?.title);
         setValue('titleRu', pagesData?.affiliate_page?.russian_data?.section2?.title);
         setValue('descriptionEn', pagesData?.affiliate_page?.english_data?.section2?.description);
         setValue('descriptionEs', pagesData?.affiliate_page?.spanish_data?.section2?.description);
         setValue('descriptionRu', pagesData?.affiliate_page?.russian_data?.section2?.description);

         setValue('features1TitleEn', pagesData?.affiliate_page?.english_data?.section2?.features1?.title);
         setValue('features1text1En', pagesData?.affiliate_page?.english_data?.section2?.features1?.text1);
         setValue(
            'features1description1En',
            pagesData?.affiliate_page?.english_data?.section2?.features1?.description1
         );
         setValue('features1text2En', pagesData?.affiliate_page?.english_data?.section2?.features1?.text2);
         setValue(
            'features1description2En',
            pagesData?.affiliate_page?.english_data?.section2?.features1?.description2
         );
         setValue('features1text3En', pagesData?.affiliate_page?.english_data?.section2?.features1?.text3);
         setValue(
            'features1description3En',
            pagesData?.affiliate_page?.english_data?.section2?.features1?.description3
         );
         setValue('features1text4En', pagesData?.affiliate_page?.english_data?.section2?.features1?.text4);
         setValue(
            'features1description4En',
            pagesData?.affiliate_page?.english_data?.section2?.features1?.description4
         );
         setValue('features1text5En', pagesData?.affiliate_page?.english_data?.section2?.features1?.text5);
         setValue(
            'features1description5En',
            pagesData?.affiliate_page?.english_data?.section2?.features1?.description5
         );
         setValue('features2TitleEn', pagesData?.affiliate_page?.english_data?.section2?.features2?.title);
         setValue('features2text1En', pagesData?.affiliate_page?.english_data?.section2?.features2?.text1);
         setValue(
            'features2description1En',
            pagesData?.affiliate_page?.english_data?.section2?.features2?.description1
         );
         setValue('features2text2En', pagesData?.affiliate_page?.english_data?.section2?.features2?.text2);
         setValue(
            'features2description2En',
            pagesData?.affiliate_page?.english_data?.section2?.features2?.description2
         );
         setValue('features3TitleEn', pagesData?.affiliate_page?.english_data?.section2?.features3?.title);
         setValue('features3text1En', pagesData?.affiliate_page?.english_data?.section2?.features3?.text1);
         setValue(
            'features3description1En',
            pagesData?.affiliate_page?.english_data?.section2?.features3?.description1
         );
         setValue('features3text2En', pagesData?.affiliate_page?.english_data?.section2?.features3?.text2);
         setValue(
            'features3description2En',
            pagesData?.affiliate_page?.english_data?.section2?.features3?.description2
         );
         setValue('features3text3En', pagesData?.affiliate_page?.english_data?.section2?.features3?.text3);
         setValue(
            'features3description3En',
            pagesData?.affiliate_page?.english_data?.section2?.features3?.description3
         );
         setValue('features3text4En', pagesData?.affiliate_page?.english_data?.section2?.features3?.text4);
         setValue(
            'features3description4En',
            pagesData?.affiliate_page?.english_data?.section2?.features3?.description4
         );
         setValue('features3text5En', pagesData?.affiliate_page?.english_data?.section2?.features3?.text5);
         setValue(
            'features3description5En',
            pagesData?.affiliate_page?.english_data?.section2?.features3?.description5
         );
         setValue('features4TitleEn', pagesData?.affiliate_page?.english_data?.section2?.features4?.title);
         setValue('features4text1En', pagesData?.affiliate_page?.english_data?.section2?.features4?.text1);
         setValue(
            'features4description1En',
            pagesData?.affiliate_page?.english_data?.section2?.features4?.description1
         );
         setValue('features4text2En', pagesData?.affiliate_page?.english_data?.section2?.features4?.text2);
         setValue(
            'features4description2En',
            pagesData?.affiliate_page?.english_data?.section2?.features4?.description2
         );
         setValue('features5TitleEn', pagesData?.affiliate_page?.english_data?.section2?.features5?.title);
         setValue('features5text1En', pagesData?.affiliate_page?.english_data?.section2?.features5?.text1);
         setValue(
            'features5description1En',
            pagesData?.affiliate_page?.english_data?.section2?.features5?.description1
         );
         setValue('features5text2En', pagesData?.affiliate_page?.english_data?.section2?.features5?.text2);
         setValue(
            'features5description2En',
            pagesData?.affiliate_page?.english_data?.section2?.features5?.description2
         );
         setValue('features5text3En', pagesData?.affiliate_page?.english_data?.section2?.features5?.text3);
         setValue(
            'features5description3En',
            pagesData?.affiliate_page?.english_data?.section2?.features5?.description3
         );

         setValue('features1TitleEs', pagesData?.affiliate_page?.spanish_data?.section2?.features1?.title);
         setValue('features1text1Es', pagesData?.affiliate_page?.spanish_data?.section2?.features1?.text1);
         setValue(
            'features1description1Es',
            pagesData?.affiliate_page?.spanish_data?.section2?.features1?.description1
         );
         setValue('features1text2Es', pagesData?.affiliate_page?.spanish_data?.section2?.features1?.text2);
         setValue(
            'features1description2Es',
            pagesData?.affiliate_page?.spanish_data?.section2?.features1?.description2
         );
         setValue('features1text3Es', pagesData?.affiliate_page?.spanish_data?.section2?.features1?.text3);
         setValue(
            'features1description3Es',
            pagesData?.affiliate_page?.spanish_data?.section2?.features1?.description3
         );
         setValue('features1text4Es', pagesData?.affiliate_page?.spanish_data?.section2?.features1?.text4);
         setValue(
            'features1description4Es',
            pagesData?.affiliate_page?.spanish_data?.section2?.features1?.description4
         );
         setValue('features1text5Es', pagesData?.affiliate_page?.spanish_data?.section2?.features1?.text5);
         setValue(
            'features1description5Es',
            pagesData?.affiliate_page?.spanish_data?.section2?.features1?.description5
         );
         setValue('features2TitleEs', pagesData?.affiliate_page?.spanish_data?.section2?.features2?.title);
         setValue('features2text1Es', pagesData?.affiliate_page?.spanish_data?.section2?.features2?.text1);
         setValue(
            'features2description1Es',
            pagesData?.affiliate_page?.spanish_data?.section2?.features2?.description1
         );
         setValue('features2text2Es', pagesData?.affiliate_page?.spanish_data?.section2?.features2?.text2);
         setValue(
            'features2description2Es',
            pagesData?.affiliate_page?.spanish_data?.section2?.features2?.description2
         );
         setValue('features3TitleEs', pagesData?.affiliate_page?.spanish_data?.section2?.features3?.title);
         setValue('features3text1Es', pagesData?.affiliate_page?.spanish_data?.section2?.features3?.text1);
         setValue(
            'features3description1Es',
            pagesData?.affiliate_page?.spanish_data?.section2?.features3?.description1
         );
         setValue('features3text2Es', pagesData?.affiliate_page?.spanish_data?.section2?.features3?.text2);
         setValue(
            'features3description2Es',
            pagesData?.affiliate_page?.spanish_data?.section2?.features3?.description2
         );
         setValue('features3text3Es', pagesData?.affiliate_page?.spanish_data?.section2?.features3?.text3);
         setValue(
            'features3description3Es',
            pagesData?.affiliate_page?.spanish_data?.section2?.features3?.description3
         );
         setValue('features3text4Es', pagesData?.affiliate_page?.spanish_data?.section2?.features3?.text4);
         setValue(
            'features3description4Es',
            pagesData?.affiliate_page?.spanish_data?.section2?.features3?.description4
         );
         setValue('features3text5Es', pagesData?.affiliate_page?.spanish_data?.section2?.features3?.text5);
         setValue(
            'features3description5Es',
            pagesData?.affiliate_page?.spanish_data?.section2?.features3?.description5
         );
         setValue('features4TitleEs', pagesData?.affiliate_page?.spanish_data?.section2?.features4?.title);
         setValue('features4text1Es', pagesData?.affiliate_page?.spanish_data?.section2?.features4?.text1);
         setValue(
            'features4description1Es',
            pagesData?.affiliate_page?.spanish_data?.section2?.features4?.description1
         );
         setValue('features4text2Es', pagesData?.affiliate_page?.spanish_data?.section2?.features4?.text2);
         setValue(
            'features4description2Es',
            pagesData?.affiliate_page?.spanish_data?.section2?.features4?.description2
         );
         setValue('features5TitleEs', pagesData?.affiliate_page?.spanish_data?.section2?.features5?.title);
         setValue('features5text1Es', pagesData?.affiliate_page?.spanish_data?.section2?.features5?.text1);
         setValue(
            'features5description1Es',
            pagesData?.affiliate_page?.spanish_data?.section2?.features5?.description1
         );
         setValue('features5text2Es', pagesData?.affiliate_page?.spanish_data?.section2?.features5?.text2);
         setValue(
            'features5description2Es',
            pagesData?.affiliate_page?.spanish_data?.section2?.features5?.description2
         );
         setValue('features5text3Es', pagesData?.affiliate_page?.spanish_data?.section2?.features5?.text3);
         setValue(
            'features5description3Es',
            pagesData?.affiliate_page?.spanish_data?.section2?.features5?.description3
         );

         setValue('features1TitleRu', pagesData?.affiliate_page?.russian_data?.section2?.features1?.title);
         setValue('features1text1Ru', pagesData?.affiliate_page?.russian_data?.section2?.features1?.text1);
         setValue(
            'features1description1Ru',
            pagesData?.affiliate_page?.russian_data?.section2?.features1?.description1
         );
         setValue('features1text2Ru', pagesData?.affiliate_page?.russian_data?.section2?.features1?.text2);
         setValue(
            'features1description2Ru',
            pagesData?.affiliate_page?.russian_data?.section2?.features1?.description2
         );
         setValue('features1text3Ru', pagesData?.affiliate_page?.russian_data?.section2?.features1?.text3);
         setValue(
            'features1description3Ru',
            pagesData?.affiliate_page?.russian_data?.section2?.features1?.description3
         );
         setValue('features1text4Ru', pagesData?.affiliate_page?.russian_data?.section2?.features1?.text4);
         setValue(
            'features1description4Ru',
            pagesData?.affiliate_page?.russian_data?.section2?.features1?.description4
         );
         setValue('features1text5Ru', pagesData?.affiliate_page?.russian_data?.section2?.features1?.text5);
         setValue(
            'features1description5Ru',
            pagesData?.affiliate_page?.russian_data?.section2?.features1?.description5
         );
         setValue('features2TitleRu', pagesData?.affiliate_page?.russian_data?.section2?.features2?.title);
         setValue('features2text1Ru', pagesData?.affiliate_page?.russian_data?.section2?.features2?.text1);
         setValue(
            'features2description1Ru',
            pagesData?.affiliate_page?.russian_data?.section2?.features2?.description1
         );
         setValue('features2text2Ru', pagesData?.affiliate_page?.russian_data?.section2?.features2?.text2);
         setValue(
            'features2description2Ru',
            pagesData?.affiliate_page?.russian_data?.section2?.features2?.description2
         );
         setValue('features3TitleRu', pagesData?.affiliate_page?.russian_data?.section2?.features3?.title);
         setValue('features3text1Ru', pagesData?.affiliate_page?.russian_data?.section2?.features3?.text1);
         setValue(
            'features3description1Ru',
            pagesData?.affiliate_page?.russian_data?.section2?.features3?.description1
         );
         setValue('features3text2Ru', pagesData?.affiliate_page?.russian_data?.section2?.features3?.text2);
         setValue(
            'features3description2Ru',
            pagesData?.affiliate_page?.russian_data?.section2?.features3?.description2
         );
         setValue('features3text3Ru', pagesData?.affiliate_page?.russian_data?.section2?.features3?.text3);
         setValue(
            'features3description3Ru',
            pagesData?.affiliate_page?.russian_data?.section2?.features3?.description3
         );
         setValue('features3text4Ru', pagesData?.affiliate_page?.russian_data?.section2?.features3?.text4);
         setValue(
            'features3description4Ru',
            pagesData?.affiliate_page?.russian_data?.section2?.features3?.description4
         );
         setValue('features3text5Ru', pagesData?.affiliate_page?.russian_data?.section2?.features3?.text5);
         setValue(
            'features3description5Ru',
            pagesData?.affiliate_page?.russian_data?.section2?.features3?.description5
         );
         setValue('features4TitleRu', pagesData?.affiliate_page?.russian_data?.section2?.features4?.title);
         setValue('features4text1Ru', pagesData?.affiliate_page?.russian_data?.section2?.features4?.text1);
         setValue(
            'features4description1Ru',
            pagesData?.affiliate_page?.russian_data?.section2?.features4?.description1
         );
         setValue('features4text2Ru', pagesData?.affiliate_page?.russian_data?.section2?.features4?.text2);
         setValue(
            'features4description2Ru',
            pagesData?.affiliate_page?.russian_data?.section2?.features4?.description2
         );
         setValue('features5TitleRu', pagesData?.affiliate_page?.russian_data?.section2?.features5?.title);
         setValue('features5text1Ru', pagesData?.affiliate_page?.russian_data?.section2?.features5?.text1);
         setValue(
            'features5description1Ru',
            pagesData?.affiliate_page?.russian_data?.section2?.features5?.description1
         );
         setValue('features5text2Ru', pagesData?.affiliate_page?.russian_data?.section2?.features5?.text2);
         setValue(
            'features5description2Ru',
            pagesData?.affiliate_page?.russian_data?.section2?.features5?.description2
         );
         setValue('features5text3Ru', pagesData?.affiliate_page?.russian_data?.section2?.features5?.text3);
         setValue(
            'features5description3Ru',
            pagesData?.affiliate_page?.russian_data?.section2?.features5?.description3
         );
      }
   }, [pagesData]);

   //    console.log(pagesData);

   useEffect(() => {
      setChangeLangLoading(true);
      setTimeout(() => {
         setChangeLangLoading(false);
      }, 100);
   }, [chosenLang]);

   return (
      <div className="mt-6">
         <div className="h-[300px] w-full">
            <Image src={affiliateSection2Pic} alt="sample" className="size-full rounded-2xl object-cover" />
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
                  <AffiliateFeatures
                     label="Features 1"
                     count={5}
                     titleRegister={{ ...register('features1TitleEn') }}
                     featuresTextRegister1={{ ...register('features1text1En') }}
                     featuresDescriptionRegister1={{ ...register('features1description1En') }}
                     featuresTextRegister2={{ ...register('features1text2En') }}
                     featuresDescriptionRegister2={{ ...register('features1description2En') }}
                     featuresTextRegister3={{ ...register('features1text3En') }}
                     featuresDescriptionRegister3={{ ...register('features1description3En') }}
                     featuresTextRegister4={{ ...register('features1text4En') }}
                     featuresDescriptionRegister4={{ ...register('features1description4En') }}
                     featuresTextRegister5={{ ...register('features1text5En') }}
                     featuresDescriptionRegister5={{ ...register('features1description5En') }}
                  />
                  <AffiliateFeatures
                     label="Features 2"
                     count={2}
                     titleRegister={{ ...register('features2TitleEn') }}
                     featuresTextRegister1={{ ...register('features2text1En') }}
                     featuresDescriptionRegister1={{ ...register('features2description1En') }}
                     featuresTextRegister2={{ ...register('features2text2En') }}
                     featuresDescriptionRegister2={{ ...register('features2description2En') }}
                  />
                  <AffiliateFeatures
                     label="Features 3"
                     count={5}
                     titleRegister={{ ...register('features3TitleEn') }}
                     featuresTextRegister1={{ ...register('features3text1En') }}
                     featuresDescriptionRegister1={{ ...register('features3description1En') }}
                     featuresTextRegister2={{ ...register('features3text2En') }}
                     featuresDescriptionRegister2={{ ...register('features3description2En') }}
                     featuresTextRegister3={{ ...register('features3text3En') }}
                     featuresDescriptionRegister3={{ ...register('features3description3En') }}
                     featuresTextRegister4={{ ...register('features3text4En') }}
                     featuresDescriptionRegister4={{ ...register('features3description4En') }}
                     featuresTextRegister5={{ ...register('features3text5En') }}
                     featuresDescriptionRegister5={{ ...register('features3description5En') }}
                  />
                  <AffiliateFeatures
                     label="Features 4"
                     count={2}
                     titleRegister={{ ...register('features4TitleEn') }}
                     featuresTextRegister1={{ ...register('features4text1En') }}
                     featuresDescriptionRegister1={{ ...register('features4description1En') }}
                     featuresTextRegister2={{ ...register('features4text2En') }}
                     featuresDescriptionRegister2={{ ...register('features4description2En') }}
                  />

                  <AffiliateFeatures
                     label="Features 5"
                     count={3}
                     titleRegister={{ ...register('features5TitleEn') }}
                     featuresTextRegister1={{ ...register('features5text1En') }}
                     featuresDescriptionRegister1={{ ...register('features5description1En') }}
                     featuresTextRegister2={{ ...register('features5text2En') }}
                     featuresDescriptionRegister2={{ ...register('features5description2En') }}
                     featuresTextRegister3={{ ...register('features5text3En') }}
                     featuresDescriptionRegister3={{ ...register('features5description3En') }}
                  />
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
                  <AffiliateFeatures
                     label="Features 1"
                     count={5}
                     titleRegister={{ ...register('features1TitleEs') }}
                     featuresTextRegister1={{ ...register('features1text1Es') }}
                     featuresDescriptionRegister1={{ ...register('features1description1Es') }}
                     featuresTextRegister2={{ ...register('features1text2Es') }}
                     featuresDescriptionRegister2={{ ...register('features1description2Es') }}
                     featuresTextRegister3={{ ...register('features1text3Es') }}
                     featuresDescriptionRegister3={{ ...register('features1description3Es') }}
                     featuresTextRegister4={{ ...register('features1text4Es') }}
                     featuresDescriptionRegister4={{ ...register('features1description4Es') }}
                     featuresTextRegister5={{ ...register('features1text5Es') }}
                     featuresDescriptionRegister5={{ ...register('features1description5Es') }}
                  />
                  <AffiliateFeatures
                     label="Features 2"
                     count={2}
                     titleRegister={{ ...register('features2TitleEs') }}
                     featuresTextRegister1={{ ...register('features2text1Es') }}
                     featuresDescriptionRegister1={{ ...register('features2description1Es') }}
                     featuresTextRegister2={{ ...register('features2text2Es') }}
                     featuresDescriptionRegister2={{ ...register('features2description2Es') }}
                  />
                  <AffiliateFeatures
                     label="Features 3"
                     count={5}
                     titleRegister={{ ...register('features3TitleEs') }}
                     featuresTextRegister1={{ ...register('features3text1Es') }}
                     featuresDescriptionRegister1={{ ...register('features3description1Es') }}
                     featuresTextRegister2={{ ...register('features3text2Es') }}
                     featuresDescriptionRegister2={{ ...register('features3description2Es') }}
                     featuresTextRegister3={{ ...register('features3text3Es') }}
                     featuresDescriptionRegister3={{ ...register('features3description3Es') }}
                     featuresTextRegister4={{ ...register('features3text4Es') }}
                     featuresDescriptionRegister4={{ ...register('features3description4Es') }}
                     featuresTextRegister5={{ ...register('features3text5Es') }}
                     featuresDescriptionRegister5={{ ...register('features3description5Es') }}
                  />
                  <AffiliateFeatures
                     label="Features 4"
                     count={2}
                     titleRegister={{ ...register('features4TitleEs') }}
                     featuresTextRegister1={{ ...register('features4text1Es') }}
                     featuresDescriptionRegister1={{ ...register('features4description1Es') }}
                     featuresTextRegister2={{ ...register('features4text2Es') }}
                     featuresDescriptionRegister2={{ ...register('features4description2Es') }}
                  />

                  <AffiliateFeatures
                     label="Features 5"
                     count={3}
                     titleRegister={{ ...register('features5TitleEs') }}
                     featuresTextRegister1={{ ...register('features5text1Es') }}
                     featuresDescriptionRegister1={{ ...register('features5description1Es') }}
                     featuresTextRegister2={{ ...register('features5text2Es') }}
                     featuresDescriptionRegister2={{ ...register('features5description2Es') }}
                     featuresTextRegister3={{ ...register('features5text3Es') }}
                     featuresDescriptionRegister3={{ ...register('features5description3Es') }}
                  />
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
                  <AffiliateFeatures
                     label="Features 1"
                     count={5}
                     titleRegister={{ ...register('features1TitleRu') }}
                     featuresTextRegister1={{ ...register('features1text1Ru') }}
                     featuresDescriptionRegister1={{ ...register('features1description1Ru') }}
                     featuresTextRegister2={{ ...register('features1text2Ru') }}
                     featuresDescriptionRegister2={{ ...register('features1description2Ru') }}
                     featuresTextRegister3={{ ...register('features1text3Ru') }}
                     featuresDescriptionRegister3={{ ...register('features1description3Ru') }}
                     featuresTextRegister4={{ ...register('features1text4Ru') }}
                     featuresDescriptionRegister4={{ ...register('features1description4Ru') }}
                     featuresTextRegister5={{ ...register('features1text5Ru') }}
                     featuresDescriptionRegister5={{ ...register('features1description5Ru') }}
                  />
                  <AffiliateFeatures
                     label="Features 2"
                     count={2}
                     titleRegister={{ ...register('features2TitleRu') }}
                     featuresTextRegister1={{ ...register('features2text1Ru') }}
                     featuresDescriptionRegister1={{ ...register('features2description1Ru') }}
                     featuresTextRegister2={{ ...register('features2text2Ru') }}
                     featuresDescriptionRegister2={{ ...register('features2description2Ru') }}
                  />
                  <AffiliateFeatures
                     label="Features 3"
                     count={5}
                     titleRegister={{ ...register('features3TitleRu') }}
                     featuresTextRegister1={{ ...register('features3text1Ru') }}
                     featuresDescriptionRegister1={{ ...register('features3description1Ru') }}
                     featuresTextRegister2={{ ...register('features3text2Ru') }}
                     featuresDescriptionRegister2={{ ...register('features3description2Ru') }}
                     featuresTextRegister3={{ ...register('features3text3Ru') }}
                     featuresDescriptionRegister3={{ ...register('features3description3Ru') }}
                     featuresTextRegister4={{ ...register('features3text4Ru') }}
                     featuresDescriptionRegister4={{ ...register('features3description4Ru') }}
                     featuresTextRegister5={{ ...register('features3text5Ru') }}
                     featuresDescriptionRegister5={{ ...register('features3description5Ru') }}
                  />
                  <AffiliateFeatures
                     label="Features 4"
                     count={2}
                     titleRegister={{ ...register('features4TitleRu') }}
                     featuresTextRegister1={{ ...register('features4text1Ru') }}
                     featuresDescriptionRegister1={{ ...register('features4description1Ru') }}
                     featuresTextRegister2={{ ...register('features4text2Ru') }}
                     featuresDescriptionRegister2={{ ...register('features4description2Ru') }}
                  />

                  <AffiliateFeatures
                     label="Features 5"
                     count={3}
                     titleRegister={{ ...register('features5TitleRu') }}
                     featuresTextRegister1={{ ...register('features5text1Ru') }}
                     featuresDescriptionRegister1={{ ...register('features5description1Ru') }}
                     featuresTextRegister2={{ ...register('features5text2Ru') }}
                     featuresDescriptionRegister2={{ ...register('features5description2Ru') }}
                     featuresTextRegister3={{ ...register('features5text3Ru') }}
                     featuresDescriptionRegister3={{ ...register('features5description3Ru') }}
                  />
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

export default AffiliateSection2;

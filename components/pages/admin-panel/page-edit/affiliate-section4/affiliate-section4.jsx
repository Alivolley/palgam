import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Image from 'next/image';

// MUI
import { CircularProgress, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import { BiEditAlt } from 'react-icons/bi';

// Assets
import affiliateSection4Pic from '@/assets/images/adminPanel/affiliate-section4Pic.png';

// Components
import LanguageBar from '../language-bar/language-bar';
import SectionBlock from '../section-block/section-block';

// Apis
import useGetPagesData from '@/apis/adminPanel/page-edit/useGetPagesData';
import useAddEditPageData from '@/apis/adminPanel/page-edit/useAddEditPageData';
import AffiliateLines from '../affiliate-lines/affiliate-lines';

const InputStyle = {
   '& .MuiOutlinedInput-root': {
      backgroundColor: '#ffffff0d',
      height: '64px',
   },
};

function AffiliateSection4() {
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

         block1TitleEs: '',
         block1DescriptionEs: '',
         block2TitleEs: '',
         block2DescriptionEs: '',

         block1TitleRu: '',
         block1DescriptionRu: '',
         block2TitleRu: '',
         block2DescriptionRu: '',

         block3TitleEn: '',
         block3TitleEs: '',
         block3TitleRu: '',

         line1En: '',
         line1Es: '',
         line1Ru: '',
         line2En: '',
         line2Es: '',
         line2Ru: '',
         line3En: '',
         line3Es: '',
         line3Ru: '',
         line4En: '',
         line4Es: '',
         line4Ru: '',
         line5En: '',
         line5Es: '',
         line5Ru: '',
         line6En: '',
         line6Es: '',
         line6Ru: '',
         line7En: '',
         line7Es: '',
         line7Ru: '',
         line8En: '',
         line8Es: '',
         line8Ru: '',
         line9En: '',
         line9Es: '',
         line9Ru: '',
         line10En: '',
         line10Es: '',
         line10Ru: '',
      },
   });

   const formSubmit = data => {
      const newData = {
         page_name: 'affiliate_page',
         key_name: 'section4',
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
               line1: data?.line1En,
               line2: data?.line2En,
               line3: data?.line3En,
               line4: data?.line4En,
               line5: data?.line5En,
               line6: data?.line6En,
               line7: data?.line7En,
               line8: data?.line8En,
               line9: data?.line9En,
               line10: data?.line10En,
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
               line1: data?.line1Es,
               line2: data?.line2Es,
               line3: data?.line3Es,
               line4: data?.line4Es,
               line5: data?.line5Es,
               line6: data?.line6Es,
               line7: data?.line7Es,
               line8: data?.line8Es,
               line9: data?.line9Es,
               line10: data?.line10Es,
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
               line1: data?.line1Ru,
               line2: data?.line2Ru,
               line3: data?.line3Ru,
               line4: data?.line4Ru,
               line5: data?.line5Ru,
               line6: data?.line6Ru,
               line7: data?.line7Ru,
               line8: data?.line8Ru,
               line9: data?.line9Ru,
               line10: data?.line10Ru,
            },
         },
      };
      addEditTrigger(newData, {
         onSuccess: () => pagesDataMutate(),
      });
   };

   useEffect(() => {
      if (pagesData) {
         setValue('titleEn', pagesData?.affiliate_page?.english_data?.section4?.title);
         setValue('titleEs', pagesData?.affiliate_page?.spanish_data?.section4?.title);
         setValue('titleRu', pagesData?.affiliate_page?.russian_data?.section4?.title);
         setValue('descriptionEn', pagesData?.affiliate_page?.english_data?.section4?.description);
         setValue('descriptionEs', pagesData?.affiliate_page?.spanish_data?.section4?.description);
         setValue('descriptionRu', pagesData?.affiliate_page?.russian_data?.section4?.description);

         setValue('block1TitleEn', pagesData?.affiliate_page?.english_data?.section4?.block1?.title);
         setValue('block2TitleEn', pagesData?.affiliate_page?.english_data?.section4?.block2?.title);
         setValue('block3TitleEn', pagesData?.affiliate_page?.english_data?.section4?.block3?.title);

         setValue('block1TitleEs', pagesData?.affiliate_page?.spanish_data?.section4?.block1?.title);
         setValue('block2TitleEs', pagesData?.affiliate_page?.spanish_data?.section4?.block2?.title);
         setValue('block3TitleEs', pagesData?.affiliate_page?.spanish_data?.section4?.block3?.title);

         setValue('block1TitleRu', pagesData?.affiliate_page?.russian_data?.section4?.block1?.title);
         setValue('block2TitleRu', pagesData?.affiliate_page?.russian_data?.section4?.block2?.title);
         setValue('block3TitleRu', pagesData?.affiliate_page?.russian_data?.section4?.block3?.title);

         setValue('block1DescriptionEn', pagesData?.affiliate_page?.english_data?.section4?.block1?.description);
         setValue('block2DescriptionEn', pagesData?.affiliate_page?.english_data?.section4?.block2?.description);

         setValue('block1DescriptionEs', pagesData?.affiliate_page?.spanish_data?.section4?.block1?.description);
         setValue('block2DescriptionEs', pagesData?.affiliate_page?.spanish_data?.section4?.block2?.description);

         setValue('block1DescriptionRu', pagesData?.affiliate_page?.russian_data?.section4?.block1?.description);
         setValue('block2DescriptionRu', pagesData?.affiliate_page?.russian_data?.section4?.block2?.description);

         setValue('line1En', pagesData?.affiliate_page?.english_data?.section4?.block3?.line1);
         setValue('line2En', pagesData?.affiliate_page?.english_data?.section4?.block3?.line2);
         setValue('line3En', pagesData?.affiliate_page?.english_data?.section4?.block3?.line3);
         setValue('line4En', pagesData?.affiliate_page?.english_data?.section4?.block3?.line4);
         setValue('line5En', pagesData?.affiliate_page?.english_data?.section4?.block3?.line5);
         setValue('line6En', pagesData?.affiliate_page?.english_data?.section4?.block3?.line6);
         setValue('line7En', pagesData?.affiliate_page?.english_data?.section4?.block3?.line7);
         setValue('line8En', pagesData?.affiliate_page?.english_data?.section4?.block3?.line8);
         setValue('line9En', pagesData?.affiliate_page?.english_data?.section4?.block3?.line9);
         setValue('line10En', pagesData?.affiliate_page?.english_data?.section4?.block3?.line10);

         setValue('line1Es', pagesData?.affiliate_page?.spanish_data?.section4?.block3?.line1);
         setValue('line2Es', pagesData?.affiliate_page?.spanish_data?.section4?.block3?.line2);
         setValue('line3Es', pagesData?.affiliate_page?.spanish_data?.section4?.block3?.line3);
         setValue('line4Es', pagesData?.affiliate_page?.spanish_data?.section4?.block3?.line4);
         setValue('line5Es', pagesData?.affiliate_page?.spanish_data?.section4?.block3?.line5);
         setValue('line6Es', pagesData?.affiliate_page?.spanish_data?.section4?.block3?.line6);
         setValue('line7Es', pagesData?.affiliate_page?.spanish_data?.section4?.block3?.line7);
         setValue('line8Es', pagesData?.affiliate_page?.spanish_data?.section4?.block3?.line8);
         setValue('line9Es', pagesData?.affiliate_page?.spanish_data?.section4?.block3?.line9);
         setValue('line10Es', pagesData?.affiliate_page?.spanish_data?.section4?.block3?.line10);

         setValue('line1Ru', pagesData?.affiliate_page?.russian_data?.section4?.block3?.line1);
         setValue('line2Ru', pagesData?.affiliate_page?.russian_data?.section4?.block3?.line2);
         setValue('line3Ru', pagesData?.affiliate_page?.russian_data?.section4?.block3?.line3);
         setValue('line4Ru', pagesData?.affiliate_page?.russian_data?.section4?.block3?.line4);
         setValue('line5Ru', pagesData?.affiliate_page?.russian_data?.section4?.block3?.line5);
         setValue('line6Ru', pagesData?.affiliate_page?.russian_data?.section4?.block3?.line6);
         setValue('line7Ru', pagesData?.affiliate_page?.russian_data?.section4?.block3?.line7);
         setValue('line8Ru', pagesData?.affiliate_page?.russian_data?.section4?.block3?.line8);
         setValue('line9Ru', pagesData?.affiliate_page?.russian_data?.section4?.block3?.line9);
         setValue('line10Ru', pagesData?.affiliate_page?.russian_data?.section4?.block3?.line10);
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
            <Image src={affiliateSection4Pic} alt="sample" className="size-full rounded-2xl object-cover" />
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
                     <AffiliateLines
                        titleRegister={{ ...register('block3TitleEn') }}
                        line1Register={{ ...register('line1En') }}
                        line2Register={{ ...register('line2En') }}
                        line3Register={{ ...register('line3En') }}
                        line4Register={{ ...register('line4En') }}
                        line5Register={{ ...register('line5En') }}
                        line6Register={{ ...register('line6En') }}
                        line7Register={{ ...register('line7En') }}
                        line8Register={{ ...register('line8En') }}
                        line9Register={{ ...register('line9En') }}
                        line10Register={{ ...register('line10En') }}
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

                     <AffiliateLines
                        titleRegister={{ ...register('block3TitleEs') }}
                        line1Register={{ ...register('line1Es') }}
                        line2Register={{ ...register('line2Es') }}
                        line3Register={{ ...register('line3Es') }}
                        line4Register={{ ...register('line4Es') }}
                        line5Register={{ ...register('line5Es') }}
                        line6Register={{ ...register('line6Es') }}
                        line7Register={{ ...register('line7Es') }}
                        line8Register={{ ...register('line8Es') }}
                        line9Register={{ ...register('line9Es') }}
                        line10Register={{ ...register('line10Es') }}
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
                     <AffiliateLines
                        titleRegister={{ ...register('block3TitleRu') }}
                        line1Register={{ ...register('line1Ru') }}
                        line2Register={{ ...register('line2Ru') }}
                        line3Register={{ ...register('line3Ru') }}
                        line4Register={{ ...register('line4Ru') }}
                        line5Register={{ ...register('line5Ru') }}
                        line6Register={{ ...register('line6Ru') }}
                        line7Register={{ ...register('line7Ru') }}
                        line8Register={{ ...register('line8Ru') }}
                        line9Register={{ ...register('line9Ru') }}
                        line10Register={{ ...register('line10Ru') }}
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

export default AffiliateSection4;

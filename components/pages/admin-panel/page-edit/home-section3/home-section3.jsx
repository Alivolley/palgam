import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Image from 'next/image';

// MUI
import { CircularProgress, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import { BiEditAlt } from 'react-icons/bi';

// Assets
import homeSection3Pic from '@/assets/images/adminPanel/home-section3.png';

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

function HomeSection3() {
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
         block6TitleEn: '',
         block6DescriptionEn: '',
         block7TitleEn: '',
         block7DescriptionEn: '',
         block8TitleEn: '',
         block8DescriptionEn: '',
         block9TitleEn: '',
         block9DescriptionEn: '',
         block10TitleEn: '',
         block10DescriptionEn: '',

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
         block7TitleEs: '',
         block7DescriptionEs: '',
         block8TitleEs: '',
         block8DescriptionEs: '',
         block9TitleEs: '',
         block9DescriptionEs: '',
         block10TitleEs: '',
         block10DescriptionEs: '',

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
         block7TitleRu: '',
         block7DescriptionRu: '',
         block8TitleRu: '',
         block8DescriptionRu: '',
         block9TitleRu: '',
         block9DescriptionRu: '',
         block10TitleRu: '',
         block10DescriptionRu: '',
      },
   });

   const formSubmit = data => {
      const newData = {
         page_name: 'home_page',
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
            block6: {
               title: data?.block6TitleEn,
               description: data?.block6DescriptionEn,
            },
            block7: {
               title: data?.block7TitleEn,
               description: data?.block7DescriptionEn,
            },
            block8: {
               title: data?.block8TitleEn,
               description: data?.block8DescriptionEn,
            },
            block9: {
               title: data?.block9TitleEn,
               description: data?.block9DescriptionEn,
            },
            block10: {
               title: data?.block10TitleEn,
               description: data?.block10DescriptionEn,
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
            block6: {
               title: data?.block6TitleEs,
               description: data?.block6DescriptionEs,
            },
            block7: {
               title: data?.block7TitleEs,
               description: data?.block7DescriptionEs,
            },
            block8: {
               title: data?.block8TitleEs,
               description: data?.block8DescriptionEs,
            },
            block9: {
               title: data?.block9TitleEs,
               description: data?.block9DescriptionEs,
            },
            block10: {
               title: data?.block10TitleEs,
               description: data?.block10DescriptionEs,
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
            block6: {
               title: data?.block6TitleRu,
               description: data?.block6DescriptionRu,
            },
            block7: {
               title: data?.block7TitleRu,
               description: data?.block7DescriptionRu,
            },
            block8: {
               title: data?.block8TitleRu,
               description: data?.block8DescriptionRu,
            },
            block9: {
               title: data?.block9TitleRu,
               description: data?.block9DescriptionRu,
            },
            block10: {
               title: data?.block10TitleRu,
               description: data?.block10DescriptionRu,
            },
         },
      };
      addEditTrigger(newData, {
         onSuccess: () => pagesDataMutate(),
      });
   };

   useEffect(() => {
      if (pagesData) {
         setValue('titleEn', pagesData?.home_page?.english_data?.section3?.title);
         setValue('titleEs', pagesData?.home_page?.spanish_data?.section3?.title);
         setValue('titleRu', pagesData?.home_page?.russian_data?.section3?.title);
         setValue('descriptionEn', pagesData?.home_page?.english_data?.section3?.description);
         setValue('descriptionEs', pagesData?.home_page?.spanish_data?.section3?.description);
         setValue('descriptionRu', pagesData?.home_page?.russian_data?.section3?.description);

         setValue('block1TitleEn', pagesData?.home_page?.english_data?.section3?.block1?.title);
         setValue('block2TitleEn', pagesData?.home_page?.english_data?.section3?.block2?.title);
         setValue('block3TitleEn', pagesData?.home_page?.english_data?.section3?.block3?.title);
         setValue('block4TitleEn', pagesData?.home_page?.english_data?.section3?.block4?.title);
         setValue('block5TitleEn', pagesData?.home_page?.english_data?.section3?.block5?.title);
         setValue('block6TitleEn', pagesData?.home_page?.english_data?.section3?.block6?.title);
         setValue('block7TitleEn', pagesData?.home_page?.english_data?.section3?.block7?.title);
         setValue('block8TitleEn', pagesData?.home_page?.english_data?.section3?.block8?.title);
         setValue('block9TitleEn', pagesData?.home_page?.english_data?.section3?.block9?.title);
         setValue('block10TitleEn', pagesData?.home_page?.english_data?.section3?.block10?.title);

         setValue('block1TitleEs', pagesData?.home_page?.spanish_data?.section3?.block1?.title);
         setValue('block2TitleEs', pagesData?.home_page?.spanish_data?.section3?.block2?.title);
         setValue('block3TitleEs', pagesData?.home_page?.spanish_data?.section3?.block3?.title);
         setValue('block4TitleEs', pagesData?.home_page?.spanish_data?.section3?.block4?.title);
         setValue('block5TitleEs', pagesData?.home_page?.spanish_data?.section3?.block5?.title);
         setValue('block6TitleEs', pagesData?.home_page?.spanish_data?.section3?.block6?.title);
         setValue('block7TitleEs', pagesData?.home_page?.spanish_data?.section3?.block7?.title);
         setValue('block8TitleEs', pagesData?.home_page?.spanish_data?.section3?.block8?.title);
         setValue('block9TitleEs', pagesData?.home_page?.spanish_data?.section3?.block9?.title);
         setValue('block10TitleEs', pagesData?.home_page?.spanish_data?.section3?.block10?.title);

         setValue('block1TitleRu', pagesData?.home_page?.russian_data?.section3?.block1?.title);
         setValue('block2TitleRu', pagesData?.home_page?.russian_data?.section3?.block2?.title);
         setValue('block3TitleRu', pagesData?.home_page?.russian_data?.section3?.block3?.title);
         setValue('block4TitleRu', pagesData?.home_page?.russian_data?.section3?.block4?.title);
         setValue('block5TitleRu', pagesData?.home_page?.russian_data?.section3?.block5?.title);
         setValue('block6TitleRu', pagesData?.home_page?.russian_data?.section3?.block6?.title);
         setValue('block7TitleRu', pagesData?.home_page?.russian_data?.section3?.block7?.title);
         setValue('block8TitleRu', pagesData?.home_page?.russian_data?.section3?.block8?.title);
         setValue('block9TitleRu', pagesData?.home_page?.russian_data?.section3?.block9?.title);
         setValue('block10TitleRu', pagesData?.home_page?.russian_data?.section3?.block10?.title);

         setValue('block1DescriptionEn', pagesData?.home_page?.english_data?.section3?.block1?.description);
         setValue('block2DescriptionEn', pagesData?.home_page?.english_data?.section3?.block2?.description);
         setValue('block3DescriptionEn', pagesData?.home_page?.english_data?.section3?.block3?.description);
         setValue('block4DescriptionEn', pagesData?.home_page?.english_data?.section3?.block4?.description);
         setValue('block5DescriptionEn', pagesData?.home_page?.english_data?.section3?.block5?.description);
         setValue('block6DescriptionEn', pagesData?.home_page?.english_data?.section3?.block6?.description);
         setValue('block7DescriptionEn', pagesData?.home_page?.english_data?.section3?.block7?.description);
         setValue('block8DescriptionEn', pagesData?.home_page?.english_data?.section3?.block8?.description);
         setValue('block9DescriptionEn', pagesData?.home_page?.english_data?.section3?.block9?.description);
         setValue('block10DescriptionEn', pagesData?.home_page?.english_data?.section3?.block10?.description);

         setValue('block1DescriptionEs', pagesData?.home_page?.spanish_data?.section3?.block1?.description);
         setValue('block2DescriptionEs', pagesData?.home_page?.spanish_data?.section3?.block2?.description);
         setValue('block3DescriptionEs', pagesData?.home_page?.spanish_data?.section3?.block3?.description);
         setValue('block4DescriptionEs', pagesData?.home_page?.spanish_data?.section3?.block4?.description);
         setValue('block5DescriptionEs', pagesData?.home_page?.spanish_data?.section3?.block5?.description);
         setValue('block6DescriptionEs', pagesData?.home_page?.spanish_data?.section3?.block6?.description);
         setValue('block7DescriptionEs', pagesData?.home_page?.spanish_data?.section3?.block7?.description);
         setValue('block8DescriptionEs', pagesData?.home_page?.spanish_data?.section3?.block8?.description);
         setValue('block9DescriptionEs', pagesData?.home_page?.spanish_data?.section3?.block9?.description);
         setValue('block10DescriptionEs', pagesData?.home_page?.spanish_data?.section3?.block10?.description);

         setValue('block1DescriptionRu', pagesData?.home_page?.russian_data?.section3?.block1?.description);
         setValue('block2DescriptionRu', pagesData?.home_page?.russian_data?.section3?.block2?.description);
         setValue('block3DescriptionRu', pagesData?.home_page?.russian_data?.section3?.block3?.description);
         setValue('block4DescriptionRu', pagesData?.home_page?.russian_data?.section3?.block4?.description);
         setValue('block5DescriptionRu', pagesData?.home_page?.russian_data?.section3?.block5?.description);
         setValue('block6DescriptionRu', pagesData?.home_page?.russian_data?.section3?.block6?.description);
         setValue('block7DescriptionRu', pagesData?.home_page?.russian_data?.section3?.block7?.description);
         setValue('block8DescriptionRu', pagesData?.home_page?.russian_data?.section3?.block8?.description);
         setValue('block9DescriptionRu', pagesData?.home_page?.russian_data?.section3?.block9?.description);
         setValue('block10DescriptionRu', pagesData?.home_page?.russian_data?.section3?.block10?.description);
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
            <Image src={homeSection3Pic} alt="sample" className="size-full rounded-2xl object-cover" />
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
                     <SectionBlock
                        mainTitle="Block 6"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block6TitleEn') }}
                        secondInputRegister={{ ...register('block6DescriptionEn') }}
                     />
                     <SectionBlock
                        mainTitle="Block 7"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block7TitleEn') }}
                        secondInputRegister={{ ...register('block7DescriptionEn') }}
                     />
                     <SectionBlock
                        mainTitle="Block 8"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block8TitleEn') }}
                        secondInputRegister={{ ...register('block8DescriptionEn') }}
                     />
                     <SectionBlock
                        mainTitle="Block 9"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block9TitleEn') }}
                        secondInputRegister={{ ...register('block9DescriptionEn') }}
                     />
                     <SectionBlock
                        mainTitle="Block 10"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block10TitleEn') }}
                        secondInputRegister={{ ...register('block10DescriptionEn') }}
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
                     <SectionBlock
                        mainTitle="Block 6"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block6TitleEs') }}
                        secondInputRegister={{ ...register('block6DescriptionEs') }}
                     />
                     <SectionBlock
                        mainTitle="Block 7"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block7TitleEs') }}
                        secondInputRegister={{ ...register('block7DescriptionEs') }}
                     />
                     <SectionBlock
                        mainTitle="Block 8"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block8TitleEs') }}
                        secondInputRegister={{ ...register('block8DescriptionEs') }}
                     />
                     <SectionBlock
                        mainTitle="Block 9"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block9TitleEs') }}
                        secondInputRegister={{ ...register('block9DescriptionEs') }}
                     />
                     <SectionBlock
                        mainTitle="Block 10"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block10TitleEs') }}
                        secondInputRegister={{ ...register('block10DescriptionEs') }}
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
                     <SectionBlock
                        mainTitle="Block 6"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block6TitleRu') }}
                        secondInputRegister={{ ...register('block6DescriptionRu') }}
                     />
                     <SectionBlock
                        mainTitle="Block 7"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block7TitleRu') }}
                        secondInputRegister={{ ...register('block7DescriptionRu') }}
                     />
                     <SectionBlock
                        mainTitle="Block 8"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block8TitleRu') }}
                        secondInputRegister={{ ...register('block8DescriptionRu') }}
                     />
                     <SectionBlock
                        mainTitle="Block 9"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block9TitleRu') }}
                        secondInputRegister={{ ...register('block9DescriptionRu') }}
                     />
                     <SectionBlock
                        mainTitle="Block 10"
                        firstInputTitle="Title"
                        secondInputTitle="Description"
                        firstInputRegister={{ ...register('block10TitleRu') }}
                        secondInputRegister={{ ...register('block10DescriptionRu') }}
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

export default HomeSection3;

import { Controller, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// MUI
import { CircularProgress } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Assets
import supportPrivacyPolicyPic from '@/assets/images/adminPanel/support-privacyPolicyPic.png';

// Components
import LanguageBar from '../language-bar/language-bar';

// Apis
import useGetPagesData from '@/apis/adminPanel/page-edit/useGetPagesData';
import useAddEditPageData from '@/apis/adminPanel/page-edit/useAddEditPageData';

const CkEditorEn = dynamic(() => import('@/components/templates/ckEditor/ckEditor'), { ssr: false });
const CkEditorEs = dynamic(() => import('@/components/templates/ckEditor/ckEditor'), { ssr: false });
const CkEditorRu = dynamic(() => import('@/components/templates/ckEditor/ckEditor'), { ssr: false });

function SupportPrivacyPolicy() {
   const [chosenLang, setChosenLang] = useState('en');
   const [changeLangLoading, setChangeLangLoading] = useState(false);

   const { data: pagesData, isLoading: pagesDataIsLoading, mutate: pagesDataMutate } = useGetPagesData();
   const { trigger: addEditTrigger, isMutating: addEditIsMutating } = useAddEditPageData();

   const { handleSubmit, setValue, control } = useForm({
      defaultValues: {
         descriptionEn: '',
         descriptionEs: '',
         descriptionRu: '',
      },
   });

   const formSubmit = data => {
      const newData = {
         page_name: 'suppurt_pages',
         key_name: 'privacyPolicy',
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
         setValue('descriptionEn', pagesData?.suppurt_pages?.english_data?.privacyPolicy?.description);
         setValue('descriptionEs', pagesData?.suppurt_pages?.spanish_data?.privacyPolicy?.description);
         setValue('descriptionRu', pagesData?.suppurt_pages?.russian_data?.privacyPolicy?.description);
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
            <Image src={supportPrivacyPolicyPic} alt="sample" className="size-full rounded-2xl object-cover" />
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
                  <Controller
                     control={control}
                     name="descriptionEn"
                     render={({ field: { onChange, value } }) => (
                        <CkEditorEn initialData={value || ''} onChange={onChange} />
                     )}
                  />
               </div>
            ) : chosenLang === 'es' ? (
               <div className="space-y-2">
                  <p className="font-poppinsLight text-xl leading-6">Description</p>
                  <Controller
                     control={control}
                     name="descriptionEs"
                     render={({ field: { onChange, value } }) => (
                        <CkEditorEs initialData={value || ''} onChange={onChange} />
                     )}
                  />
               </div>
            ) : chosenLang === 'ru' ? (
               <div className="space-y-2">
                  <p className="font-poppinsLight text-xl leading-6">Description</p>
                  <Controller
                     control={control}
                     name="descriptionRu"
                     render={({ field: { onChange, value } }) => (
                        <CkEditorRu initialData={value || ''} onChange={onChange} />
                     )}
                  />
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

export default SupportPrivacyPolicy;

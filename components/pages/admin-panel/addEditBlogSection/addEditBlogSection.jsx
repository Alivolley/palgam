import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// MUI
import { Button, CircularProgress, Divider, TextField } from '@mui/material';
import styled from '@emotion/styled';

// Icons
import { GoArrowLeft } from 'react-icons/go';
import { ImFilePicture } from 'react-icons/im';

// Assets
import usFlag from '@/assets/icons/usFlag.svg';
import ruFlag from '@/assets/icons/ruFlag.svg';
import esFlag from '@/assets/icons/esFlag.svg';

// Components
import CategoryModal from '../categoryModal/categoryModal';

// Apis
import useGetBlogDetail from '@/apis/adminPanel/blog/useGetBlogDetail';

const CkEditorEn = dynamic(() => import('@/components/templates/ckEditor/ckEditor'), { ssr: false });
const CkEditorEs = dynamic(() => import('@/components/templates/ckEditor/ckEditor'), { ssr: false });
const CkEditorRu = dynamic(() => import('@/components/templates/ckEditor/ckEditor'), { ssr: false });

const langButtonSx = {
   flex: '1 1 0%',
   fontFamily: 'poppinsRegular',
   color: 'white',
   borderRadius: '12px',
   height: '56px',
   gap: '8px',
   ':hover': { backgroundColor: '#ffffff0d' },
};

const VisuallyHiddenInput = styled('input')({
   clip: 'rect(0 0 0 0)',
   clipPath: 'inset(50%)',
   height: 1,
   overflow: 'hidden',
   position: 'absolute',
   bottom: 0,
   left: 0,
   whiteSpace: 'nowrap',
   width: 1,
});

function AddEditBlogSection({
   setIsAddEditBlogSection,
   blogsDataMutate,
   chosenBlogForEdit,
   isEditBlog,
   setChosenBlogForEdit,
}) {
   const [chosenLang, setChosenLang] = useState('en');
   const [coverPic, setCoverPic] = useState();
   const [coverPicUrl, setCoverPicUrl] = useState();
   const [bannerPic, setBannerPic] = useState();
   const [bannerPicUrl, setBannerPicUrl] = useState();
   const [showCategoryModal, setShowCategoryModal] = useState(false);
   const [inputValues, setInputValues] = useState({
      en: { title: '', summary: '', text: '' },
      es: { title: '', summary: '', text: '' },
      ru: { title: '', summary: '', text: '' },
   });

   const { data: blogDetailData, isLoading: blogDetailIsLoading } = useGetBlogDetail(chosenBlogForEdit?.id);

   useEffect(() => {
      if (isEditBlog && chosenBlogForEdit) {
         setInputValues({
            en: {
               title: blogDetailData?.english_title,
               summary: blogDetailData?.english_summary,
               text: blogDetailData?.english_text,
            },
            es: {
               title: blogDetailData?.spanish_title,
               summary: blogDetailData?.spanish_summary,
               text: blogDetailData?.spanish_text,
            },
            ru: {
               title: blogDetailData?.russian_title,
               summary: blogDetailData?.russian_summary,
               text: blogDetailData?.russian_text,
            },
         });
         setCoverPicUrl(blogDetailData?.cover);
         setBannerPicUrl(blogDetailData?.banner);
      }
   }, [chosenBlogForEdit?.id, blogDetailData]);

   const handleInputChange = (lang, field, value) => {
      setInputValues(prevState => ({
         ...prevState,
         [lang]: {
            ...prevState[lang],
            [field]: value,
         },
      }));
   };

   const changeCoverHandler = e => {
      if (e?.target?.files?.[0]) {
         const file = e?.target?.files?.[0];
         setCoverPic(file);
         const fileURL = URL.createObjectURL(file);
         setCoverPicUrl(fileURL);
      }
   };

   const changeBannerHandler = e => {
      if (e?.target?.files?.[0]) {
         const file = e?.target?.files?.[0];
         setBannerPic(file);
         const fileURL = URL.createObjectURL(file);
         setBannerPicUrl(fileURL);
      }
   };

   const isAllFieldsFilled = () =>
      Object.keys(inputValues).every(lang =>
         Object.keys(inputValues[lang]).every(field => inputValues[lang][field].trim() !== '')
      );

   const openCategoryModal = () => {
      if (isEditBlog) {
         if (isAllFieldsFilled()) {
            setShowCategoryModal(true);
         } else {
            toast.error('Please fill all the wanted fields');
         }
      } else if (isAllFieldsFilled() && coverPic && bannerPic) {
         setShowCategoryModal(true);
      } else {
         toast.error('Please fill all the wanted fields');
      }
   };

   const closeCategoryModalHandler = () => {
      setShowCategoryModal(false);
   };

   const goBackHandler = () => {
      setIsAddEditBlogSection(false);
      setChosenBlogForEdit();
      setCoverPic();
      setCoverPicUrl();
      setBannerPic();
      setBannerPicUrl();
      setInputValues({
         en: { title: '', summary: '', text: '' },
         es: { title: '', summary: '', text: '' },
         ru: { title: '', summary: '', text: '' },
      });
   };

   return (
      <div>
         <div>
            <Button
               startIcon={<GoArrowLeft size="24px" />}
               onClick={goBackHandler}
               sx={{
                  color: '#fff',
                  fontFamily: 'poppinsExtraBold',
                  fontSize: '18px',
                  lineHeight: '24px',
                  ':hover': { backgroundColor: 'transparent', color: '#ffffff80' },
               }}
            >
               Go back
            </Button>
         </div>
         {blogDetailIsLoading ? (
            <div className="mt-24 flex items-center justify-center p-5">
               <CircularProgress color="secondary" />
            </div>
         ) : (
            <>
               <div className="mb-7 mt-8 flex items-center gap-8">
                  <div className="flex flex-1 items-center gap-4 rounded-xl border border-solid border-[#ffffff26] px-3 py-5">
                     <div className="flex flex-1 items-center justify-center">
                        {coverPicUrl ? (
                           <div className="relative h-[100px] w-full">
                              <Image src={coverPicUrl} alt="logo" className="object-cover" fill />
                           </div>
                        ) : (
                           <ImFilePicture size="35px" />
                        )}
                     </div>
                     <Divider orientation="vertical" flexItem />
                     <div className="flex-1 space-y-8">
                        <p className="text-center font-poppinsSemibold text-sm text-[#ffffffb3]">Cover picture</p>

                        <div className="mt-2">
                           <Button
                              sx={{
                                 backgroundColor: '#ffffff0d',
                                 fontFamily: 'poppinsSemibold',
                                 color: 'white',
                                 borderRadius: '12px',
                                 fontSize: '12px',
                                 height: '40px',
                              }}
                              fullWidth
                              component="label"
                              role={undefined}
                              tabIndex={-1}
                           >
                              Choose File
                              <VisuallyHiddenInput type="file" onChange={changeCoverHandler} accept="image/*" />
                           </Button>
                        </div>
                     </div>
                  </div>

                  <div className="flex flex-1 items-center gap-4 rounded-xl border border-solid border-[#ffffff26] px-3 py-5">
                     <div className="flex flex-1 items-center justify-center">
                        {bannerPicUrl ? (
                           <div className="relative h-[100px] w-full">
                              <Image src={bannerPicUrl} alt="logo" className="object-cover" fill />
                           </div>
                        ) : (
                           <ImFilePicture size="35px" />
                        )}
                     </div>
                     <Divider orientation="vertical" flexItem />
                     <div className="flex-1 space-y-8">
                        <p className="text-center font-poppinsSemibold text-sm text-[#ffffffb3]">Banner picture</p>

                        <div className="mt-2">
                           <Button
                              sx={{
                                 backgroundColor: '#ffffff0d',
                                 fontFamily: 'poppinsSemibold',
                                 color: 'white',
                                 borderRadius: '12px',
                                 fontSize: '12px',
                                 height: '40px',
                              }}
                              fullWidth
                              component="label"
                              role={undefined}
                              tabIndex={-1}
                           >
                              Choose File
                              <VisuallyHiddenInput type="file" onChange={changeBannerHandler} accept="image/*" />
                           </Button>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="mt-4 rounded-xl border border-solid border-[#ffffff26] p-6">
                  <div className="flex items-center gap-2 rounded-2xl bg-[#ffffff0d] p-2">
                     <Button
                        sx={{
                           ...langButtonSx,
                           ...(chosenLang === 'en' && { backgroundColor: '#ffffff0d' }),
                        }}
                        onClick={() => setChosenLang('en')}
                     >
                        <Image src={usFlag} alt="flag" />
                        EN
                     </Button>
                     <Button
                        sx={{
                           ...langButtonSx,
                           ...(chosenLang === 'es' && { backgroundColor: '#ffffff0d' }),
                        }}
                        onClick={() => setChosenLang('es')}
                     >
                        <Image src={esFlag} alt="flag" />
                        ES
                     </Button>
                     <Button
                        sx={{
                           ...langButtonSx,
                           ...(chosenLang === 'ru' && { backgroundColor: '#ffffff0d' }),
                        }}
                        onClick={() => setChosenLang('ru')}
                     >
                        <Image src={ruFlag} alt="flag" />
                        RU
                     </Button>
                  </div>
                  <div className="mt-6 space-y-8">
                     {chosenLang === 'en' ? (
                        <>
                           <TextField
                              fullWidth
                              placeholder="Title"
                              color="customPurple"
                              sx={{
                                 '& .MuiOutlinedInput-root': {
                                    backgroundColor: '#ffffff05',
                                    height: '72px',
                                 },
                              }}
                              value={inputValues?.en?.title}
                              onChange={e => handleInputChange('en', 'title', e.target.value)}
                           />
                           <TextField
                              fullWidth
                              placeholder="Summary"
                              color="customPurple"
                              multiline
                              minRows={5}
                              sx={{
                                 '& .MuiOutlinedInput-root': {
                                    backgroundColor: '#ffffff05',
                                 },
                              }}
                              value={inputValues?.en?.summary}
                              onChange={e => handleInputChange('en', 'summary', e.target.value)}
                           />

                           <CkEditorEn
                              initialData={inputValues?.en?.text}
                              onChange={e => handleInputChange('en', 'text', e)}
                           />
                        </>
                     ) : chosenLang === 'es' ? (
                        <>
                           <TextField
                              fullWidth
                              placeholder="Title"
                              color="customPurple"
                              sx={{
                                 '& .MuiOutlinedInput-root': {
                                    backgroundColor: '#ffffff05',
                                    height: '72px',
                                 },
                              }}
                              value={inputValues?.es?.title}
                              onChange={e => handleInputChange('es', 'title', e.target.value)}
                           />
                           <TextField
                              fullWidth
                              placeholder="Summary"
                              color="customPurple"
                              multiline
                              minRows={5}
                              sx={{
                                 '& .MuiOutlinedInput-root': {
                                    backgroundColor: '#ffffff05',
                                 },
                              }}
                              value={inputValues?.es?.summary}
                              onChange={e => handleInputChange('es', 'summary', e.target.value)}
                           />

                           <CkEditorEs
                              initialData={inputValues?.es?.text}
                              onChange={e => handleInputChange('es', 'text', e)}
                           />
                        </>
                     ) : chosenLang === 'ru' ? (
                        <>
                           <TextField
                              fullWidth
                              placeholder="Title"
                              color="customPurple"
                              sx={{
                                 '& .MuiOutlinedInput-root': {
                                    backgroundColor: '#ffffff05',
                                    height: '72px',
                                 },
                              }}
                              value={inputValues?.ru?.title}
                              onChange={e => handleInputChange('ru', 'title', e.target.value)}
                           />
                           <TextField
                              fullWidth
                              placeholder="Summary"
                              color="customPurple"
                              multiline
                              minRows={5}
                              sx={{
                                 '& .MuiOutlinedInput-root': {
                                    backgroundColor: '#ffffff05',
                                 },
                              }}
                              value={inputValues?.ru?.summary}
                              onChange={e => handleInputChange('ru', 'summary', e.target.value)}
                           />

                           <CkEditorRu
                              initialData={inputValues?.ru?.text}
                              onChange={e => handleInputChange('ru', 'text', e)}
                           />
                        </>
                     ) : null}
                  </div>

                  <div className="mt-6 flex justify-end">
                     <Button
                        variant="contained"
                        color="secondary"
                        sx={{
                           height: '72px',
                           width: '150px',
                           borderRadius: '16px',
                           fontFamily: 'poppinsSemibold',
                        }}
                        onClick={openCategoryModal}
                     >
                        Next
                     </Button>
                  </div>
               </div>
            </>
         )}

         <CategoryModal
            open={showCategoryModal}
            onClose={closeCategoryModalHandler}
            blogsDataMutate={blogsDataMutate}
            coverPic={coverPic}
            bannerPic={bannerPic}
            inputValues={inputValues}
            goBackHandler={goBackHandler}
            isEditBlog={isEditBlog}
            chosenBlogForEdit={chosenBlogForEdit}
         />
      </div>
   );
}

export default AddEditBlogSection;

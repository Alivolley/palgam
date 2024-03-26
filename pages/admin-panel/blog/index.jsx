import Image from 'next/image';
import { useState } from 'react';
import dynamic from 'next/dynamic';

// MUI
import { Button, CircularProgress, Pagination } from '@mui/material';

// Icons
import { FiPlus } from 'react-icons/fi';
import { GoArrowLeft } from 'react-icons/go';

// Assets
import usFlag from '@/assets/icons/usFlag.svg';
import ruFlag from '@/assets/icons/ruFlag.svg';
import esFlag from '@/assets/icons/esFlag.svg';

// Components
import AdminLayout from '@/components/layout/admin-layout/admin-layout';

// Apis
import useGetBlogs from '@/apis/adminPanel/blog/useGetBlogs';
import BlogCart from '@/components/pages/admin-panel/blog-cart/blog-cart';

const CkEditor = dynamic(() => import('@/components/templates/ckEditor/ckEditor'), { ssr: false });

const langButtonSx = {
   flex: '1 1 0%',
   fontFamily: 'poppinsRegular',
   color: 'white',
   borderRadius: '12px',
   height: '56px',
   gap: '8px',
   ':hover': {
      backgroundColor: '#ffffff0d',
   },
};

function Blog() {
   const [pageStatus, setPageStatus] = useState(1);
   const [isAddBlogSection, setIsAddBlogSection] = useState(false);
   const [chosenLang, setChosenLang] = useState('en');
   const [ckEditorDataEn, setCkEditorDataEn] = useState('');

   const { data: blogsData, isLoading: blogsDataIsLoading } = useGetBlogs(pageStatus);

   return (
      <AdminLayout>
         <div>
            {isAddBlogSection ? (
               <div>
                  <div>
                     <Button
                        startIcon={<GoArrowLeft size="24px" />}
                        onClick={() => setIsAddBlogSection(false)}
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
                     <div className="mt-4">
                        <CkEditor initialData={ckEditorDataEn} onChange={setCkEditorDataEn} />
                     </div>
                  </div>
               </div>
            ) : (
               <div>
                  <div>
                     {blogsDataIsLoading ? (
                        <div className="flex items-center justify-center p-5">
                           <CircularProgress color="secondary" />
                        </div>
                     ) : (
                        <div className="space-y-4">
                           {blogsData?.data?.map(item => (
                              <BlogCart key={item?.id} detail={item} />
                           ))}
                        </div>
                     )}
                     <div className="mt-10 flex items-center justify-center">
                        <Pagination
                           count={blogsData?.total_pages || 1}
                           onChange={(_, value) => setPageStatus(value)}
                           color="secondary"
                           page={blogsData?.current_page || 1}
                        />
                     </div>
                  </div>
                  <div className="fixed bottom-12 right-12">
                     <Button
                        variant="contained"
                        color="secondary"
                        sx={{
                           height: '72px',
                           width: '174px',
                           borderRadius: '120px',
                           fontFamily: 'poppinsSemibold',
                           fontSize: '16px',
                           boxShadow: '0px 12px 40px 0px rgba(255, 255, 255, 0.16)',
                        }}
                        endIcon={<FiPlus />}
                        onClick={() => setIsAddBlogSection(true)}
                     >
                        Add Blog
                     </Button>
                  </div>
               </div>
            )}
         </div>
      </AdminLayout>
   );
}

export default Blog;

export async function getServerSideProps(context) {
   const { req } = context;
   const accessToken = req?.cookies?.palgam_accessToken;
   const refreshToken = req?.cookies?.palgam_refreshToken;

   if (!accessToken && !refreshToken) {
      return {
         redirect: {
            destination: '/login',
         },
      };
   }
   return {
      props: {},
   };
}

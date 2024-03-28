import { useState } from 'react';

// MUI
import { Button, CircularProgress, Pagination } from '@mui/material';

// Icons
import { FiPlus } from 'react-icons/fi';

// Components
import AdminLayout from '@/components/layout/admin-layout/admin-layout';
import BlogCart from '@/components/pages/admin-panel/blog-cart/blog-cart';
import AddEditBlogSection from '@/components/pages/admin-panel/addEditBlogSection/addEditBlogSection';

// Apis
import useGetBlogs from '@/apis/adminPanel/blog/useGetBlogs';

function Blog() {
   const [pageStatus, setPageStatus] = useState(1);
   const [isAddEditBlogSection, setIsAddEditBlogSection] = useState(false);
   const [chosenBlogForEdit, setChosenBlogForEdit] = useState();

   const { data: blogsData, isLoading: blogsDataIsLoading, mutate: blogsDataMutate } = useGetBlogs(pageStatus);

   const setEditHandler = item => {
      setChosenBlogForEdit(item);
      setIsAddEditBlogSection(true);
   };

   return (
      <AdminLayout>
         <div>
            {isAddEditBlogSection ? (
               <AddEditBlogSection
                  setIsAddEditBlogSection={setIsAddEditBlogSection}
                  blogsDataMutate={blogsDataMutate}
                  chosenBlogForEdit={chosenBlogForEdit}
                  isEditBlog={!!chosenBlogForEdit}
                  setChosenBlogForEdit={setChosenBlogForEdit}
               />
            ) : (
               <div>
                  <div>
                     {blogsDataIsLoading ? (
                        <div className="mt-20 flex items-center justify-center p-5">
                           <CircularProgress color="secondary" />
                        </div>
                     ) : (
                        <>
                           <div className="space-y-4">
                              {blogsData?.data?.map(item => (
                                 <BlogCart
                                    key={item?.id}
                                    detail={item}
                                    blogsDataMutate={blogsDataMutate}
                                    setEditHandler={setEditHandler}
                                 />
                              ))}
                           </div>
                           <div className="mt-16 flex items-center justify-center">
                              <Pagination
                                 count={blogsData?.total_pages || 1}
                                 onChange={(_, value) => setPageStatus(value)}
                                 color="secondary"
                                 page={blogsData?.current_page || 1}
                              />
                           </div>
                        </>
                     )}
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
                        onClick={() => setIsAddEditBlogSection(true)}
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

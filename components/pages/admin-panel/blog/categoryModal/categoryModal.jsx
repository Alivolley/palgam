import { useEffect, useState } from 'react';

// MUI
import { LoadingButton } from '@mui/lab';
import { Button, CircularProgress, Dialog } from '@mui/material';

// Icons
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { FiPlus } from 'react-icons/fi';
import { BiEditAlt } from 'react-icons/bi';
import { HiOutlineTrash } from 'react-icons/hi';

// Components
import AddEditCategoryModal from '../addEditCategoryModal/addEditCategoryModal';
import ConfirmModal from '@/components/templates/confirm-modal/confirm-modal';

// Apis
import useGetCategories from '@/apis/adminPanel/blog/useGetCategories';
import useDeleteCategory from '@/apis/adminPanel/blog/useDeleteCategory';
import useAddBlog from '@/apis/adminPanel/blog/useAddBlog';
import useEditBlog from '@/apis/adminPanel/blog/useEditBlog';

function CategoryModal({
   onClose,
   open,
   blogsDataMutate,
   coverPic,
   bannerPic,
   inputValues,
   goBackHandler,
   isEditBlog,
   chosenBlogForEdit,
}) {
   const [chosenCategories, setChosenCategories] = useState([]);
   const [showAddEditCategoryModal, setShowAddEditCategoryModal] = useState(false);
   const [showDeleteCategoryModal, setShowDeleteCategoryModal] = useState(false);
   const [chosenCategoryForDelete, setChosenCategoryForDelete] = useState();
   const [chosenCategoryForEdit, setChosenCategoryForEdit] = useState();

   const {
      data: categoriesData,
      isLoading: categoriesDataIsLoading,
      mutate: categoriesDataMutate,
   } = useGetCategories(open);
   const { trigger: deleteCategoryTrigger, isMutating: deleteCategoryIsMutating } = useDeleteCategory();
   const { trigger: addBlogTrigger, isMutating: addBlogIsMutating } = useAddBlog();
   const { trigger: editBlogTrigger, isMutating: editBlogIsMutating } = useEditBlog();

   useEffect(() => {
      if (isEditBlog && chosenBlogForEdit && categoriesData) {
         const foundItems = categoriesData?.data?.filter(item => chosenBlogForEdit?.categories?.includes(item.name));
         setChosenCategories(foundItems);
      }
   }, [isEditBlog, chosenBlogForEdit, categoriesData]);

   const closeModalHandler = () => {
      onClose();
      setChosenCategories([]);
   };

   const closeDeleteModalHandler = () => {
      setShowDeleteCategoryModal(false);
      setChosenCategoryForDelete();
   };

   const showDeleteModalHandler = item => {
      setChosenCategoryForDelete(item);
      setShowDeleteCategoryModal(true);
   };

   const deleteCategoryHandler = () => {
      deleteCategoryTrigger(chosenCategoryForDelete?.id, {
         onSuccess: () => {
            categoriesDataMutate();
            closeDeleteModalHandler();
         },
      });
   };

   const closeAddEditModalHandler = () => {
      setShowAddEditCategoryModal(false);
      setChosenCategoryForEdit();
   };

   const showEditModalHandler = item => {
      setChosenCategoryForEdit(item);
      setShowAddEditCategoryModal(true);
   };

   const postBlogHandler = () => {
      const formData = new FormData();
      formData.append('english_title', inputValues?.en?.title);
      formData.append('spanish_title', inputValues?.es?.title);
      formData.append('russian_title', inputValues?.ru?.title);
      formData.append('english_text', inputValues?.en?.text);
      formData.append('spanish_text', inputValues?.es?.text);
      formData.append('russian_text', inputValues?.ru?.text);
      formData.append('english_summary', inputValues?.en?.summary);
      formData.append('spanish_summary', inputValues?.es?.summary);
      formData.append('russian_summary', inputValues?.ru?.summary);
      if (coverPic && bannerPic) {
         formData.append('cover', coverPic);
         formData.append('banner', bannerPic);
      }
      if (isEditBlog) {
         formData.append('id', chosenBlogForEdit?.id);
      } else {
         formData.append('is_hide', false);
      }
      const chosenCats = chosenCategories.map(item => item.id);
      formData.append('categories', chosenCats);

      if (isEditBlog) {
         editBlogTrigger(formData, {
            onSuccess: () => {
               blogsDataMutate();
               goBackHandler();
               closeModalHandler();
            },
         });
      } else {
         addBlogTrigger(formData, {
            onSuccess: () => {
               blogsDataMutate();
               goBackHandler();
               closeModalHandler();
            },
         });
      }
   };

   return (
      <Dialog open={open} onClose={closeModalHandler} fullWidth>
         <div className="bg-[#080609] p-7" style={{ boxShadow: '0px 12px 64px 0px rgba(0, 0, 0, 0.20)' }}>
            <div className="flex items-center justify-end">
               <Button
                  className="rounded-full"
                  onClick={closeModalHandler}
                  disabled={addBlogIsMutating || editBlogIsMutating}
               >
                  <IoIosCloseCircleOutline fontSize="30px" color="white" />
               </Button>
            </div>

            <p className="mt-4 font-poppinsLight text-xl">Specify the relevant category of your blog.</p>

            {categoriesDataIsLoading ? (
               <div className="mt-5 flex items-center justify-center p-5">
                  <CircularProgress color="secondary" />
               </div>
            ) : (
               <div className="mb-12 mt-6 flex flex-wrap items-center gap-4">
                  {categoriesData?.data?.map(item => (
                     <div
                        key={item?.id}
                        className={`flex h-14 items-stretch rounded-xl border border-solid ${
                           chosenCategories?.some(innerItem => innerItem?.id === item?.id)
                              ? 'border-[#8C72E2]'
                              : 'border-[#ffffff26] bg-[#ffffff26]'
                        }`}
                     >
                        <Button
                           color="secondary"
                           sx={{
                              fontFamily: 'poppinsLight',
                              fontSize: '12px',
                              color: '#ffffff80',
                              paddingLeft: '24px',
                              ...(chosenCategories?.some(innerItem => innerItem?.id === item?.id)
                                 ? {
                                      paddingRight: '24px',
                                   }
                                 : {
                                      paddingRight: '12px',
                                   }),
                           }}
                           onClick={() =>
                              setChosenCategories(prev => {
                                 const available = prev?.some(prevItem => prevItem?.id === item?.id);
                                 if (available) {
                                    const filtered = prev?.filter(prevItem => prevItem?.id !== item?.id);
                                    return filtered;
                                 }
                                 return [...prev, item];
                              })
                           }
                        >
                           {item?.name}
                        </Button>
                        {!chosenCategories?.some(innerItem => innerItem?.id === item?.id) && (
                           <>
                              <Button
                                 color="secondary"
                                 sx={{
                                    color: '#ffffff80',
                                    paddingX: '8px',
                                 }}
                                 onClick={() => showEditModalHandler(item)}
                              >
                                 <BiEditAlt size="20px" />
                              </Button>
                              <Button
                                 color="secondary"
                                 sx={{
                                    color: '#ffffff80',
                                    paddingLeft: '8px',
                                    paddingRight: '16px',
                                 }}
                                 onClick={() => showDeleteModalHandler(item)}
                              >
                                 <HiOutlineTrash size="20px" />
                              </Button>
                           </>
                        )}
                     </div>
                  ))}
                  <Button
                     variant="outlined"
                     color="secondary"
                     sx={{
                        height: '56px',
                        borderRadius: '12px',
                        fontFamily: 'poppinsLight',
                        paddingX: '24px',
                        fontSize: '12px',
                        color: '#ffffff80',
                        borderColor: '#ffffff26',
                     }}
                     endIcon={<FiPlus size="17px" />}
                     onClick={() => setShowAddEditCategoryModal(true)}
                  >
                     Add new
                  </Button>
               </div>
            )}

            <div className="mt-10 flex items-center gap-6">
               <Button
                  variant="contained"
                  fullWidth
                  onClick={closeModalHandler}
                  sx={{
                     fontFamily: 'poppinsSemibold',
                     height: '56px',
                     borderRadius: '12px',
                     color: 'white',
                     backgroundColor: '#ffffff0d',
                     ':hover': { backgroundColor: '#ffffff26' },
                  }}
                  disabled={addBlogIsMutating || editBlogIsMutating}
               >
                  Cancel
               </Button>
               <LoadingButton
                  variant="contained"
                  color="secondary"
                  fullWidth
                  sx={{
                     fontFamily: 'poppinsSemibold',
                     height: '56px',
                     borderRadius: '12px',
                     color: 'white',
                     ':disabled': { backgroundColor: '#221C34' },
                  }}
                  loading={addBlogIsMutating || editBlogIsMutating}
                  disabled={!chosenCategories?.length}
                  onClick={postBlogHandler}
               >
                  {isEditBlog ? 'Edit' : 'Post'}
               </LoadingButton>
            </div>
         </div>

         <AddEditCategoryModal
            open={showAddEditCategoryModal}
            onClose={closeAddEditModalHandler}
            categoriesDataMutate={categoriesDataMutate}
            detail={chosenCategoryForEdit}
            isEdit={!!chosenCategoryForEdit}
         />

         <ConfirmModal
            closeModal={closeDeleteModalHandler}
            title="Are you sure about deleting this category ?"
            confirmHandler={deleteCategoryHandler}
            open={showDeleteCategoryModal}
            confirmLoading={deleteCategoryIsMutating}
         />
      </Dialog>
   );
}

export default CategoryModal;

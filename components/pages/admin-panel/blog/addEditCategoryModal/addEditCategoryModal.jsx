import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

// MUI
import { LoadingButton } from '@mui/lab';
import { Button, CircularProgress, Dialog, TextField } from '@mui/material';

// Icons
import { IoIosCloseCircleOutline } from 'react-icons/io';

// Apis
import useAddCategory from '@/apis/adminPanel/blog/useAddCategory';
import useGetCategoryDetail from '@/apis/adminPanel/blog/useGetCategoryDetail';
import useEditCategory from '@/apis/adminPanel/blog/useEditCategory';

function AddEditCategoryModal({ onClose, open, categoriesDataMutate, detail, isEdit }) {
   const { trigger: addCategoryTrigger, isMutating: addCategoryIsMutating } = useAddCategory();
   const { trigger: editCategoryTrigger, isMutating: editCategoryIsMutating } = useEditCategory(detail?.id);
   const { data: categoryDetailData, isLoading: categoryDetailIsLoading } = useGetCategoryDetail(detail?.id);

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
      setValue,
   } = useForm({
      defaultValues: {
         nameEn: '',
         nameEs: '',
         nameRu: '',
      },
      mode: 'onSubmit',
   });

   useEffect(() => {
      if (isEdit && detail) {
         setValue('nameEn', categoryDetailData?.english_name);
         setValue('nameEs', categoryDetailData?.spanish_name);
         setValue('nameRu', categoryDetailData?.russian_name);
      }
   }, [detail?.id, categoryDetailData]);

   const closeModalHandler = () => {
      onClose();
      reset();
   };

   const formSubmit = data => {
      const newCategory = {
         english_name: data?.nameEn,
         spanish_name: data?.nameEs,
         russian_name: data?.nameRu,
      };

      if (isEdit) {
         editCategoryTrigger(newCategory, {
            onSuccess: () => {
               categoriesDataMutate();
               closeModalHandler();
            },
         });
      } else {
         addCategoryTrigger(newCategory, {
            onSuccess: () => {
               categoriesDataMutate();
               closeModalHandler();
            },
         });
      }
   };

   return (
      <Dialog open={open} onClose={closeModalHandler} fullWidth sx={{ backdropFilter: 'blur(12px)' }}>
         <form
            onSubmit={handleSubmit(formSubmit)}
            className="bg-[#080609] p-7"
            style={{ boxShadow: '0px 12px 64px 0px rgba(0, 0, 0, 0.20)' }}
         >
            <div className="flex items-center justify-end">
               <Button
                  className="rounded-full"
                  onClick={closeModalHandler}
                  disabled={addCategoryIsMutating || editCategoryIsMutating}
               >
                  <IoIosCloseCircleOutline fontSize="30px" color="white" />
               </Button>
            </div>

            <p className="mt-4 font-poppinsLight text-xl">Write the category name</p>

            {categoryDetailIsLoading ? (
               <div className="my-10 flex items-center justify-center p-5">
                  <CircularProgress color="secondary" />
               </div>
            ) : (
               <>
                  <div className="mt-8 space-y-5">
                     <TextField
                        fullWidth
                        placeholder="English name"
                        color="customPurple"
                        {...register('nameEn', {
                           required: {
                              value: true,
                              message: 'This filed is required',
                           },
                        })}
                        sx={{
                           '& .MuiOutlinedInput-root': {
                              backgroundColor: '#ffffff0d',
                              height: '64px',
                           },
                        }}
                        error={!!errors?.nameEn}
                        helperText={errors?.nameEn?.message}
                        disabled={addCategoryIsMutating || editCategoryIsMutating}
                     />
                     <TextField
                        fullWidth
                        placeholder="Spain name"
                        color="customPurple"
                        {...register('nameEs', {
                           required: {
                              value: true,
                              message: 'This filed is required',
                           },
                        })}
                        sx={{
                           '& .MuiOutlinedInput-root': {
                              backgroundColor: '#ffffff0d',
                              height: '64px',
                           },
                        }}
                        error={!!errors?.nameEs}
                        helperText={errors?.nameEs?.message}
                        disabled={addCategoryIsMutating || editCategoryIsMutating}
                     />
                     <TextField
                        fullWidth
                        placeholder="Russian name"
                        color="customPurple"
                        {...register('nameRu', {
                           required: {
                              value: true,
                              message: 'This filed is required',
                           },
                        })}
                        sx={{
                           '& .MuiOutlinedInput-root': {
                              backgroundColor: '#ffffff0d',
                              height: '64px',
                           },
                        }}
                        error={!!errors?.nameRu}
                        helperText={errors?.nameRu?.message}
                        disabled={addCategoryIsMutating || editCategoryIsMutating}
                     />
                  </div>

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
                        disabled={addCategoryIsMutating || editCategoryIsMutating}
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
                        }}
                        loading={addCategoryIsMutating || editCategoryIsMutating}
                        type="submit"
                     >
                        {isEdit ? 'Edit' : 'Add'}
                     </LoadingButton>
                  </div>
               </>
            )}
         </form>
      </Dialog>
   );
}

export default AddEditCategoryModal;

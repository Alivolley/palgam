import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Image from 'next/image';

// MUI
import { FormControl, FormHelperText, InputAdornment, OutlinedInput } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Icons
import { BiEditAlt } from 'react-icons/bi';

// Assets
import homeSection1Pic from '@/assets/images/adminPanel/home-section1.png';

// Components
import LanguageBar from '../language-bar/language-bar';

const InputStyle = {
   '& .MuiOutlinedInput-root': {
      backgroundColor: '#ffffff0d',
      height: '64px',
   },
};

function HomeSection1() {
   const [chosenLang, setChosenLang] = useState('en');

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      defaultValues: {
         titleEn: '',
         titleEs: '',
         titleRu: '',
         descriptionEn: '',
         descriptionEs: '',
         descriptionRu: '',
      },
   });

   const formSubmit = data => {
      console.log(data);
   };

   return (
      <div className="mt-6">
         <div>
            <Image src={homeSection1Pic} alt="sample" className="size-full" />
         </div>
         <div className="my-6">
            <LanguageBar chosenLang={chosenLang} setChosenLang={setChosenLang} />
         </div>
         <form className="space-y-6" onSubmit={handleSubmit(formSubmit)}>
            <div className="space-y-2">
               <p className="font-poppinsLight text-xl leading-6">Title</p>
               {chosenLang === 'en' ? (
                  <FormControl variant="outlined" fullWidth color="customPurple" sx={InputStyle}>
                     <OutlinedInput
                        {...register('titleEn', {
                           required: {
                              value: true,
                              message: 'This filed is required',
                           },
                        })}
                        endAdornment={
                           <InputAdornment position="end">
                              <BiEditAlt size="24px" />
                           </InputAdornment>
                        }
                        error={!!errors?.titleEn}
                     />
                     {errors?.titleEn?.message && <FormHelperText error>{errors?.titleEn?.message}</FormHelperText>}
                  </FormControl>
               ) : chosenLang === 'es' ? (
                  <FormControl variant="outlined" fullWidth color="customPurple" sx={InputStyle}>
                     <OutlinedInput
                        {...register('titleEs', {
                           required: {
                              value: true,
                              message: 'This filed is required',
                           },
                        })}
                        endAdornment={
                           <InputAdornment position="end">
                              <BiEditAlt size="24px" />
                           </InputAdornment>
                        }
                        error={!!errors?.titleEs}
                     />
                     {errors?.titleEs?.message && <FormHelperText error>{errors?.titleEs?.message}</FormHelperText>}
                  </FormControl>
               ) : chosenLang === 'ru' ? (
                  <FormControl variant="outlined" fullWidth color="customPurple" sx={InputStyle}>
                     <OutlinedInput
                        {...register('titleRu', {
                           required: {
                              value: true,
                              message: 'This filed is required',
                           },
                        })}
                        endAdornment={
                           <InputAdornment position="end">
                              <BiEditAlt size="24px" />
                           </InputAdornment>
                        }
                        error={!!errors?.titleRu}
                     />
                     {errors?.titleRu?.message && <FormHelperText error>{errors?.titleRu?.message}</FormHelperText>}
                  </FormControl>
               ) : null}
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
                     {...register('descriptionEn', {
                        required: {
                           value: true,
                           message: 'This filed is required',
                        },
                     })}
                     endAdornment={
                        <InputAdornment position="end" sx={{ marginTop: '-100px' }}>
                           <BiEditAlt size="24px" />
                        </InputAdornment>
                     }
                     error={!!errors?.descriptionEn}
                  />

                  {errors?.descriptionEn?.message && (
                     <FormHelperText error>{errors?.descriptionEn?.message}</FormHelperText>
                  )}
               </FormControl>
            </div>

            <LoadingButton
               type="submit"
               fullWidth
               sx={{ fontFamily: 'poppinsRegular', height: '56px', borderRadius: '16px' }}
               variant="contained"
               color="secondary"
               loading={false}
            >
               Submit
            </LoadingButton>
         </form>
      </div>
   );
}

export default HomeSection1;

// MUI
import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   FormControl,
   InputAdornment,
   OutlinedInput,
} from '@mui/material';

// Icons
import { IoIosArrowDown } from 'react-icons/io';
import { BiEditAlt } from 'react-icons/bi';

const InputStyle = {
   '& .MuiOutlinedInput-root': {
      backgroundColor: '#ffffff0d',
      height: '64px',
   },
};

function AffiliateFeatures({
   label,
   titleRegister,
   count = 2,
   featuresTextRegister1,
   featuresDescriptionRegister1,
   featuresTextRegister2,
   featuresDescriptionRegister2,
   featuresTextRegister3,
   featuresDescriptionRegister3,
   featuresTextRegister4,
   featuresDescriptionRegister4,
   featuresTextRegister5,
   featuresDescriptionRegister5,
}) {
   const myArray = Array.from({ length: count }, (_, index) => index + 1);

   return (
      <div>
         <Accordion sx={{ background: 'none', boxShadow: 'none' }}>
            <AccordionSummary expandIcon={<IoIosArrowDown />} sx={{ padding: '0px' }}>
               <p className="font-poppinsLight text-xl">{label}</p>
            </AccordionSummary>
            <AccordionDetails>
               <div className="space-y-6">
                  <div className="space-y-2">
                     <p className="font-poppinsLight text-xl leading-6">Title</p>
                     <FormControl variant="outlined" fullWidth color="customPurple" sx={InputStyle}>
                        <OutlinedInput
                           {...titleRegister}
                           endAdornment={
                              <InputAdornment position="end">
                                 <BiEditAlt size="24px" />
                              </InputAdornment>
                           }
                        />
                     </FormControl>
                  </div>
                  {myArray?.map(item => (
                     <div className="space-y-2" key={item}>
                        <p className="font-poppinsLight text-xl leading-6">{item}</p>
                        <FormControl variant="outlined" fullWidth color="customPurple" sx={InputStyle}>
                           <OutlinedInput
                              {...(item === 1
                                 ? { ...featuresTextRegister1 }
                                 : item === 2
                                   ? { ...featuresTextRegister2 }
                                   : item === 3
                                     ? { ...featuresTextRegister3 }
                                     : item === 4
                                       ? { ...featuresTextRegister4 }
                                       : item === 5
                                         ? { ...featuresTextRegister5 }
                                         : null)}
                              endAdornment={
                                 <InputAdornment position="end">
                                    <BiEditAlt size="24px" />
                                 </InputAdornment>
                              }
                           />
                        </FormControl>

                        <FormControl
                           variant="outlined"
                           fullWidth
                           color="customPurple"
                           sx={{ '& .MuiOutlinedInput-root': { backgroundColor: '#ffffff0d' } }}
                        >
                           <OutlinedInput
                              multiline
                              minRows={6}
                              {...(item === 1
                                 ? { ...featuresDescriptionRegister1 }
                                 : item === 2
                                   ? { ...featuresDescriptionRegister2 }
                                   : item === 3
                                     ? { ...featuresDescriptionRegister3 }
                                     : item === 4
                                       ? { ...featuresDescriptionRegister4 }
                                       : item === 5
                                         ? { ...featuresDescriptionRegister5 }
                                         : null)}
                              endAdornment={
                                 <InputAdornment position="end" sx={{ marginTop: '-100px' }}>
                                    <BiEditAlt size="24px" />
                                 </InputAdornment>
                              }
                           />
                        </FormControl>
                     </div>
                  ))}
               </div>
            </AccordionDetails>
         </Accordion>
      </div>
   );
}

export default AffiliateFeatures;

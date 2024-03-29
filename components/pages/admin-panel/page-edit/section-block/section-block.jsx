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

function SectionBlock({ mainTitle, firstInputTitle, firstInputRegister, secondInputTitle, secondInputRegister }) {
   return (
      <div>
         <Accordion sx={{ background: 'none', boxShadow: 'none' }}>
            <AccordionSummary expandIcon={<IoIosArrowDown />} sx={{ padding: '0px' }}>
               <p className="font-poppinsLight text-xl">{mainTitle}</p>
            </AccordionSummary>
            <AccordionDetails>
               <div className="space-y-6">
                  <div className="space-y-2">
                     <p className="font-poppinsLight text-xl leading-6">{firstInputTitle}</p>
                     <FormControl variant="outlined" fullWidth color="customPurple" sx={InputStyle}>
                        <OutlinedInput
                           {...firstInputRegister}
                           endAdornment={
                              <InputAdornment position="end">
                                 <BiEditAlt size="24px" />
                              </InputAdornment>
                           }
                        />
                     </FormControl>
                  </div>
                  <div className="space-y-2">
                     <p className="font-poppinsLight text-xl leading-6">{secondInputTitle}</p>
                     <FormControl
                        variant="outlined"
                        fullWidth
                        color="customPurple"
                        sx={{ '& .MuiOutlinedInput-root': { backgroundColor: '#ffffff0d' } }}
                     >
                        <OutlinedInput
                           multiline
                           minRows={6}
                           {...secondInputRegister}
                           endAdornment={
                              <InputAdornment position="end" sx={{ marginTop: '-100px' }}>
                                 <BiEditAlt size="24px" />
                              </InputAdornment>
                           }
                        />
                     </FormControl>
                  </div>
               </div>
            </AccordionDetails>
         </Accordion>
      </div>
   );
}

export default SectionBlock;

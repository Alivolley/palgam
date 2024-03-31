import { useEffect, useState } from 'react';

// MUI
import { Button, CircularProgress } from '@mui/material';

// Icons
import { FiPlus } from 'react-icons/fi';

// Components
import LanguageBar from '../../page-edit/language-bar/language-bar';
import IosAccordion from '../ios-accordion/ios-accordion';
import AddStepModal from '../addStepModal/addStepModal';

// Apis
import useGetSteps from '@/apis/adminPanel/others/useGetSteps';

function IosInputs() {
   const [chosenLang, setChosenLang] = useState('en');
   const [changeLangLoading, setChangeLangLoading] = useState(false);
   const [showAddStepModal, setShowAddStepModal] = useState(false);

   const { data: stepsData, isLoading: stepsIsLoading, mutate: stepsMutate } = useGetSteps(chosenLang);

   useEffect(() => {
      setChangeLangLoading(true);
      setTimeout(() => {
         setChangeLangLoading(false);
      }, 100);
   }, [chosenLang]);

   return (
      <div className="overflow-auto pr-2">
         <div className="my-3">
            <LanguageBar chosenLang={chosenLang} setChosenLang={setChosenLang} />
         </div>
         {changeLangLoading || stepsIsLoading ? (
            <div className="flex items-center justify-center p-5">
               <CircularProgress color="secondary" />
            </div>
         ) : (
            <div>
               {stepsData?.data?.map(item => (
                  <IosAccordion
                     mainTitle={`step ${item?.step}`}
                     key={item?.step}
                     detail={item}
                     stepsMutate={stepsMutate}
                     chosenLang={chosenLang}
                  />
               ))}

               <div className="flex justify-center">
                  <Button
                     sx={{ fontFamily: 'poppinsRegular', height: '56px', borderRadius: '16px', paddingX: '50px' }}
                     variant="outlined"
                     color="secondary"
                     onClick={() => setShowAddStepModal(true)}
                     endIcon={<FiPlus />}
                  >
                     Add new
                  </Button>
               </div>
            </div>
         )}

         <AddStepModal open={showAddStepModal} onClose={() => setShowAddStepModal(false)} stepsMutate={stepsMutate} />
      </div>
   );
}

export default IosInputs;

import Image from 'next/image';

// MUI
import { Button } from '@mui/material';

// Assets
import usFlag from '@/assets/icons/usFlag.svg';
import ruFlag from '@/assets/icons/ruFlag.svg';
import esFlag from '@/assets/icons/esFlag.svg';

const langButtonSx = {
   flex: '1 1 0%',
   fontFamily: 'poppinsRegular',
   color: 'white',
   borderRadius: '12px',
   height: '56px',
   gap: '8px',
   ':hover': { backgroundColor: '#ffffff0d' },
};

function LanguageBar({ chosenLang, setChosenLang }) {
   return (
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
   );
}

export default LanguageBar;

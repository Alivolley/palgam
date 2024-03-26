import { useState, useEffect } from 'react';
import { LoadingButton } from '@mui/lab';

function CountdownTimer({ initialCount = 0, onComplete = () => {}, onResetClick = () => {}, loading = false }) {
   const [count, setCount] = useState(initialCount);

   // eslint-disable-next-line consistent-return
   useEffect(() => {
      if (count > 0) {
         const timer = setTimeout(() => {
            setCount(prev => prev - 1);
         }, 1000);

         return () => clearTimeout(timer);
      }
      onComplete();
   }, [count, onComplete]);

   const formatTime = time => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
   };

   const resetHandler = () => {
      onResetClick();
      setCount(initialCount);
   };

   return (
      <div className="flex justify-end">
         <LoadingButton
            onClick={resetHandler}
            disabled={count !== 0}
            loading={loading}
            variant="contained"
            sx={{
               color: 'white',
               fontFamily: 'poppinsSemibold',
               fontSize: '12px',
               paddingX: '40px',
               height: '40px',
               borderRadius: '12px',
               backgroundColor: '#ffffff0d',
               ':hover': { backgroundColor: '#ffffff26' },
            }}
         >
            {count === 0 ? 'Resend' : `Resend in : ${formatTime(count)}`}
         </LoadingButton>
      </div>
   );
}

export default CountdownTimer;

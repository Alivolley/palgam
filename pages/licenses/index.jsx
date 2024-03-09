// MUI
import { Grid } from '@mui/material';

function Licenses() {
   return (
      <div>
         <div className="sticky top-0 overflow-hidden border-b border-solid border-[#ffffff26] bg-[#080609]">
            <div className="pb-12 pt-[143px] text-center text-white">
               <p className="font-poppinsExtraBold text-[32px] leading-[48px] customMd:text-[40px] customMd:leading-[64px]">
                  Licenses
               </p>
               <p className="mt-2 font-poppinsExtraLight text-[12px] leading-6 customMd:text-[18px] customMd:leading-8">
                  Palgam has made extensive efforts to provide its users with maximum transparency andsecurity by
                  obtaining various licenses.
               </p>
            </div>
            <div
               className="absolute inset-0 rounded-[1512px] opacity-[0.15] blur-[200px]"
               style={{ background: 'linear-gradient(180deg, #5922E9 0%, #DD43EF 100%)' }}
            />
         </div>
         <div className="mx-auto mt-12 max-w-[1112px] px-4 customLg:px-0">
            <Grid container spacing="24px">
               <Grid item xs={12} md={6}>
                  <div className="rounded-3xl bg-[#dd43f01f] p-8 customMd:h-full customMd:min-h-[384px]">
                     <p className="flex size-[72px] items-center justify-center rounded-full bg-[#dd43f04d] font-poppinsExtraBold text-[40px] text-white">
                        1
                     </p>
                     <p className="mb-4 mt-8 font-poppinsExtraBold text-[20px] leading-7 text-white customMd:text-[24px] customMd:leading-8">
                        License from Curacao
                     </p>
                     <p className="font-poppinsExtraLight text-[12px] leading-6 text-[#ffffffb3] customMd:text-[18px] customMd:leading-8">
                        It demonstrates that Palgam s management has embraced financial transparency and responsibility.
                     </p>
                  </div>
               </Grid>
               <Grid item xs={12} md={6}>
                  <div className="rounded-3xl bg-[#19c2951f] p-8 customMd:h-full customMd:min-h-[384px]">
                     <p className="flex size-[72px] items-center justify-center rounded-full bg-[#19c2954d] font-poppinsExtraBold text-[40px] text-white">
                        2
                     </p>
                     <p className="mb-4 mt-8 font-poppinsExtraBold text-[20px] leading-7 text-white customMd:text-[24px] customMd:leading-8">
                        Smart Contract Verification License
                     </p>
                     <p className="font-poppinsExtraLight text-[12px] leading-6 text-[#ffffffb3] customMd:text-[18px] customMd:leading-8">
                        t confirms that Palgam s financial system andaffiliate program are 100% decentralized, with zero
                        possibility of manipulation from thePalgam management or other users.
                     </p>
                  </div>
               </Grid>
               <Grid item xs={12} md={6}>
                  <div className="rounded-3xl bg-[#8c72e21f] p-8 customMd:h-full customMd:min-h-[384px]">
                     <p className="flex size-[72px] items-center justify-center rounded-full bg-[#8c72e24d] font-poppinsExtraBold text-[40px] text-white">
                        3
                     </p>
                     <p className="mb-4 mt-8 font-poppinsExtraBold text-[20px] leading-7 text-white customMd:text-[24px] customMd:leading-8">
                        RNG Testing License
                     </p>
                     <p className="font-poppinsExtraLight text-[12px] leading-6 text-[#ffffffb3] customMd:text-[18px] customMd:leading-8">
                        It affirms that all cards and numbers in Palgam are generated 100%randomly, and there is no
                        possibility of cheating, either by the management team or otherusers.
                     </p>
                  </div>
               </Grid>
               <Grid item xs={12} md={6}>
                  <div className="rounded-3xl bg-[#87f2fc1f] p-8 customMd:h-full customMd:min-h-[384px]">
                     <p className="flex size-[72px] items-center justify-center rounded-full bg-[#87f2fc4d] font-poppinsExtraBold text-[40px] text-white">
                        4
                     </p>
                     <p className="mb-4 mt-8 font-poppinsExtraBold text-[20px] leading-7 text-white customMd:text-[24px] customMd:leading-8">
                        License from Apple Store and Google Play
                     </p>
                     <p className="font-poppinsExtraLight text-[12px] leading-6 text-[#ffffffb3] customMd:text-[18px] customMd:leading-8">
                        The presence of the application on Apple Storeand Google Play confirms that the application has
                        undergone a rigorous examination byexperts from Apple and Google in terms of honesty,
                        transparency, and functionality, andhas been granted permission to be published on these
                        platforms.
                     </p>
                  </div>
               </Grid>
            </Grid>
         </div>
      </div>
   );
}

export default Licenses;

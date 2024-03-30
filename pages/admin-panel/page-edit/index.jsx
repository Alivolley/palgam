import { useState } from 'react';
import Image from 'next/image';

// MUI
import { Button, Grid } from '@mui/material';

// Assets
import taskSquareGray from '@/assets/icons/adminPanel/task-squareGray.svg';

// Components
import AdminLayout from '@/components/layout/admin-layout/admin-layout';
import HomeSection1 from '@/components/pages/admin-panel/page-edit/home-section1/home-section1';
import HomeSection2 from '@/components/pages/admin-panel/page-edit/home-section2/home-section2';
import HomeSection3 from '@/components/pages/admin-panel/page-edit/home-section3/home-section3';
import HomeSection4 from '@/components/pages/admin-panel/page-edit/home-section4/home-section4';
import HomeSection5 from '@/components/pages/admin-panel/page-edit/home-section5/home-section5';
import HomeSection6 from '@/components/pages/admin-panel/page-edit/home-section6/home-section6';
import SupportWhitePaper from '@/components/pages/admin-panel/page-edit/support-whitePaper/support-whitePaper';
import SupportPrivacyPolicy from '@/components/pages/admin-panel/page-edit/support-privacyPolicy/support-privacyPolicy';
import SupportTerms from '@/components/pages/admin-panel/page-edit/support-terms/support-terms';
import SupportContactUs from '@/components/pages/admin-panel/page-edit/support-contactUs/support-contactUs';
import SupportLicense from '@/components/pages/admin-panel/page-edit/support-license/support-license';
import AffiliateSection1 from '@/components/pages/admin-panel/page-edit/affiliate-section1/affiliate-section1';
import AffiliateSection3 from '@/components/pages/admin-panel/page-edit/affiliate-section3/affiliate-section3';
import AffiliateSection5 from '@/components/pages/admin-panel/page-edit/affiliate-section5/affiliate-section5';
import AffiliateSection6 from '@/components/pages/admin-panel/page-edit/affiliate-section6/affiliate-section6';
import AffiliateSection4 from '@/components/pages/admin-panel/page-edit/affiliate-section4/affiliate-section4';
import AffiliateSection2 from '@/components/pages/admin-panel/page-edit/affiliate-section2/affiliate-section2';
import HomeSection7 from '@/components/pages/admin-panel/page-edit/home-section7/home-section7';

const pageButtonSx = {
   flex: '1 1 0%',
   fontFamily: 'poppinsRegular',
   color: 'white',
   borderRadius: '12px',
   height: '56px',
   gap: '8px',
   ':hover': { backgroundColor: '#ffffff0d' },
};

function PageEdit() {
   const [chosenPage, setChosenPage] = useState('homePage');

   return (
      <AdminLayout>
         <div>
            <div className="flex items-center gap-2 rounded-2xl bg-[#ffffff0d] p-2">
               <Button
                  sx={{
                     ...pageButtonSx,
                     ...(chosenPage === 'homePage' && { backgroundColor: '#ffffff0d' }),
                  }}
                  onClick={() => setChosenPage('homePage')}
               >
                  Home page
               </Button>
               <Button
                  sx={{
                     ...pageButtonSx,
                     ...(chosenPage === 'supportPages' && { backgroundColor: '#ffffff0d' }),
                  }}
                  onClick={() => setChosenPage('supportPages')}
               >
                  Support pages
               </Button>
               <Button
                  sx={{
                     ...pageButtonSx,
                     ...(chosenPage === 'affiliateProgram' && { backgroundColor: '#ffffff0d' }),
                  }}
                  onClick={() => setChosenPage('affiliateProgram')}
               >
                  Affiliate Program
               </Button>
            </div>
            <div className="mt-6">
               {chosenPage === 'homePage' ? (
                  <Grid container spacing="16px">
                     <Grid item md={6}>
                        <div className="space-y-4">
                           <div className="rounded-2xl bg-[#ffffff0d] p-4">
                              <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                                 <p className="font-poppinsRegular text-sm leading-6">Section 1</p>
                                 <Image src={taskSquareGray} alt="icon" />
                              </div>
                              <HomeSection1 />
                           </div>
                           <div className="rounded-2xl bg-[#ffffff0d] p-4">
                              <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                                 <p className="font-poppinsRegular text-sm leading-6">Section 3</p>
                                 <Image src={taskSquareGray} alt="icon" />
                              </div>
                              <HomeSection3 />
                           </div>
                           <div className="rounded-2xl bg-[#ffffff0d] p-4">
                              <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                                 <p className="font-poppinsRegular text-sm leading-6">Section 5</p>
                                 <Image src={taskSquareGray} alt="icon" />
                              </div>
                              <HomeSection5 />
                           </div>
                        </div>
                     </Grid>
                     <Grid item md={6}>
                        <div className="space-y-4">
                           <div className="rounded-2xl bg-[#ffffff0d] p-4">
                              <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                                 <p className="font-poppinsRegular text-sm leading-6">Section 2</p>
                                 <Image src={taskSquareGray} alt="icon" />
                              </div>
                              <HomeSection2 />
                           </div>

                           <div className="rounded-2xl bg-[#ffffff0d] p-4">
                              <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                                 <p className="font-poppinsRegular text-sm leading-6">Section 4</p>
                                 <Image src={taskSquareGray} alt="icon" />
                              </div>
                              <HomeSection4 />
                           </div>

                           <div className="rounded-2xl bg-[#ffffff0d] p-4">
                              <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                                 <p className="font-poppinsRegular text-sm leading-6">Section 6</p>
                                 <Image src={taskSquareGray} alt="icon" />
                              </div>
                              <HomeSection6 />
                           </div>

                           <div className="rounded-2xl bg-[#ffffff0d] p-4">
                              <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                                 <p className="font-poppinsRegular text-sm leading-6">Section 7</p>
                                 <Image src={taskSquareGray} alt="icon" />
                              </div>
                              <HomeSection7 />
                           </div>
                        </div>
                     </Grid>
                  </Grid>
               ) : chosenPage === 'supportPages' ? (
                  <Grid container spacing="16px">
                     <Grid item md={6}>
                        <div className="space-y-4">
                           <div className="rounded-2xl bg-[#ffffff0d] p-4">
                              <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                                 <p className="font-poppinsRegular text-sm leading-6">White paper</p>
                                 <Image src={taskSquareGray} alt="icon" />
                              </div>
                              <SupportWhitePaper />
                           </div>
                           <div className="rounded-2xl bg-[#ffffff0d] p-4">
                              <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                                 <p className="font-poppinsRegular text-sm leading-6">Terms and Conditions</p>
                                 <Image src={taskSquareGray} alt="icon" />
                              </div>
                              <SupportTerms />
                           </div>
                           <div className="rounded-2xl bg-[#ffffff0d] p-4">
                              <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                                 <p className="font-poppinsRegular text-sm leading-6">Contact us</p>
                                 <Image src={taskSquareGray} alt="icon" />
                              </div>
                              <SupportContactUs />
                           </div>
                        </div>
                     </Grid>
                     <Grid item md={6}>
                        <div className="space-y-4">
                           <div className="rounded-2xl bg-[#ffffff0d] p-4">
                              <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                                 <p className="font-poppinsRegular text-sm leading-6">Privacy policy</p>
                                 <Image src={taskSquareGray} alt="icon" />
                              </div>
                              <SupportPrivacyPolicy />
                           </div>
                           <div className="rounded-2xl bg-[#ffffff0d] p-4">
                              <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                                 <p className="font-poppinsRegular text-sm leading-6">License</p>
                                 <Image src={taskSquareGray} alt="icon" />
                              </div>
                              <SupportLicense />
                           </div>
                        </div>
                     </Grid>
                  </Grid>
               ) : chosenPage === 'affiliateProgram' ? (
                  <Grid container spacing="16px">
                     <Grid item md={6}>
                        <div className="space-y-4">
                           <div className="rounded-2xl bg-[#ffffff0d] p-4">
                              <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                                 <p className="font-poppinsRegular text-sm leading-6">Section 1</p>
                                 <Image src={taskSquareGray} alt="icon" />
                              </div>
                              <AffiliateSection1 />
                           </div>
                           <div className="rounded-2xl bg-[#ffffff0d] p-4">
                              <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                                 <p className="font-poppinsRegular text-sm leading-6">Section 3</p>
                                 <Image src={taskSquareGray} alt="icon" />
                              </div>
                              <AffiliateSection3 />
                           </div>
                           <div className="rounded-2xl bg-[#ffffff0d] p-4">
                              <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                                 <p className="font-poppinsRegular text-sm leading-6">Section 5</p>
                                 <Image src={taskSquareGray} alt="icon" />
                              </div>
                              <AffiliateSection5 />
                           </div>
                           <div className="rounded-2xl bg-[#ffffff0d] p-4">
                              <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                                 <p className="font-poppinsRegular text-sm leading-6">Section 6</p>
                                 <Image src={taskSquareGray} alt="icon" />
                              </div>
                              <AffiliateSection6 />
                           </div>
                        </div>
                     </Grid>
                     <Grid item md={6}>
                        <div className="space-y-4">
                           <div className="rounded-2xl bg-[#ffffff0d] p-4">
                              <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                                 <p className="font-poppinsRegular text-sm leading-6">Section 2</p>
                                 <Image src={taskSquareGray} alt="icon" />
                              </div>
                              <AffiliateSection2 />
                           </div>
                           <div className="rounded-2xl bg-[#ffffff0d] p-4">
                              <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                                 <p className="font-poppinsRegular text-sm leading-6">Section 4</p>
                                 <Image src={taskSquareGray} alt="icon" />
                              </div>
                              <AffiliateSection4 />
                           </div>
                        </div>
                     </Grid>
                  </Grid>
               ) : null}
            </div>
         </div>
      </AdminLayout>
   );
}

export default PageEdit;

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

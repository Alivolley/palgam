import { useState } from 'react';
import Image from 'next/image';

// MUI
import { Button, ImageList, ImageListItem } from '@mui/material';

// Assets
import taskSquareGray from '@/assets/icons/adminPanel/task-squareGray.svg';

// Components
import AdminLayout from '@/components/layout/admin-layout/admin-layout';
import HomeSection1 from '@/components/pages/admin-panel/page-edit/home-section1/home-section1';
import HomeSection2 from '@/components/pages/admin-panel/page-edit/home-section2/home-section2';
import HomeSection3 from '@/components/pages/admin-panel/page-edit/home-section3/home-section3';

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
               <ImageList variant="masonry" cols={2} gap={16}>
                  <ImageListItem>
                     <div className="rounded-2xl bg-[#ffffff0d] p-4">
                        <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                           <p className="font-poppinsRegular text-sm leading-6">Section 1</p>
                           <Image src={taskSquareGray} alt="icon" />
                        </div>
                        <HomeSection1 />
                     </div>
                  </ImageListItem>

                  <ImageListItem>
                     <div className="rounded-2xl bg-[#ffffff0d] p-4">
                        <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                           <p className="font-poppinsRegular text-sm leading-6">Section 3</p>
                           <Image src={taskSquareGray} alt="icon" />
                        </div>
                        <HomeSection3 />
                     </div>
                  </ImageListItem>

                  <ImageListItem>
                     <div className="rounded-2xl bg-[#ffffff0d] p-4">
                        <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                           <p className="font-poppinsRegular text-sm leading-6">Section 2</p>
                           <Image src={taskSquareGray} alt="icon" />
                        </div>
                        <HomeSection2 />
                     </div>
                  </ImageListItem>

                  {/* <ImageListItem>
                     <div className="rounded-2xl bg-[#ffffff0d] p-4">
                        <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] p-3">
                           <p className="font-poppinsRegular text-sm leading-6">Section 4</p>
                           <Image src={taskSquareGray} alt="icon" />
                        </div>
                        <HomeSection2 />
                     </div>
                  </ImageListItem> */}
               </ImageList>
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

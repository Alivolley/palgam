import { useState } from 'react';

// MUI
import { Button } from '@mui/material';

// Icons
import { FiPlus } from 'react-icons/fi';
import { GoArrowLeft } from 'react-icons/go';

// Components
import AdminLayout from '@/components/layout/admin-layout/admin-layout';

function Blog() {
   const [isAddBlogSection, setIsAddBlogSection] = useState(false);

   return (
      <AdminLayout>
         <div>
            {isAddBlogSection ? (
               <div>
                  <div>
                     <Button
                        startIcon={<GoArrowLeft size="24px" />}
                        onClick={() => setIsAddBlogSection(false)}
                        sx={{
                           color: '#fff',
                           fontFamily: 'poppinsExtraBold',
                           fontSize: '18px',
                           lineHeight: '24px',
                           ':hover': { backgroundColor: 'transparent', color: '#ffffff80' },
                        }}
                     >
                        Go back
                     </Button>
                  </div>
                  <div className="mt-4 rounded-xl border border-solid border-[#ffffff26] p-6">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aperiam quisquam ullam enim quod, vero
                     quidem odio, aspernatur odit totam et unde harum corporis ipsa nam distinctio ad? Laudantium, sint.
                  </div>
               </div>
            ) : (
               <div>
                  <div>Blogs list</div>
                  <div className="fixed bottom-12 right-12">
                     <Button
                        variant="contained"
                        color="secondary"
                        sx={{
                           height: '72px',
                           width: '174px',
                           borderRadius: '120px',
                           fontFamily: 'poppinsSemibold',
                           fontSize: '16px',
                           boxShadow: '0px 12px 40px 0px rgba(255, 255, 255, 0.16)',
                        }}
                        endIcon={<FiPlus />}
                        onClick={() => setIsAddBlogSection(true)}
                     >
                        Add Blog
                     </Button>
                  </div>
               </div>
            )}
         </div>
      </AdminLayout>
   );
}

export default Blog;

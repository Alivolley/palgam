import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

// MUI
import { Button, Grid } from '@mui/material';

// Assets
import blogHeaderBg from '@/assets/images/blogHeaderBg.png';
import BlogsStyle from './blogs.style';

// Components
import BlogCart from '@/components/templates/blog-cart/blog-cart';

const categoryButtonSx = {
   height: '56px',
   padding: '4px 24px',
   borderRadius: '12px',
   fontSize: '12px',
   fontFamily: 'poppinsLight',
   backgroundColor: '#ffffff26',
   color: '#ffffff80',
   border: '1px solid transparent',
   whiteSpace: 'nowrap',
   flexShrink: 0,
};

function Blogs() {
   const [chosenCategory, setChosenCategory] = useState('');
   const { push, query } = useRouter();

   const changeCategoryHandler = cat => {
      if (cat !== chosenCategory) {
         setChosenCategory(cat);
         if (cat === '') {
            push(`/blogs`, undefined, { scroll: false });
         } else if (cat) {
            push(`/blogs?category=${cat}`, undefined, { scroll: false });
         }
      }
   };

   useEffect(() => {
      if (query?.category) {
         setChosenCategory(query?.category);
      }
   }, [query]);

   return (
      <BlogsStyle>
         <div className="relative">
            <div className="mx-auto h-[635px] max-w-[1076px]">
               <Image src={blogHeaderBg} alt="blog header" className="size-full object-cover" />
            </div>
            <div id="headerGradient" className="absolute inset-0" />
            <div className="absolute inset-0 left-1/2 top-1/2 mx-auto mt-14 w-full max-w-[1112px] -translate-x-1/2 -translate-y-1/2 px-4 customLg:px-0">
               <h1 className="text-center font-arimaBold text-[50px] leading-[56px] text-white customSm:text-[88px] customSm:leading-[112px]">
                  Blogs
               </h1>
               <p className="text-center font-poppinsThin text-[12px] leading-6 text-[#ffffffb3] customSm:text-[18px] customSm:leading-[32px]">
                  Discover the latest in crypto and play-to-earn gaming
               </p>
               <div className="my-12 h-px bg-[#ffffff4d]" />
               <div className="flex flex-nowrap items-center gap-4 overflow-auto pb-4 customLg:justify-center">
                  <Button
                     sx={{
                        ...categoryButtonSx,
                        ...(chosenCategory === '' && {
                           backgroundColor: 'transparent',
                           color: '#fff',
                           borderColor: '#8C72E2',
                        }),
                     }}
                     onClick={() => changeCategoryHandler('')}
                  >
                     All
                  </Button>
                  <Button
                     sx={{
                        ...categoryButtonSx,
                        ...(chosenCategory === 'crypto' && {
                           backgroundColor: 'transparent',
                           color: '#fff',
                           borderColor: '#8C72E2',
                        }),
                     }}
                     onClick={() => changeCategoryHandler('crypto')}
                  >
                     Crypto & Blockchain Updates
                  </Button>
                  <Button
                     sx={{
                        ...categoryButtonSx,
                        ...(chosenCategory === 'invest' && {
                           backgroundColor: 'transparent',
                           color: '#fff',
                           borderColor: '#8C72E2',
                        }),
                     }}
                     onClick={() => changeCategoryHandler('invest')}
                  >
                     Crypto Investment
                  </Button>
                  <Button
                     sx={{
                        ...categoryButtonSx,
                        ...(chosenCategory === 'playToEarn' && {
                           backgroundColor: 'transparent',
                           color: '#fff',
                           borderColor: '#8C72E2',
                        }),
                     }}
                     onClick={() => changeCategoryHandler('playToEarn')}
                  >
                     Play-to-Earn Tips and Tricks
                  </Button>
                  <Button
                     sx={{
                        ...categoryButtonSx,
                        ...(chosenCategory === 'community' && {
                           backgroundColor: 'transparent',
                           color: '#fff',
                           borderColor: '#8C72E2',
                        }),
                     }}
                     onClick={() => changeCategoryHandler('community')}
                  >
                     Palgam Community
                  </Button>
                  <Button
                     sx={{
                        ...categoryButtonSx,
                        ...(chosenCategory === 'tutorials' && {
                           backgroundColor: 'transparent',
                           color: '#fff',
                           borderColor: '#8C72E2',
                        }),
                     }}
                     onClick={() => changeCategoryHandler('tutorials')}
                  >
                     Tutorials
                  </Button>
               </div>
            </div>
         </div>

         <div className="relative mx-auto mt-[-150px] max-w-[1112px] px-4 customSm:mt-[-70px]">
            <Grid container spacing="24px">
               <Grid item xs={12} sm={6} md={4}>
                  <BlogCart />
               </Grid>
               <Grid item xs={12} sm={6} md={4}>
                  <BlogCart />
               </Grid>
               <Grid item xs={12} sm={6} md={4}>
                  <BlogCart />
               </Grid>
               <Grid item xs={12} sm={6} md={4}>
                  <BlogCart />
               </Grid>
               <Grid item xs={12} sm={6} md={4}>
                  <BlogCart />
               </Grid>
               <Grid item xs={12} sm={6} md={4}>
                  <BlogCart />
               </Grid>
               <Grid item xs={12} sm={6} md={4}>
                  <BlogCart />
               </Grid>
               <Grid item xs={12} sm={6} md={4}>
                  <BlogCart />
               </Grid>
               <Grid item xs={12} sm={6} md={4}>
                  <BlogCart />
               </Grid>
               <Grid item xs={12} sm={6} md={4}>
                  <BlogCart />
               </Grid>
               <Grid item xs={12} sm={6} md={4}>
                  <BlogCart />
               </Grid>
               <Grid item xs={12} sm={6} md={4}>
                  <BlogCart />
               </Grid>
            </Grid>
         </div>
      </BlogsStyle>
   );
}

export default Blogs;

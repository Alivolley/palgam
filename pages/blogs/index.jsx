import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

// MUI
import { Button, Grid, Pagination } from '@mui/material';

// Assets
import blogHeaderBg from '@/assets/images/blogHeaderBg.png';
import BlogsStyle from './blogs.style';

// Components
import BlogCart from '@/components/templates/blog-cart/blog-cart';
import axiosInstance from '@/configs/axiosInstance';

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

function Blogs({ blogsData, allCategories }) {
   const [chosenCategory, setChosenCategory] = useState('');
   const { push, query } = useRouter();
   const t = useTranslations('blogs');

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

   const changePageHandler = (e, newValue) => {
      push({
         query: {
            ...query,
            page: newValue,
         },
      });
   };

   return (
      <BlogsStyle>
         <div className="relative">
            <div className="mx-auto h-[635px] max-w-[1076px]">
               <Image src={blogHeaderBg} alt="blog header" className="size-full object-cover" />
            </div>
            <div id="headerGradient" className="absolute inset-0" />
            <div className="absolute inset-0 left-1/2 top-1/2 mx-auto mt-14 w-full max-w-[1112px] -translate-x-1/2 -translate-y-1/2 px-4 customLg:px-0">
               <h1 className="text-center font-arimaBold text-[50px] leading-[56px] text-white customSm:text-[88px] customSm:leading-[112px]">
                  {t('Blogs')}
               </h1>
               <p className="text-center font-poppinsThin text-[12px] leading-6 text-[#ffffffb3] customSm:text-[18px] customSm:leading-[32px]">
                  {t('Discover the latest in crypto and play-to-earn gaming')}
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
                     {t('All')}
                  </Button>
                  {allCategories?.data?.map(item => (
                     <Button
                        key={item?.id}
                        sx={{
                           ...categoryButtonSx,
                           ...(chosenCategory === item?.name && {
                              backgroundColor: 'transparent',
                              color: '#fff',
                              borderColor: '#8C72E2',
                           }),
                        }}
                        onClick={() => changeCategoryHandler(item?.name)}
                     >
                        {item?.name}
                     </Button>
                  ))}
               </div>
            </div>
         </div>

         <div className="relative mx-auto mt-[-150px] max-w-[1112px] px-4 customSm:mt-[-70px]">
            <Grid container spacing="24px">
               {blogsData?.data?.map(item => (
                  <Grid item xs={12} sm={6} md={4} key={item?.id}>
                     <BlogCart detail={item} />
                  </Grid>
               ))}
            </Grid>

            <div className="mt-16 flex items-center justify-center">
               <Pagination
                  count={blogsData?.total_pages}
                  onChange={changePageHandler}
                  page={Number(query?.page) || 1}
                  color="secondary"
               />
            </div>
         </div>
      </BlogsStyle>
   );
}

export default Blogs;

export async function getServerSideProps(context) {
   const { query } = context;

   let queryString = `blog/list?lang=${context.locale}`;

   if (query?.page) {
      queryString += `&page=${query.page}`;
   }
   if (query?.category) {
      queryString += `&category=${query.category}`;
   }

   const blogsData = await axiosInstance(queryString).then(res => res.data);
   const allCategories = await axiosInstance(`blog/categories?lang=${context.locale}`).then(res => res.data);

   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
         blogsData,
         allCategories,
      },
   };
}

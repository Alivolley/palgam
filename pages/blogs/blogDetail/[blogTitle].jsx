import { useRouter } from 'next/router';
import Image from 'next/image';

// MUI
import { Button } from '@mui/material';

// Icons
import { GoArrowLeft } from 'react-icons/go';

// Assets
import testPic from '@/assets/images/blogDetailPic.png';

// Styles
import BlogDetailStyle from './blogDetail.style';

function BlogDetail() {
   const { back } = useRouter();

   return (
      <BlogDetailStyle className="relative">
         <div className="absolute inset-x-0 h-[528px]" id="gradientElem" />
         <div className="relative mx-auto max-w-[1112px] px-4 pt-[144px] customMd:pt-[175px]">
            <Button
               startIcon={<GoArrowLeft size="24px" />}
               onClick={back}
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
            <div className="my-8 h-px bg-[#ffffff4d]" />

            <div className="w-full">
               <Image
                  src={testPic}
                  alt="blog"
                  className="size-full rounded-[24px] border border-solid border-[#ffffff26]"
               />
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-y-4">
               <div className="flex flex-wrap items-center gap-4">
                  <p
                     className="whitespace-nowrap rounded-xl bg-[#ffffff26] px-6 py-3 font-poppinsExtraLight text-10
                   leading-[14px] text-[#ffffff80] customSm:text-xs customSm:leading-5 customMd:py-[18px]"
                  >
                     Crypto Investment
                  </p>
                  <p
                     className="whitespace-nowrap rounded-xl bg-[#ffffff26] px-6 py-3 font-poppinsExtraLight text-10
                   leading-[14px] text-[#ffffff80] customSm:text-xs customSm:leading-5 customMd:py-[18px]"
                  >
                     Tutorials
                  </p>
               </div>
               <p className="font-poppinsThin text-xs leading-6 text-[#ffffff4d] customMd:text-[18px] customMd:leading-8">
                  29 December 2024 | By Alexis Richard
               </p>
            </div>

            <div className="mt-12">
               <p className="max-w-[745px] font-poppinsExtraBold text-[32px] leading-[48px] text-white customMd:text-[40px] customMd:leading-[64px]">
                  Lorem Ipsum is simply dummy text of the printing.
               </p>
               <p className="mt-2 font-poppinsThin text-xs leading-6 text-[#ffffff80] customMd:text-[18px] customMd:leading-8">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                  release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                  PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                  of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                  has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                  1960s with the relea Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when
                  an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                  of Lorem Ipsum.
               </p>
            </div>
         </div>
      </BlogDetailStyle>
   );
}

export default BlogDetail;

import Link from 'next/link';
import Image from 'next/image';

// Assets
import testPic from '@/assets/images/blogCartImage.png';

function BlogCart() {
   return (
      <Link
         href="/blogs/blogDetail/56"
         className="block overflow-hidden rounded-2xl border border-solid border-[#ffffff26] bg-[#ffffff0a]"
      >
         <div className="h-[240px]">
            <Image src={testPic} alt="blog" className="size-full object-cover" />
         </div>
         <div className="p-4">
            <p className="w-fit rounded-lg bg-[#ffffff26] px-4 py-1 font-poppinsExtraLight text-10 leading-[14px] text-[#ffffff80] customSm:text-xs customSm:leading-5">
               product updates
            </p>
            <p className="mt-2 line-clamp-2 font-poppinsRegular text-xs leading-6 text-white customSm:h-12 customSm:text-sm">
               Lorem Ipsum is simply dummy text of the printing.
            </p>
            <p className="mt-1 line-clamp-2 font-poppinsExtraLight text-10 leading-[14px] text-[#ffffff80] customSm:h-10 customSm:text-xs customSm:leading-5">
               Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <div className="my-4 h-px bg-[#ffffff26]" />
            <p className="font-poppinsExtraLight text-10 leading-[14px] text-[#ffffff4d] customSm:text-xs customSm:leading-5">
               29 December 2024 | By Alexis Richard
            </p>
         </div>
      </Link>
   );
}

export default BlogCart;

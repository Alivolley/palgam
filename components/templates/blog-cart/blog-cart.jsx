import Link from 'next/link';
import Image from 'next/image';

function BlogCart({ detail }) {
   return (
      <Link
         href={`/blogs/blogDetail/${detail?.title}`}
         className="block overflow-hidden rounded-2xl border border-solid border-[#ffffff26] bg-[#ffffff0a]"
      >
         <div className="relative h-[240px] w-full">
            <Image src={detail?.cover} alt="blog" className="object-cover" fill />
         </div>
         <div className="p-4">
            <div className="flex flex-nowrap items-center gap-2 overflow-hidden">
               {detail?.categories?.map(item => (
                  <p
                     key={crypto.randomUUID()}
                     className="w-fit whitespace-nowrap rounded-lg bg-[#ffffff26] px-4 py-1 font-poppinsExtraLight
                      text-10 leading-[14px] text-[#ffffff80] customSm:text-xs customSm:leading-5"
                  >
                     {item}
                  </p>
               ))}
            </div>
            <p className="mt-2 line-clamp-2 font-poppinsRegular text-xs leading-6 text-white customSm:h-12 customSm:text-sm">
               {detail?.title}
            </p>
            <p className="mt-1 line-clamp-2 font-poppinsExtraLight text-10 leading-[14px] text-[#ffffff80] customSm:h-10 customSm:text-xs customSm:leading-5">
               {detail?.summary}
            </p>
            <div className="my-4 h-px bg-[#ffffff26]" />
            <p className="font-poppinsExtraLight text-10 leading-[14px] text-[#ffffff4d] customSm:text-xs customSm:leading-5">
               {detail?.created_at} | By {detail?.author}
            </p>
         </div>
      </Link>
   );
}

export default BlogCart;

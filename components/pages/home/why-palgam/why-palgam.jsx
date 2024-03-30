// Assets
import WhyPalgamStyle from './why-palgam.style';

// Components
import Block1 from './block1/block1';
import Block2 from './block2/block2';
import Block3 from './block3/block3';
import Block4 from './block4/block4';
import Block5 from './block5/block5';
import Block6 from './block6/block6';
import Block7 from './block7/block7';
import Block8 from './block8/block8';
import Block9 from './block9/block9';
import Block10 from './block10/block10';

function WhyPalgam({ homePageData }) {
   return (
      <WhyPalgamStyle className="mt-20 px-4 py-3 customMd:px-20">
         <h3 className="text-center font-arimaBold text-[50px] leading-[56px] text-white customMd:text-[88px] customMd:leading-[112px]">
            <span id="palgamWord">{homePageData?.data?.section3?.title}</span>
         </h3>
         <pre className="mx-auto max-w-[862px] whitespace-pre-line text-center font-poppinsLight text-xs leading-[24px] text-white customMd:text-[18px] customMd:leading-[32px]">
            {homePageData?.data?.section3?.description}
         </pre>
         <div className="mt-[56px]">
            <div className="flex flex-col gap-6 customMd:flex-row">
               <Block1 detail={homePageData?.data?.section3?.block1} />
               <Block2 detail={homePageData?.data?.section3?.block2} />
            </div>
            <div className="mt-6 flex flex-col gap-6 customMd:flex-row">
               <Block3 detail={homePageData?.data?.section3?.block3} />
               <Block4 detail={homePageData?.data?.section3?.block4} />
               <Block5 detail={homePageData?.data?.section3?.block5} />
            </div>
            <div className="mt-6 flex flex-col gap-6 customMd:flex-row">
               <Block6 detail={homePageData?.data?.section3?.block6} />
               <Block7 detail={homePageData?.data?.section3?.block7} />
            </div>
            <div className="mt-6 flex flex-col gap-6 customMd:flex-row">
               <Block8 detail={homePageData?.data?.section3?.block8} />
               <Block9 detail={homePageData?.data?.section3?.block9} />
               <Block10 detail={homePageData?.data?.section3?.block10} />
            </div>
         </div>
      </WhyPalgamStyle>
   );
}

export default WhyPalgam;

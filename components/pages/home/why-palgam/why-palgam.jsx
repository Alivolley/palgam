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

function WhyPalgam() {
   return (
      <WhyPalgamStyle className="mt-20 px-4 py-3 customMd:px-20">
         <h3 className="text-center font-arimaBold text-[50px] leading-[56px] text-white customMd:text-[88px] customMd:leading-[112px]">
            Why <span id="palgamWord">Palgam?</span>
         </h3>
         <p className="mx-auto max-w-[862px] text-center font-poppinsLight text-xs leading-[24px] text-white customMd:text-[18px] customMd:leading-[32px]">
            At Palgam, valuing our players is at the heart of everything we do. Were committed to providing the best
            environment filled with outstanding features for a gaming experience like no other.
         </p>
         <div className="mt-[56px]">
            <div className="flex flex-col gap-6 customMd:flex-row">
               <Block1 />
               <Block2 />
            </div>
            <div className="mt-6 flex flex-col gap-6 customMd:flex-row">
               <Block3 />
               <Block4 />
               <Block5 />
            </div>
            <div className="mt-6 flex flex-col gap-6 customMd:flex-row">
               <Block6 />
               <Block7 />
            </div>
            <div className="mt-6 flex flex-col gap-6 customMd:flex-row">
               <Block8 />
               <Block9 />
               <Block10 />
            </div>
         </div>
      </WhyPalgamStyle>
   );
}

export default WhyPalgam;

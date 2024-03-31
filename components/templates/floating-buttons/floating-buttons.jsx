/* eslint-disable jsx-a11y/control-has-associated-label */

// Icons
import FooterInstagramIcon from '@/assets/icons/components/footerInstagramIcon';
import FooterDiscordIcon from '@/assets/icons/components/footerDiscordIcon';
import FooterTelegramIcon from '@/assets/icons/components/footerTelegramIcon';
import FooterEmailIcon from '@/assets/icons/components/footerEmailIcon';

// Apis
import useGetAllLinks from '@/apis/adminPanel/home/useGetAllLinks';

function FloatingButtons() {
   const { data: linksData } = useGetAllLinks();

   return (
      <div className="fixed bottom-4 right-4 z-[2]">
         {linksData && (
            <div className="flex flex-col gap-3">
               {linksData?.data?.instagram?.popup_active && (
                  <a
                     href={linksData?.data?.instagram?.link}
                     className="flex size-14 items-center justify-center rounded-xl bg-[#d73f9033] transition-all duration-200 hover:bg-[#00000048]"
                  >
                     <FooterInstagramIcon />
                  </a>
               )}
               {linksData?.data?.discord?.popup_active && (
                  <a
                     href={linksData?.data?.discord?.link}
                     className="flex size-14 items-center justify-center rounded-xl bg-[#5865f233] transition-all duration-200 hover:bg-[#00000048]"
                  >
                     <FooterDiscordIcon />
                  </a>
               )}
               {linksData?.data?.telegram?.popup_active && (
                  <a
                     href={linksData?.data?.telegram?.link}
                     className="flex size-14 items-center justify-center rounded-xl bg-[#039be526] transition-all duration-200 hover:bg-[#00000048]"
                  >
                     <FooterTelegramIcon />
                  </a>
               )}
               {linksData?.data?.email?.popup_active && (
                  <a
                     href={linksData?.data?.email?.link}
                     className="flex size-14 items-center justify-center rounded-xl bg-[#8c72e226] transition-all duration-200 hover:bg-[#00000048]"
                  >
                     <FooterEmailIcon />
                  </a>
               )}
            </div>
         )}
      </div>
   );
}

export default FloatingButtons;

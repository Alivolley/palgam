import { useState } from 'react';

// MUI
import { Tab, Tabs } from '@mui/material';

// Icons

// Components
import Tab1 from '@/components/pages/affiliate/tab1/tab1';
import Tab2 from '@/components/pages/affiliate/tab2/tab2';
import Tab3 from '@/components/pages/affiliate/tab3/tab3';
import Tab4 from '@/components/pages/affiliate/tab4/tab4';
import Tab5 from '@/components/pages/affiliate/tab5/tab5';

function Affiliate() {
   const [tabsValue, setTabsValue] = useState(1);

   return (
      <div>
         <div className="relative z-[1] border-b border-solid border-[#ffffff26] px-4 pt-[200px] customMd:px-20">
            <Tabs
               value={tabsValue}
               onChange={(e, newValue) => setTabsValue(newValue)}
               textColor="secondary"
               indicatorColor="secondary"
               variant="scrollable"
            >
               <Tab label="Unique Features" value={1} />
               <Tab label="Our Tables" value={2} />
               <Tab label="Earnings, Profits and Commissions" value={3} />
               <Tab label="IMPORTANT!!!" value={4} />
               <Tab label="Frequently Asked Questions" value={5} />
            </Tabs>
         </div>

         <div>
            {tabsValue === 1 ? (
               <Tab1 />
            ) : tabsValue === 2 ? (
               <Tab2 />
            ) : tabsValue === 3 ? (
               <Tab3 />
            ) : tabsValue === 4 ? (
               <Tab4 />
            ) : tabsValue === 5 ? (
               <Tab5 />
            ) : null}
         </div>
      </div>
   );
}

export default Affiliate;

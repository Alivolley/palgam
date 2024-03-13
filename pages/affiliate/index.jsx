import { useState } from 'react';

// MUI
import { Tab, Tabs } from '@mui/material';

// Icons

// Components
import Tab1 from '@/components/pages/affiliate/tab1/tab1';

function Affiliate() {
   const [tabsValue, setTabsValue] = useState(1);

   return (
      <div>
         <div className="border-b border-solid border-[#ffffff26] px-4 pt-[200px] customMd:px-20">
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

         <div className="mt-14 px-4 customMd:px-20">{tabsValue === 1 ? <Tab1 /> : null}</div>
      </div>
   );
}

export default Affiliate;

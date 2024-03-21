// Components
import AdminLayout from '@/components/layout/admin-layout/admin-layout';

function Tickets() {
   return <AdminLayout>Tickets</AdminLayout>;
}

export default Tickets;

export async function getServerSideProps(context) {
   const { req } = context;
   const accessToken = req?.cookies?.palgam_accessToken;
   const refreshToken = req?.cookies?.palgam_refreshToken;

   if (!accessToken && !refreshToken) {
      return {
         redirect: {
            destination: '/login',
         },
      };
   }
   return {
      props: {},
   };
}

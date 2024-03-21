// Components
import AdminLayout from '@/components/layout/admin-layout/admin-layout';

function PageEdit() {
   return <AdminLayout>PageEdit</AdminLayout>;
}

export default PageEdit;

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

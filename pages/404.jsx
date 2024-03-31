export default function Custom404() {
   return <h1 className="flex h-screen items-center justify-center text-5xl text-white">Page not found !!!</h1>;
}

export async function getStaticProps(context) {
   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
      },
   };
}

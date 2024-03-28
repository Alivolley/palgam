import { useState } from 'react';

// MUI
import { Button } from '@mui/material';

// Icons
import { FaUser } from 'react-icons/fa6';
import { MdDateRange } from 'react-icons/md';

// Components
import ConfirmModal from '@/components/templates/confirm-modal/confirm-modal';

// Apis
import useDeleteBlog from '@/apis/adminPanel/blog/useDeleteBlog';
import useShowHideBlog from '@/apis/adminPanel/blog/useShowHideBlog';

const buttonStyle = {
   borderRadius: '12px',
   height: '56px',
   flex: '1 0 0',
   fontSize: '12px',
   fontFamily: 'poppinsSemibold',
};

function BlogCart({ detail, blogsDataMutate, setEditHandler }) {
   const [showDeleteModal, setShowDeleteModal] = useState(false);
   const [showHideModal, setShowHideModal] = useState(false);

   const { trigger: deleteBlogTrigger, isMutating: deleteBlogIsMutating } = useDeleteBlog();
   const { trigger: showHideBlogTrigger, isMutating: showHideBlogIsMutating } = useShowHideBlog();

   const deleteBlogHandler = () => {
      deleteBlogTrigger(detail?.id, {
         onSuccess: () => {
            blogsDataMutate();
            setShowDeleteModal(false);
         },
      });
   };

   const hideShowHandler = () => {
      const formData = new FormData();
      formData?.append('id', detail?.id);
      formData?.append('is_hide', !detail?.is_hide);

      showHideBlogTrigger(formData, {
         onSuccess: () => {
            blogsDataMutate();
            setShowHideModal(false);
         },
      });
   };

   return (
      <div className="rounded-xl border border-solid border-[#ffffff26] p-6">
         <div className="flex items-center justify-between">
            <div className="space-y-2">
               <p className="flex items-center gap-2 font-poppinsExtraLight text-sm leading-6 text-[#ffffffb3]">
                  <FaUser size="18px" /> by {detail?.author}
               </p>
               <p className="flex items-center gap-2 font-poppinsExtraLight text-sm leading-6 text-[#ffffffb3]">
                  <MdDateRange size="20px" /> {detail?.created_at}
               </p>
            </div>
            <div className="flex items-center gap-2">
               {detail?.categories?.map(item => (
                  <p
                     key={crypto.randomUUID()}
                     className="flex h-14 items-center justify-center rounded-xl bg-[#ffffff26] px-6 font-poppinsLight text-xs text-[#ffffff80]"
                  >
                     {item}
                  </p>
               ))}
            </div>
         </div>

         <div className="mt-8">
            <p className="font-poppinsExtraBold text-[18px] leading-6">{detail?.title}</p>
            <p className="mt-2 font-poppinsExtraLight text-base">{detail?.summary}</p>
         </div>

         <div className="mt-8 flex items-center gap-2">
            <Button
               sx={{
                  ...buttonStyle,
                  backgroundColor: '#221C34',
                  color: '#D9D0F5',
                  ':hover': { backgroundColor: '#221c347b' },
               }}
               fullWidth
               variant="contained"
               onClick={() => setEditHandler(detail)}
            >
               Edit blog
            </Button>
            <Button
               sx={{
                  ...buttonStyle,
                  ...(detail?.is_hide
                     ? {
                          backgroundColor: '#4ade801f',
                          color: '#4ade80',
                          ':hover': { backgroundColor: '#4ade800d' },
                       }
                     : {
                          backgroundColor: '#ffc7001f',
                          color: '#FFC700',
                          ':hover': { backgroundColor: '#ffc7000d' },
                       }),
               }}
               fullWidth
               variant="contained"
               onClick={() => setShowHideModal(true)}
            >
               {detail?.is_hide ? 'Show blog' : 'Hide blog'}
            </Button>
            <Button
               sx={{
                  ...buttonStyle,
                  backgroundColor: '#f236451f',
                  color: '#F23645',
                  ':hover': { backgroundColor: '#f236450d' },
               }}
               fullWidth
               variant="contained"
               onClick={() => setShowDeleteModal(true)}
            >
               Delete blog
            </Button>
         </div>

         <ConfirmModal
            closeModal={() => setShowDeleteModal(false)}
            title="Are you sure about deleting this blog ?"
            confirmHandler={deleteBlogHandler}
            open={showDeleteModal}
            confirmLoading={deleteBlogIsMutating}
         />

         <ConfirmModal
            closeModal={() => setShowHideModal(false)}
            title={`Are you sure about ${detail?.is_hide ? 'showing' : 'hiding'} this blog ?`}
            confirmHandler={hideShowHandler}
            open={showHideModal}
            confirmLoading={showHideBlogIsMutating}
         />
      </div>
   );
}

export default BlogCart;

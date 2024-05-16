import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build';
import CkEditorStyle from './ckEditor.style';
import axiosInstance from '@/configs/axiosInstance';

function uploadAdapter(loader) {
   return {
      upload: () =>
         new Promise((resolve, reject) => {
            const body = new FormData();
            loader.file.then(file => {
               body.append('image', file);
               axiosInstance
                  .post('blog/uploadImage', body)
                  .then(res => resolve({ default: res.data.data }))
                  .catch(err => reject(err));
            });
         }),
      abort: () => {},
   };
}

function uploadPlugin(editor) {
   // eslint-disable-next-line no-param-reassign
   editor.plugins.get('FileRepository').createUploadAdapter = loader => uploadAdapter(loader);
}

const editorConfiguration = {
   extraPlugins: [uploadPlugin],
   toolbar: [
      'heading',
      '|',
      'bold',
      'italic',
      'link',
      'bulletedList',
      'numberedList',
      // '|',
      // 'outdent',
      // 'indent',
      '|',
      'imageUpload',
      'blockQuote',
      // 'insertTable',
      // 'mediaEmbed',
      'undo',
      'redo',
      'alignment',
   ],
};

function CkEditor({ initialData, onChange }) {
   return (
      <CkEditorStyle>
         <CKEditor
            config={editorConfiguration}
            editor={Editor}
            data={initialData}
            onChange={(event, editor) => {
               const data = editor.getData();
               onChange(data);
            }}
         />
      </CkEditorStyle>
   );
}

export default CkEditor;

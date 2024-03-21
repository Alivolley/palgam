import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build';
import CkEditorStyle from './ckEditor.style';

const editorConfiguration = {
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
      // 'blockQuote',
      // 'insertTable',
      // 'mediaEmbed',
      'undo',
      'redo',
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

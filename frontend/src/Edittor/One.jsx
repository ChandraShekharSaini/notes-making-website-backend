import { Editor } from '@tinymce/tinymce-react';

function TextEditor() {
  const handleEditorChange = (content, editor) => {
    console.log('Content:', content);
 // Debug
  };
 
  return (
    <Editor
      apiKey= {import.meta.env.VITE_TAYLOR_SECRET}

      init={{
        height: "90vh",
        menubar: true,
        plugins: 'link image code anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
      }}
      onEditorChange={handleEditorChange}
    />
  );
}

export default TextEditor;
import React from "react";
// import { attachmentServices } from 'js/services';

import { Editor } from '@tinymce/tinymce-react';

export const EditorComponent = (props) => {

    const handleImageUpload = (blobInfo, success, failure) => {
        let formData = new FormData();
        formData.append('filename', blobInfo.blob(), blobInfo.filename());

        // attachmentServices.uploadPostMedia(formData)
        // .then(function (response) {
        //   success(response.post_media_url);
        // })
        // .catch(function (error) {
        //     failure('Error Uploading Files. Please Try Again.');
        //     return;
        // });
    }
    const handleEditorChange = (content) => {
        props.onChange && props.onChange(content)
    }
    return (
        <Editor
            id={props.id}
            value={ props.content}
            apiKey={process.env.REACT_APP_TINY_MCE_KEY}
            init={{
                content_css : "https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css, /css/content-css/tiny-mce-content.css",
                height: props.height || 400,
                menubar: false,
                statusbar: false,
                extended_valid_elements : "adcomponenttinymce[type][class]",
                quickbars_insert_toolbar: false,
                quickbars_selection_toolbar: 'bold italic underline quicklink ',
                custom_elements: "adcomponenttinymce",
                plugins: [
                    'advlist autolink lists link image charmap preview anchor', ' visualblocks code fullscreen', ' table paste lists noneditable', 'quickbars'
                ],
                toolbar: props.hide_toolbar ? false : true,
                toolbar1: !props.hide_toolbar && `undo redo | alignleft  aligncenter alignright | bold italic underline strikethrough | forecolor backcolor |  numlist blockquote code | ${ !props.advertisement &&  'fontsizeselect fontselect  | adMediaButton'}`,
                toolbar2:  !props.hide_toolbar && props.advertisement && `fontsizeselect fontselect  | adMediaButton ${ props.advertisement && 'addAdvertisementButton'}`,
                images_upload_handler: handleImageUpload,
                setup: (editor) => {
                    editor.ui.registry.addButton('adMediaButton', {
                        text: 'Add Media',
                        tooltip: 'Add Media',
                        onAction: () => {  editor.execCommand('mceImage') }
                    })
                    editor.ui.registry.addButton('addAdvertisementButton', {
                        text: 'Add Advertisement',
                        tooltip: 'Add Advertisement',
                        onAction: function (_) {
                          editor.insertContent('<adcomponenttinymce class="mceNonEditable" /></adcomponenttinymce>');
                        }
                    })
                },
            }}
            onEditorChange={handleEditorChange}
            onKeyDown={props.onKeyDown}
        />
    );

}

import React, { useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

//import { attachmentServices } from 'js/services';
//import { toast } from "react-toastify";

registerPlugin(
  FilePondPluginFileValidateType,
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview
);

export const FileUploadComponent = (props) => {
  const [uploads, setUpload] = useState(0);
  console.log('uploads', uploads);
  const uploadFile = (error, file) => {
    console.log(file);
    if (!error && file) {
      console.log(file);
      setUpload((uploads) => uploads + 1);
      //const formData = new FormData();
      // formData.append('filename', file.file);
      // formData.append('entity_type', props.entity_type);
      //props.fileUploadLoading && props.fileUploadLoading(true);
      // attachmentServices.upload(formData)
      // .then(function (response) {
      //     props.fileUploadLoading && props.fileUploadLoading(false);
      //     props.onSuccess && props.onSuccess(response);
      //     setUpload( uploads => uploads - 1 );
      // })
      // .catch(function (error) {
      //     toast.error('Failed to upload attachment')
      //     props.fileUploadLoading && props.fileUploadLoading(false);
      //     setUpload( uploads => uploads - 1 );
      //     props.onError && props.onError(error);
      //     return;
      // });
    } else {
      // toast.error('Failed to upload attachment')
    }
  };
  return (
    <React.Fragment>
      {/* { uploads > 0 ?
                <div className="sweet-loading cm-file-upload">
                    <BarLoader
                        size={50}
                        color={"#8a85ff"}
                        loading={true}
                    />
                </div>
            : */}
      <FilePond
        //allowMultiple={props.multiple ? props.multiple  : false }
        labelIdle={`<div class="upload-icon"><img src="/images/admin/global/upload.svg" alt="" /></div><div class="drag-files">Drag Here or <span>Browse Files</span></div>`}
        // maxFiles={props.multiple ? props.max ? props.max : 10  : 1 }
        className={'cm-file-upload'}
        //acceptedFileTypes={props.accepted}
        onaddfile={uploadFile}
        allowMultiple={true}
      />
    </React.Fragment>
  );
};

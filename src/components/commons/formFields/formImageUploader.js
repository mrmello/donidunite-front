import React from 'react'
import './fields.css'

function getBase64(file, cb) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
      cb(reader.result)
  };
  reader.onerror = function (error) {
      console.log('Error: ', error);
  };
}

const FormImageUploader = ({
  input
}) => {
  return (
    <input
    type="file"
    multiple="true"
    onChange={
      ( e ) => {
        e.preventDefault();
        if(e.target.files) {
          let files = []
          for(let file of e.target.files) {
            getBase64(file, (result) => {
              files.push(result)
            });
          }
          input.onChange(files);
        }
      }
    }
    />
  )
}

export default FormImageUploader;
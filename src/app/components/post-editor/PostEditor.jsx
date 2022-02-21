import React from 'react';
import styles from './PostEditor.module.css';
import { Button } from 'react-bootstrap';
import { useAlert } from '@hooks/useAlert';
import { useDispatch, useSelector } from 'react-redux';
import { set } from '@reducers/form/formSlice';
import CheckboxInput from '@components/checkbox-input/CheckboxInput';
import DragAndDropInput from '@components/drag-and-drop-input/DragAndDropInput';
import { api } from '@api/fakeApi.js';

function PostEditor() {
  const showAlert = useAlert();
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.value), 
    { header, isHeader, isImage,  postBody, title } = useSelector((state) => state.form.value)

  const handleInputChange =  event => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    dispatch(set({
      ...formData,
      [event.target.name]: value
    }));
  }

  const imagePreview = (file) => {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
        dispatch(set({
            ...formData,
            'image': reader.result
        }));
    }
  }

  const handleInputFileChange =  event => {
    event.preventDefault();
    imagePreview(event?.dataTransfer?.files[0]);
  }

  const handleSubmit = event => {
    event.preventDefault();
    api.saveData(formData).then(showAlert)
  };

  return (
    <div className={ styles.postEditor }>
      <div className={ styles.container }>
        <form onSubmit={ handleSubmit }>
          <h2>Settings</h2>
          <div className="mb-3 mt-4">
            <input onChange={ handleInputChange } value={ title } type="text" name="title" className="form-control" id="textTitle" placeholder="Title" />
          </div>
          
          <div className="mb-3">
            <textarea onChange={ handleInputChange } value={ postBody } name="postBody" className="form-control" id="textareaPostText" rows="3" placeholder="Some post text"></textarea>
          </div>
          
          <CheckboxInput onChange={ handleInputChange } isCheck={ isHeader } name="isHeader" id="headerSwitchCheck" text="Header">
            <div className="mb-3">
              <input onChange={ handleInputChange }  value={ header } name="header" type="text" className="form-control" id="textHeader" placeholder="Header"/>
            </div>
          </CheckboxInput>
          
          <CheckboxInput onChange={ handleInputChange } isCheck={ isImage } name="isImage" id="ImageSwitchCheck" text="Image">
            <DragAndDropInput name="image" onChange={ handleInputFileChange } />
          </CheckboxInput>

          <Button as="input" type="submit" value="Save" variant="primary" />{' '}
        </form>
      </div>
    </div>
  );
}

export default PostEditor;

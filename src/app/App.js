import React, { useEffect } from 'react';
import PostEditor from '@components/post-editor/PostEditor';
import PostPreview from '@components/post-preview/PostPreview';
import { Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { set } from '@reducers/form/formSlice';
import { api } from  '@api/fakeApi.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const isShow = useSelector((state) => state.alert.value);
  const formData = useSelector((state) => state.form.value);
  const dispatch = useDispatch();
  
  useEffect(() => {
    api.getData()
      .then(data => data && dispatch(set(Object.assign({ ...formData }, data))))
  }, []);

  return (
    <div className="App">
      <div className="container-grid">
        <Alert style={{ zIndex: '1080'  }} show={ isShow } className="z-index-999 w-auto m-4 position-absolute end-0" variant="info">Post saved</Alert>
        <PostEditor />
        <PostPreview />
      </div>
    </div>
  );
}

export default App;

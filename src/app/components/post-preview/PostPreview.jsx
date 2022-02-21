import React from 'react';
import styles from './PostPreview.module.css';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';


function PostPreview() {
  const { 
    title,
    postBody,
    header,
    isHeader,
    isImage,
    image,
  } = useSelector((state) => state.form.value)

  return (  
    <div className={ styles.postPreview }>
      <Card style={{'width': '100%'}}>
        { isHeader && <Card.Header>{ header }</Card.Header> }
        { isImage && image && <Card.Img variant="top" src={ image } alt="Card thumbnail"/> }
        <Card.Body>
          <Card.Title>{ title }</Card.Title>
          <Card.Text>
            { postBody }
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PostPreview;

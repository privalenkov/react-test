import React from 'react';
import styles from './DragAndDropInput.module.css';

function DragAndDropInput({ name, onChange, value }) {
    return (
        <div className='input-group-fileInput mb-3'>
            <input
                name={ name }
                type='file' 
                id={ styles.fileInput }
                accept='image/*'
            />
            <label 
                className={ styles.inputLabel } 
                htmlFor='fileInput'
                onDragOver={(e) => e.preventDefault()}
                onDrop={ onChange }
            >Drop File Here</label>
        </div>
    );
}

export default DragAndDropInput;

import { React, useState } from 'react';

function CheckboxInput({ onChange, isCheck, name, id, text, children }) {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(!checked);
    onChange(e);
  };

  return (
    <>
    <div className="form-check form-switch mb-3">
        <input
            name={ name } 
            className="form-check-input" 
            type="checkbox" 
            id={ id }
            checked={ isCheck }
            onChange={ handleChange }
        />
        <label className="form-check-label" htmlFor={ id }>{ text }</label>
    </div>
    { isCheck ? children : null}
    </>
  );
}

export default CheckboxInput;

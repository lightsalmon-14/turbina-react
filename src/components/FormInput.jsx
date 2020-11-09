import React from 'react';
import { useField } from 'formik';

const FormInput = ({ ...props }) => {

  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name} className="form__field">
        <input className={`form__input ${meta.touched && meta.error ? "form__input_error" : ""}`} {...field} {...props} />
        {meta.touched && meta.error && <span className="form__item-error">{meta.error}</span>}
      </label>
    </>
  );
};

export default FormInput;

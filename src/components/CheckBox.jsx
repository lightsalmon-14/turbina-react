import React from 'react';
import { useField } from 'formik';

const CheckBox = ({ ...props }) => {

  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="form__field">
        <input className="form__input form__input_radio" {...field} {...props} type="checkbox" />
        <span className="form__radio-text">
          Согласен с <a className="form__radio-accent" href="#">офертой</a>
        </span>
      </label>
      {meta.touched && meta.error && <span className="form__item-error">{meta.error}</span>}
    </>
  );
};

export default CheckBox;

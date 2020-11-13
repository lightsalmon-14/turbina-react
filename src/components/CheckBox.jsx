import React from 'react';
import { useField } from 'formik';
import { externalLinks as link } from '../utils/content';

const CheckBox = ({ ...props }) => {

  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="form__field">
        <input className="form__input form__input_checkbox" {...field} {...props} type="checkbox" />
        <span className="form__checkbox-text">
          Согласен с <a className="form__checkbox-accent" target="_blank" href={link.terms}>офертой</a>
        </span>
      </label>
      {meta.touched && meta.error && <span className="form__item-error">{meta.error}</span>}
    </>
  );
};

export default CheckBox;

import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormInput from './FormInput';
import CheckBox from './CheckBox';


function SubmitForm() {
  
  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  return (
    <section className="form">
      <h3 className="form__title">форма</h3>
      <p className="form__paragraph">
        Заполняя эту форму, вы становитесь частью проекта.</p>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          text: '',
          terms: false
        }}

        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, "Mininum 3 characters")
            .max(15, "Maximum 15 characters")
            .required("Required!"),
          email: Yup.string()
            .email("Invalid email format")
            .required("Required!"),
          phone: Yup.string()
            .matches(phoneRegExp, 'Phone number is not valid')
            .required("Required!"),
          text: Yup.string()
            .min(10, "Mininum 10 characters")
            .max(300, "Maximum 300 characters")
            .required("Required!"),
          terms: Yup.bool()
            .oneOf([true], 'Accept Terms & Conditions is required')
          })}

        onSubmit={(values, { setSubmitting, resetForm }) => {
          alert(JSON.stringify(values));
          setSubmitting(false);
          resetForm(values);
        }}
      >
        <Form className="form__fields" noValidate>
          <FormInput
            name="name"
            type="text"
            placeholder="Имя и фамилия автора"
          />
          <FormInput
            name="phone"
            type="tel"
            placeholder="Телефон"
          />
          <FormInput
            name="email"
            type="email"
            placeholder="Почта"
          />
          <FormInput
            name="text"
            type="text"
            placeholder="Стихи"
          />
          <CheckBox 
            name="terms"
          />
          <button className="form__button button"
            type="submit"
          >
            Отправить форму
          </button>
        </Form>
      </Formik>
    </section >
  )
}
export default SubmitForm;


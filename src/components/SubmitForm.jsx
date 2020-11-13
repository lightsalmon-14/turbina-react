import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormInput from './FormInput';
import CheckBox from './CheckBox';
import { postForm } from '../utils/api';

function SubmitForm() {

  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
  const [isSubmitingError, setIsSubmitingError] = React.useState('');
  const [isSubmitingButton, setIsSubmitingButton] = React.useState('Отправить форму');

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
            .min(3, "Имя должно быть не короче 3 символов*")
            .max(60, "Имя не должно быть длиннее 50 символов*")
            .required("Обязательное поле*"),
          email: Yup.string()
            .email("Не действительный адрес электронной почты*")
            .required("Обязательное поле*"),
          phone: Yup.string()
            .matches(phoneRegExp, "Номер телефона недействителен*")
            .required("Обязательное поле*"),
          text: Yup.string()
            .min(10, "Стих должен быть не короче 10 символов*")
            .max(500, "Стих не должен быть длиннее 500 символов*")
            .required("Обязательное поле*"),
          terms: Yup.bool()
            .oneOf([true], "Требуется принять условия*")
        })}

        onSubmit={(values, { setSubmitting, resetForm }) => {
          postForm(values)
            .then(() => {
              setTimeout(() => {
                setSubmitting(false);
                setIsSubmitingError('');
                setIsSubmitingButton('Ура, форма отправлена!');
                resetForm('');
                console.log((JSON.stringify(values, null, 2)));
              }, 1500)
            })
            .then(() => {
              setTimeout(() => {
                setIsSubmitingButton('Отправить другую форму');
              }, 3000)
            })
            .catch((err) => {
              setTimeout(() => {
                console.log(err);
                setIsSubmitingError('Упс, что-то пошло не так и форма не отправилась, попробуйте ещё раз!');
                resetForm('');
              }, 1500)
            })
        }}
      >
        {formik => (
          <Form className="form__fields"
            noValidate >
            <FormInput
              name="name"
              type="text"
              placeholder="Имя и фамилия автора"
            />
            <FormInput
              name="phone"
              type="tel"
              placeholder="Телефон  +7 XXX XXX XX XX"
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
              {formik.isSubmitting ? 'Форма отправляеться...' : `${isSubmitingButton}`}
            </button>
            <span className="form__button-error">{isSubmitingError}</span>
          </Form>
        )}
      </Formik>
    </section >
  )
}
export default SubmitForm;


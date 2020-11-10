import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormInput from './FormInput';
import CheckBox from './CheckBox';

function SubmitForm() {

  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
  const [isState, setIsState] = React.useState('');

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
            .min(3)
            .max(15)
            .required(),
          email: Yup.string()
            .email()
            .required(),
          phone: Yup.string()
            .matches(phoneRegExp)
            .required(),
          text: Yup.string()
            .min(10)
            .max(300)
            .required(),
          terms: Yup.bool()
            .oneOf([true])
        })}

        onSubmit={(values, { setSubmitting, resetForm }) => {
          fetch('url', {
            method: 'POST',
            body: JSON.stringify({ values }),
            headers: {
              'Content-Type': 'application/json; charset=UTF-8'
            }
          })
            // .then((res) => {
            //   if (res.ok) {
            //     return res.json()
            //   }
            //   return Promise.reject(`Ошибка: ${res.status}`); 
            // }) 
            .then(() => {
              setTimeout(() => {
                setSubmitting(false);
                console.log((JSON.stringify(values, null, 2)));
                setIsState('');
                resetForm('');
              }, 1500)
            })
            .catch((err) => {
              console.log(err);
              setIsState('Упс, что-то пошло не так и форма не отправилась, попробуйте ещё раз!')
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
            {formik.isSubmitting}
            </button>
            <span className="form__button-error">{isState}</span>
          </Form>
        )}
      </Formik>
    </section >
  )
}
export default SubmitForm;


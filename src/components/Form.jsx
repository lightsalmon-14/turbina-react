import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';


////// add styles to btn when form isnt valid 
////// red error lines
// const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Mininum 3 characters")
    .max(15, "Maximum 15 characters")
    .required("Required!"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Required!"),
  phone: Yup.string()
    // .matches(phoneRegExp, 'Phone number is not valid') ///
    .required("Required!"),
  text: Yup.string()
    .min(10, "Mininum 10 characters")
    .max(300, "Maximum 300 characters")
    .required("Required!"),
  agreement: Yup.bool()
    .oneOf([true], 'Accept Terms & Conditions is required')
})

function Form() {
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
          agreement: false
        }}
        validationSchema={formSchema}
        onSubmit={(values, { resetForm }) => {
          alert(JSON.stringify(values));
          resetForm(values);
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
          isValid,
          dirty
        }) => {
          console.log(values)
          return (
            <form className="form__fields" onSubmit={handleSubmit} noValidate>
              <label className="form__field">
                <input
                  type="text"
                  className="form__input form__input_error"
                  name={"name"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Имя и фамилия автора"
                />
                {errors.name && touched.name && <span className="form__item-error">{errors.name}</span>}
              </label>
              <label className="form__field">
                <input
                  type="email"
                  className="form__input form__input_error"
                  name={"email"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Почта"
                />
                {errors.email && touched.email && <span className="form__item-error">{errors.email}</span>}
              </label>
              <label className="form__field">
                <input
                  type="tel"
                  className="form__input form__input_error"
                  name={"phone"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  placeholder="Телефон"
                />
                {errors.phone && touched.phone && <span className="form__item-error">{errors.phone}</span>}
              </label>
              <label className="form__field">
                <input
                  type="text"
                  className="form__input form__input_error"
                  name={"text"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.text}
                  placeholder="Стихи"
                />
                {errors.text && touched.text && <span className="form__item-error">{errors.text}</span>}
              </label>
              <label className="form__field">
                <input
                  type="checkbox"
                  className="form__input form__input_radio"
                  name={"agreement"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={values.agreement}
                />
                <span className="form__radio-text">
                  Согласен с <a className="form__radio-accent" href="#">офертой</a>
                </span>
                {errors.agreement && touched.agreement && <span className="form__item-error">{errors.agreement}</span>}
              </label>
              <button className="form__button button"
                type={"submit"}
                // disabled={!(isValid && dirty)}
              >
                Отправить форму
              </button>
            </form>
          )
        }}
      </Formik>
    </section >
  )
}
export default Form;


import React from 'react';

function Form(props) {
  return (
    <section className="form">
      <h3 className="form__title">форма</h3>
      <p className="form__paragraph">
        Заполняя эту форму, вы становитесь частью проекта.
      </p>
      <form className="form__fields"
        name="text-form"
        action="#"
        method="POST"
        noValidate
      >
        <label className="form__field">
          <input
            type="text"
            id="name-input"
            className="form__input form__input_error"
            name="name"
            placeholder="Имя и фамилия автора"
            minLength="3"
            maxLength="50"
            required
          />
          <span id="name-input-error" className="form__item-error"></span>
        </label>
        <label className="form__field">
          <input
            type="email"
            id="email-input"
            className="form__input form__input_error"
            name="email"
            placeholder="Почта"
            required
          />
          <span id="email-input-error" className="form__item-error"></span>
        </label>
        <label className="form__field">
          <input
            type="tel"
            id="phone-input"
            className="form__input"
            name="phone"
            pattern=""
            placeholder="Телефон"
            required
          />
          <span id="phone-input-error" className="form__item-error"></span>
        </label>
        <label className="form__field">
          <input
            type="text"
            id="text-input"
            className="form__input"
            name="text"
            placeholder="Стихи"
            minLength="5"
            maxLength="500"
            required />
          <span id="text-input-error" className="form__item-error"></span>
        </label>
        <label className="form__field">
          <input
            type="radio"
            id="radio-input"
            className="form__input form__input_radio"
            name="agreement"
            required
          />
          <span id="radio-input-error" className="form__item-error"></span>
          <span className="form__radio-text">
            Согласен с <span className="form__radio-accent">офертой</span>
          </span>
        </label>
        <button className="form__button button" type="submit">Отправить форму</button>
        <span className="form__button-error">
          Упс, что-то пошло не так и форма не отправилась, попробуйте ещё раз!
          </span>
      </form>
    </section>
  )
}

export default Form;

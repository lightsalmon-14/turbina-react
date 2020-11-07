import React from 'react';

function Form(props) {

  const [inputValue, setInputValue] = React.useState({
    name: '',
    email: '',
    // phone: '',
    text: '',
  });


  const [isValid, setIsValid] = React.useState({ name: false, email: false,  text: false, agreement: false }); // add phone
  const [validationMessage, setValidationMessage] = React.useState({ name: '', email: '',  text: '' }); // add phone
  const [isChecked, setIsChecked] = React.useState(false);

  // function handleCheckBox() {
  //   setIsChecked(!isChecked)
  // }



  let isFormValid = Object.values(isValid).every(Boolean);

  // console.log(isFormValid)
  // console.log(isChecked)
  // console.log(isValid)

  function handleInputChange(event) {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    })
    setIsChecked(!isChecked)
    setIsValid({
      ...isValid,
      [name]: event.target.validity.valid,
    })
    setValidationMessage({
      ...validationMessage,
      [name]: event.target.validationMessage,
    })
  }

  // React.useEffect(() => {
  //   setInputValue({
  //     name: '',
  //     email: '',
  //     phone: '',
  //     text: ''
  //   });
  //   // setValidationMessage({ name: '', email: '', phone: '', text: '' });
  //   // setIsValid({ name: false, email: false, phone: false, text: false });//
  // }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setInputValue({
      name: '',
      email: '',
      // phone: '',
      text: '',
    })
  }

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
        onSubmit={handleSubmit}
      >
        <label className="form__field">
          <input
            type="text"
            id="name-input"
            className="form__input form__input_error"
            name="name"
            value={inputValue.name}
            placeholder="Имя и фамилия автора"
            minLength="3" maxLength="50"
            required
            onChange={handleInputChange}
          />
          <span id="name-input-error" className={!isValid.name ? 'form__item-error' : ""}>{validationMessage.name}</span>
        </label>
        <label className="form__field">
          <input
            type="email"
            id="email-input"
            className="form__input form__input_error"
            name="email"
            value={inputValue.email}
            placeholder="Почта"
            required
            onChange={handleInputChange}
          />
          <span id="email-input-error" className={!isValid.email ? 'form__item-error' : ""}>{validationMessage.email}</span>
        </label>
        {/* <label className="form__field">
          <input
            type="tel"
            id="phone-input"
            className="form__input"
            name="phone"
            value={inputValue.phone}
            pattern=""
            placeholder="Телефон"
            required
            onChange={handleInputChange}
          />
          <span id="phone-input-error" className={!isValid.phone ? 'form__item-error' : ""}>{validationMessage.phone}</span>
        </label> */}
        <label className="form__field">
          <input
            type="text"
            id="text-input"
            className="form__input"
            name="text"
            value={inputValue.text}
            placeholder="Стихи"
            minLength="5"
            maxLength="500"
            required
            onChange={handleInputChange}
          />
          <span id="text-input-error" className={!isValid.text ? 'form__item-error' : ""}>{validationMessage.text}</span>
        </label>
        <label className="form__field">
          <input
            type="checkbox"
            id="radio-input"
            className="form__input form__input_radio"
            name="agreement"
            required
            onChange={handleInputChange}
          />
          <span id="radio-input-error" className="form__item-error"></span>
          <span className="form__radio-text">
            Согласен с <span className="form__radio-accent">офертой</span>
          </span>
        </label>
        <button className={`form__button button" ${!isFormValid ? 'form__button_disabled' : ''}`}
        type="submit"
        >
        Отправить форму
        </button>
        <span className="form__button-error"></span>
      </form>
    </section>
  )
}
export default Form;


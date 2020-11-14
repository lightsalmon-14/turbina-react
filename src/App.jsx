import React from 'react';
import Description from './components/Description';
import Footer from './components/Footer';
import SubmitForm from './components/SubmitForm';
import Header from './components/Header';

function App() {
	const [ isBlur, setBlur ] = React.useState(false)

	const blurHandler = () => {
		setBlur(true)
	}

  return (
    <>
      <Header onBlur={ blurHandler } isBlur={isBlur} />
      <main className="content">
        <Description />
        <SubmitForm />
      </main>
      <Footer />
    </>
  );
}

export default App;

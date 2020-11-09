import Description from './components/Description';
import Footer from './components/Footer';
import SubmitForm from './components/SubmitForm';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main className="content">
        <Description />
        <SubmitForm />
      </main>
      <Footer />
    </>
  );
}

export default App;

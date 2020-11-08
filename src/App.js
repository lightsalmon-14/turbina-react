import Description from './components/Description';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main className="content">
        <Description />
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default App;

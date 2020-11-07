import Description from './components/Description';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  return (
    <div className='root'>
      <Header />
      <main className="content">
        <Description />
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;

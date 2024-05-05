import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>App</Container>
      </main>
      <Footer />
    </>
  );
};

export default App;

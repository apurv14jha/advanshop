import { Container } from 'react-bootstrap';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>App</Container>
      </main>
    </>
  );
};

export default App;

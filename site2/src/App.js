import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Bem-Vindo ao Cadastro e consulta de pets</h2>
      <Link to='/cadastro'>Cadastro</Link>
      <Link to='/consulta'>Consulta</Link>
    </div>
  );
}

export default App;

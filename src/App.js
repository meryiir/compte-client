import './App.css';
import CompteForm from './components/CompteForm';
import CompteList from './components/CompteList';

// Composant principal
function App() {
  return (
    <div className="App">
      <h1 className="text-center mt-4 mb-4">Gestion des Comptes</h1>
      <CompteForm />
      <CompteList />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const items = ['Churrasco', 'Futebol', 'Truco'];

function App() {
  return (
    <div className="App">
      <header className="ListItems">
       {items.map(buscar => <ul>{Task(buscar)}</ul>)}
      </header>
    </div>
  );
}


export default App;

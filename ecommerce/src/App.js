import './App.css';
import { ItemListCointainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';


function App() {
  return (
      <>
      <header>
      <div className='title'>
        <h1>Music Store</h1>
      </div>
      <div className='navbar'>
      <NavBar/> 
      </div>
      </header>
      <div className='props'>
      <ItemListCointainer greeting="Hola, esto es un prop 🧩"/>
      </div>
      </>
  );
}

export default App;

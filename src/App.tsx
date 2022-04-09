import { Counter } from './features/counter/Counter';
import { selectName } from './features/names/namesSlice';
import { useAppSelector } from './app/hooks';

import CreateName from './CreateName';
import PopNames from './DeleteNames';

import './App.css';

function App() {
  const names = useAppSelector(selectName);

  return (
    <div className="App">
      <CreateName/>

      <PopNames />
      <section>
        <h3>Names:</h3>
        { names.length === 0 
        ? <span>Lista de nomes está vazia.</span>
        :
        names.map((name, index) => (
          <p key={index}>
            {name}
          </p>
        ))}
      </section>

      <br/>
      <h3>Contador:</h3>
        <Counter />
    </div>
  );
}

export default App;

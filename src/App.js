import logo from './logo.svg';
import ten from './Imagenes/tenis.png';
import pin from './Imagenes/10_equipo_ping_pong-jpg.webp';
import bas from './Imagenes/la-historia-del-basquetbol.webp';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Datos personales</h2>
        <p>Joseph Aaron Salazar Guachambala</p>
        <p>Juan unigarro y vicente alvares</p>
        <p>0987583831</p>
        <p>joseph.salazar@epn.edu.ec</p>

        <h2>Lista de estudios</h2>
        <p>Bachillerato general unificado </p>
        <h2>Lista de erramientas ulitizadas</h2>
        <ul>
          <li>css</li>
          <li>html</li>
          <li>VS Code</li>
          <li>Java script</li>
          <li>React</li>
        </ul>

        <h2>Deporte favorito</h2>
        <div className="deportes">
          <div className="d1">
            <img src={ten}/>
            <h3>Tenis</h3>
          </div>
          <div className="d2">
          <img src={pin}/>
          <h3>Ping Pong</h3>
          </div>
          <div className="d3">
          <img src={bas}/>
          <h3>Baloncesto</h3>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

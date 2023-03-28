import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <form onSubmit={presion}>
        <p>Ingrese una frase:
          <input type="letter" name="valor1" />
        </p>
        <p>
          <input type="submit" value="mostrar" />
        </p>
      </form>
    </div>
  );
}

function presion(e) {
  e.preventDefault();
  var mostrar=prompt(mostrar);

  alert('REPITA EL TEXO INGRESADO:'+mostrar);
 
}

export default App;
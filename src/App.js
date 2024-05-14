import logo from './img/logo.png';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } 
             alt="Бессмертный Род"
             className='header-logo' />
        <a href="#" className="header-link">Бессмертный Род</a>
        <div className="header-login">login</div>
      </header>

      <nav className="App-nav">
        <div>Profile</div>
        <div>Messages</div>
      </nav>

      <main className="App-main">
        Содержимое
      </main>

      <footer className="App-footer">
        Подвал
      </footer>
    </div>
  );
}

export default App;

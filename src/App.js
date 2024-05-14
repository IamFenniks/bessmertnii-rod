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
        <div className=''>

          Profile

        </div>
        <div className=''>

          Messages

        </div>
        <div className=''>

          News

        </div>
        <div className=''>

          Music

        </div>
        <div className=''>

          Settings

        </div> 
      
      </nav>

      <main className="App-main">
        <div>
          Avatar + desription
        </div>

        <div>
          My post
        </div>

        <div>
          New post
        </div>

        <div>
          <section>Post 1</section>
          <section>Post 2</section>
          <section>Post 3</section>
        </div>
      </main>

      <footer className="App-footer">
        Подвал
      </footer>
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/content-components/Profile';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

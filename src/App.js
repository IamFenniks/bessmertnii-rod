import './App.css';
import Header from './components/static-comp/Header';
import Nav from './components/static-comp/Nav';
import Main from './components/content-comp/Profile';
import Footer from './components/static-comp/Footer';

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

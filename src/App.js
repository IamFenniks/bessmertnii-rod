import './App.css';
import Header from './components/static-comp/Header/Header';
import Nav from './components/static-comp/Nav/Nav';
import Main from './components/content-comp/Main';
import Footer from './components/static-comp/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Main 
          myPosts={ props.myPosts } 
          chItems={ props.chItems }
          mesItems={ props.mesItems }
        />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

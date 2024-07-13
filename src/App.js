import './App.css';
import Header from './components/static-comp/Header/Header';
import Nav from './components/static-comp/Nav/Nav';
import Main from './components/content-comp/Main';
import Footer from './components/static-comp/Footer/Footer';

const App = (props) => {
  return (
      <div className="App">
        <Header />
        <Nav />
        <Main 
          state={ props.state } 
          updateNewPostText={ props.updateNewPostText }
          addPost={ props.addPost }  />
        <Footer />
      </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import './mycss.css';
import Header from './components.js/Header.js';
import List from './components.js/List';
import Age from './components.js/Age';
import Image from './components.js/Image';



function App() {
  return (
   

    <div className="header">

      <Header />
      <List  />
      <Age />
      <Image />



    </div>

  );
}

export default App;

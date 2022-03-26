import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './components/Shop/Shop';
import NavbarHeader from './components/Navbar/NavbarHeader'
import Question from './components/Question/Question';
function App() {
  return (
    <div>
     <NavbarHeader></NavbarHeader>
     <Shop></Shop> 
     <Question></Question>
    </div>
  );
}

export default App;

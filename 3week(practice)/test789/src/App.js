import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

const Header = () =>{
  return(
    <div className='era'>
      <ul>
        <li>one </li>
        <li>two </li>
        <li>three </li>
        <li>four </li>
      </ul>
    </div>
  )
}

const Footer = () =>{
  return(
    <div className='test'>
      <ul>
        <li>fdsa </li>
        <li>fda </li>
        <li>afds </li>
        <li>afd </li>
      </ul>
    </div>
  )
}

export default App;

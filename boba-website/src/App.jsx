//import MainLogo from './images/MainLogo.PNG';
import './App.css';
import Header from './components/Header/Header.jsx';
import SlidingText from './components/SlidingText/SlidingText.jsx';
import MainPage from './components/MainPage/MainPage.jsx';

export default function App() {
  return (
    <div className="App">
      <Header />
      <SlidingText />
      <MainPage />
    </div>
  );
}